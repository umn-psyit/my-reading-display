import {Container} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import CalculatorComponent from '../components/calculator-component';

export default function Calculator() {
  return (
    <Container maxWidth="md" style={{padding: 0}}>
      <Head>
        <title>Calculator | My Reading Display</title>
      </Head>

      <main>
        <CalculatorComponent />
      </main>

      <footer />
    </Container>
  );
}
