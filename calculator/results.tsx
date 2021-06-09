import { Box, TableContainer, Typography, Paper, TableHead, Table, TableRow, TableCell} from '@material-ui/core';
import React, { Component } from 'react';
import {OutputValues} from '../calculator/calculate';

interface ResultsProps {
	results: OutputValues;
}

export default class Results extends Component<ResultsProps> {
	render() {
		const { results } = this.props;

		return (
			<Box hidden={!results.show} aria-live="polite">
				<Typography variant='h3' style={{marginTop: '2rem'}}>Results</Typography>
				<a id="results" />
				<Typography>To achieve a maximum reading speed, the reader needs a display with a width larger than {(results.minWidth).toFixed(2)}cm ({(results.minWidth / 2.54).toFixed(2)}in).</Typography>

				<TableContainer component={Paper} style={{maxWidth: '15rem', margin: '1rem 0'}}>
					<Table aria-label="point size for chosen font(s)">
						<TableHead>
							<TableRow>
								<TableCell>Hello</TableCell>
								<TableCell align="center">Hello</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
			</Box>
		);
	};
}