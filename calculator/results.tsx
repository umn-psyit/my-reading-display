import { Accordion, AccordionDetails, AccordionSummary, Box, Button, InputAdornment, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { calculateMaxPointSize, calculateMinPointSize, getXFFromFont, InputValues, OutputValues } from '../calculator/calculate';
import { distanceUnits, fontOptions } from "../calculator/options-definitions";
import { roundPoints } from "../src/util";
import { displayMeasures } from '../calculator/typical-display-measures';

interface ResultsProps {
	results: OutputValues;
	inputs: InputValues;
}

interface PointSizeTableRows {
	font: string;
	pointSize: number;
}

function getPointSizeTableData(inputs: InputValues, results: OutputValues): PointSizeTableRows[] {
	var rows: PointSizeTableRows[] = [];

	if (results.show) {
		if (inputs.selectedFont === 'No Preference') {
			for (var i = 1; i < fontOptions.length - 1; i++) { // go to -1 since we are skipping "No Preference"
				rows.push({ font: fontOptions[i].font, pointSize: calculateMinPointSize(results.viewDistance, results.CPS, fontOptions[i].xf) });
			}
		} else {
			console.log(inputs.selectedFont);
			const xf = getXFFromFont(inputs.selectedFont);
			if (typeof xf === 'number') {
				rows.push({ font: inputs.selectedFont, pointSize: calculateMinPointSize(results.viewDistance, results.CPS, xf) });
			}
		}
	}

	return rows;
}

interface MinMaxTableRows {
	font: string;
	min: number;
	max: number;
}

function getMinMaxTableData(inputs: InputValues, results: OutputValues, furtherChoices: FurtherChoice): MinMaxTableRows[] {
	var rows: MinMaxTableRows[] = [];

	if (results.show) {
		if (inputs.selectedFont === 'No Preference') {
			for (var i = 1; i < fontOptions.length - 1; i++) { // go to -1 since we are skipping "No Preference"
				var width = -1;
				if (furtherChoices.chosenDisplayUnits === 'in') {
					width = 2.54 * furtherChoices.chosenDisplaySize;
				} else {
					width = furtherChoices.chosenDisplaySize;
				}

				rows.push({ font: fontOptions[i].font, min: calculateMinPointSize(results.viewDistance, results.CPS, fontOptions[i].xf), max: calculateMaxPointSize(width, fontOptions[i].wf) });
			}
		} else {
			console.log(inputs.selectedFont);
			const xf = getXFFromFont(inputs.selectedFont);
			if (typeof xf === 'number') {
				rows.push({ font: inputs.selectedFont, min: results.minPoint, max: results.maxPoint });
			}
		}
	}

	return rows;
}

const validationSchema = yup.object({
	chosenDisplaySizeUnits: yup
		.mixed()
		.oneOf(distanceUnits.map(({ label }) => (label)))
		.label('Chosen Display Size Units'),
	chosenDisplaySize: yup
		.number()
		.moreThan(0)
		.label('Chosen Display Size')
});

class FurtherChoice {
	chosenDisplayUnits: string;
	chosenDisplaySize: number;
	constructor(chosenDisplayUnits: string, chosenDisplaySize: number) {
		this.chosenDisplayUnits = chosenDisplayUnits;
		this.chosenDisplaySize = chosenDisplaySize;
	}
}

const initialValues = {
	chosenDisplaySizeUnits: distanceUnits[0].label,
	chosenDisplaySize: 24
}

function shouldShowWarning(furtherChoices: FurtherChoice, minWidth: number) {
	console.log(furtherChoices);
	console.log(minWidth);
	if (furtherChoices.chosenDisplayUnits === 'in') {
		if (furtherChoices.chosenDisplaySize * 2.54 < minWidth) {
			return true;
		}
		return false;
	} else {
		if (furtherChoices.chosenDisplaySize < minWidth) {
			return true;
		}
		return false;
	}
}

export default function Results(props: ResultsProps) {
	const { results, inputs } = props;
	const minWidthString = `${(results.minWidth).toFixed(2)}cm (${(results.minWidth / 2.54).toFixed(2)}in)`;
	const [showMinMaxTable, setShowMinMaxTable] = React.useState(false);
	const [furtherChoices, setFurtherChoices] = React.useState(new FurtherChoice('', -1));
	const [showWarning, setShowWarning] = React.useState(false);

	return (
		<Box hidden={!results.show} aria-live="polite" style={{ marginBottom: '3rem' }}>
			<a id="results" href="#results" />
			<Typography variant='h3' style={{ marginTop: '2rem' }}>Results</Typography>
			<Typography style={{ marginTop: '1rem' }}>To achieve a maximum reading speed, the reader needs a display with a width larger than {minWidthString}.</Typography>

			<Accordion style={{ marginTop: '1rem' }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>See Dimensions of Typical Displays</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TableContainer component={Paper} style={{ margin: '1rem 0' }}>
						<Table aria-label="point size for chosen font(s)">
							<TableHead>
								<TableRow>
									<TableCell>Device </TableCell>
									<TableCell>Diagonal Screen Size (inch)</TableCell>
									<TableCell>Screen Width (inch)</TableCell>
									<TableCell>Screen Width (cm)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{ displayMeasures.map(({ device, diagonalInch, widthInch, widthCM }) => (
									<TableRow key={diagonalInch}>
										<TableCell scope="row">
											{device}
										</TableCell>
										<TableCell scope="row">
											{diagonalInch} in
										</TableCell>
										<TableCell scope="row">
											{widthInch} in
										</TableCell>
										<TableCell scope="row">
											{widthCM} cm
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</AccordionDetails>
			</Accordion>

			<Typography style={{ marginTop: '2rem' }}>The table below shows the point size you will need when reading on a display with {minWidthString} width using different fonts.</Typography>

			<TableContainer component={Paper} style={{ maxWidth: '25rem', margin: '1rem 0' }}>
				<Table aria-label="point size for chosen font(s)">
					<TableHead>
						<TableRow>
							<TableCell>Font</TableCell>
							<TableCell align="center">Point Size</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{getPointSizeTableData(inputs, results).map(({ font, pointSize }) => (
							<TableRow key={font}>
								<TableCell component="th" scope="row">
									{font}
								</TableCell>
								<TableCell align="center">
									{roundPoints(pointSize)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => { setShowMinMaxTable(true); const fc = new FurtherChoice(values.chosenDisplaySizeUnits, values.chosenDisplaySize); setFurtherChoices(fc); setShowWarning(shouldShowWarning(fc, results.minWidth)) }}
			>
				{props =>
					<Form onSubmit={props.handleSubmit}>
						<Typography style={{ marginTop: '2rem', marginBottom: '1rem' }}>Enter a new width here to see what print size range have for effective reading (sp?):</Typography>
						<TextField
							required
							id="chosenDisplaySize"
							name="chosenDisplaySize"
							label="Display Size"
							value={props.values.chosenDisplaySize}
							onChange={props.handleChange}
							error={props.touched.chosenDisplaySize && Boolean(props.errors.chosenDisplaySize)}
							helperText={props.touched.chosenDisplaySize && props.errors.chosenDisplaySize}
							InputProps={{
								endAdornment: <InputAdornment position="end" aria-live="polite">{props.values.chosenDisplaySizeUnits}</InputAdornment>,
							}}
							style={{ width: '10rem', margin: '0 1rem' }}
						/>
						<TextField
							select
							required
							id="chosenDisplaySizeUnits"
							name="chosenDisplaySizeUnits"
							label="Display Size Units"
							value={props.values.chosenDisplaySizeUnits}
							onChange={props.handleChange}
							style={{ width: '13rem' }}
							error={props.touched.chosenDisplaySizeUnits && Boolean(props.errors.chosenDisplaySizeUnits)}
							helperText={props.touched.chosenDisplaySizeUnits && props.errors.chosenDisplaySizeUnits}
						>
							{distanceUnits.map(({ label }, index) => (
								<MenuItem key={index} value={label}>{label}</MenuItem>
							))}
						</TextField>
						<Button variant="contained" color="primary" style={{ marginLeft: '1rem' }} type="submit">Show table</Button>
					</Form>}
			</Formik>
			<Box hidden={!showWarning}>
				<Typography style={{ marginTop: '2rem' }}>This display size is smaller than the minimum for the conditions specified. Please try a display size larger the the minimum of {minWidthString}</Typography>
			</Box>

			<Box hidden={!showMinMaxTable}>
				<TableContainer component={Paper} style={{ maxWidth: '25rem', margin: '1rem 0' }}>
					<Table aria-label="point size for chosen font(s)">
						<TableHead>
							<TableRow>
								<TableCell>Font</TableCell>
								<TableCell align="center">Minimum Point Size</TableCell>
								<TableCell align="center">Maximum Point Size</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{getMinMaxTableData(inputs, results, furtherChoices).map(({ font, min, max }) => (
								<TableRow key={font}>
									<TableCell component="th" scope="row">
										{font}
									</TableCell>
									<TableCell align="center">
										{roundPoints(min)}
									</TableCell>
									<TableCell align="center">
										{roundPoints(max)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
}