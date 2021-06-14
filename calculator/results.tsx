import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { calculateMinPointSize, calculateMinWidth, getXFFromFont, InputValues, OutputValues } from '../calculator/calculate';
import { fontOptions } from "../calculator/options-definitions";

interface ResultsProps {
	results: OutputValues;
	inputs: InputValues;
}

interface TableRows {
	font: string;
	pointSize: number;
}

function getTableData(inputs: InputValues, results: OutputValues): TableRows[] {
	var rows: TableRows[] = [];

	if (results.show) {
		if (inputs.selectedFont === 'No Preference') {
			for (var i = 1; i < fontOptions.length - 1; i++ ) { // go to -1 since we are skipping "No Preference"
				rows.push({font: fontOptions[i].font, pointSize: calculateMinPointSize(results.viewDistance, results.CPS, fontOptions[i].xf)});
			}
		} else {
			console.log(inputs.selectedFont);
			const xf = getXFFromFont(inputs.selectedFont);
			if (typeof xf === 'number') {
				rows.push({font: inputs.selectedFont, pointSize: calculateMinPointSize(results.viewDistance, results.CPS, xf)});
			}
		}
	}

	return rows;
}

export default class Results extends Component<ResultsProps> {
	render() {
		const { results, inputs } = this.props;
		const minWidthString = `${(results.minWidth).toFixed(2)}cm (${(results.minWidth / 2.54).toFixed(2)}in)`;
		console.log(inputs);

		return (
			<Box hidden={!results.show} aria-live="polite">
				<a id="results" href="#results"/>
				<Typography variant='h3' style={{marginTop: '2rem'}}>Results</Typography>
				<Typography style={{marginTop: '1rem'}}>To achieve a maximum reading speed, the reader needs a display with a width larger than {minWidthString}.</Typography>

				<Typography style={{marginTop: '2rem'}}>The table below shows the point size you will need when reading on a display with {minWidthString} width using different fonts.</Typography>

				<TableContainer component={Paper} style={{maxWidth: '25rem', margin: '1rem 0'}}>
					<Table aria-label="point size for chosen font(s)">
						<TableHead>
							<TableRow>
								<TableCell>Font</TableCell>
								<TableCell align="center">Point Size</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{getTableData(inputs, results).map(({font, pointSize}) => (
								<TableRow key={font}>
									<TableCell component="th" scope="row">
										{font}
									</TableCell>
									<TableCell align="center">
										{pointSize.toFixed(1)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		);		
	};
}