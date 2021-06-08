import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import InputForm from '../calculator/input-form';

import { Button, Card, CardContent, List, Link as MuiLink, ListItem, ListItemText, Typography } from '@material-ui/core';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>My Reading Display</title>
			</Head>

			<main>
				<InputForm />

				{/* <Box hidden={!hasResults} aria-live="polite">
					<a id="results"></a>
					<Typography variant="h4" style={{ marginTop: '1em' }}>Results</Typography>

					<Typography variant="body1" style={{ marginTop: '1em' }}>To achieve a maximum reading speed, the reader needs a display with a width larger than {minDisplayWidth.toFixed(1)}cm ({(minDisplayWidth / 2.54).toFixed(1)} inch).</Typography>

					<Typography variant="body1" style={{ marginTop: '1em' }}>Please refer to the table below for a list of common displays that meet this requirements, and choose a preferred display.</Typography>

					<Typography variant="body2" style={{ background: '#DDDDDD', padding: '2em', margin: '1em' }}>-- Placeholder for displays -- </Typography>

					<Typography variant="body1" style={{ marginTop: '1em' }}>To achieve maximum reading speed on a tablet display, when reading at {selectedViewingDistance} with {selectedFont} font, the reader needs to use a print size between {minPointSize.toFixed(1)}pt and {maxPointSize.toFixed(1)}pt.</Typography>

					<Typography variant="body2" style={{ background: '#DDDDDD', padding: '2em', margin: '1em' }}>-- Placeholder for figure -- </Typography>
				</Box> */}

			</main>

			<footer>
			</footer>
		</div>
	)
}