import { Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import CalculatorComponent from '../components/calculator-component';

export default function Calculator() {
  return (
    <Container maxWidth="md">
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
