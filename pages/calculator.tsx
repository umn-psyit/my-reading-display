import {Box, Button, Typography, Container} from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {OutputValues, InputValues} from '../calculator/calculate';
import InputForm from '../calculator/input-form';
import Results from '../calculator/results';
import {useRouter} from 'next/router';
import ThemeChanger from '../components/theme-changer';

export default function Calculator() {
  const [results, setResults] = React.useState(new OutputValues(false, -1, -1, -1, -1, -1, -1));
  const [inputs, setInputs] = React.useState(new InputValues('', '', '', '', '', '', '', -1, ''));
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Head>
        <title>Calculator | My Reading Display</title>
      </Head>

      <main>
        {/* <Link href="/"><Button color="secondary" variant="contained" style={{marginTop: '1rem'}}>Return Home</Button></Link> */}
        <InputForm setResults={setResults} setInputs={setInputs} router={router} />
        <Results results={results} inputs={inputs}/>
      </main>

      <footer>
      </footer>
    </Container>
  );
}
