import { Box, Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { OutputValues } from '../calculator/calculate';
import InputForm from '../calculator/input-form';
import Results from '../calculator/results';
import { useRouter } from 'next/router';

export default function Calculator() {
	const [results, setResults] = React.useState(new OutputValues(false, -1, -1, -1));
	const router = useRouter();

	return (
		<div className="container">
			<Head>
				<title>Calculator | My Reading Display</title>
			</Head>

			<main>
				<Link href="/"><Button color="secondary" variant="contained">Return Home</Button></Link>
				<InputForm setResults={setResults} router={router} />
				<Results results={results} />
			</main>

			<footer>
			</footer>
		</div>
	)
}