import {Container} from '@material-ui/core';
import { usePDF } from '@react-pdf/renderer';
import Head from 'next/head';
import React from 'react';
import CalculatorComponent from '../components/calculator-component';
import ReportPDF from '../calculator/report';


export default function Calculator() {
  const [instance, update] = usePDF({ document: <ReportPDF /> });

  return (
    <Container maxWidth="md" style={{padding: 0}}>
      <Head>
        <title>Calculator | My Reading Display</title>
      </Head>

      <main>
        <CalculatorComponent pdfInstance={instance} reportUpdateFunc={update} />
      </main>

      <footer />
    </Container>
  );
}
