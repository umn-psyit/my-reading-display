import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { PropsWithChildren, useContext } from 'react';
import { roundPoints } from '../src/util';
import {InputValues, OutputValues} from './calculate';
import { CalculatorContext } from './calculator-context';
import { getPointSizeTableData, getMinMaxTableData, FurtherChoice } from './results';

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    // backgroundColor: '#E4E4E4'
    padding: '1.5cm'
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1
  },
  title: {
    textAlign: 'center',
    marginBottom: '0.5cm',
    fontSize: '26pt'
  },
  date: {
    textAlign: 'center',
    // marginBottom: '0.5cm',
    fontSize: '14pt'
  },
  subheader: {
    fontFamily: 'Helvetica',
    fontSize: '16pt',
    marginBottom: '0.25cm',
    marginTop: '0.25cm'
  },
  content: {
    fontSize: '12pt',
    fontFamily: 'Times-Roman'
  },
  option: {
    fontSize: '12pt',
    marginLeft: '0.5cm'
  },
  descText: {
    marginBottom: '0.35cm'
  },
  middleDescText: {
    marginTop: '0.35cm'
  }
});

type ReportPDFProps = {
  input: InputValues;
  output: OutputValues;
  furtherChoices: FurtherChoice;
  minWidthString: string;
}

const ListItem = ({children, style}: PropsWithChildren<{style: Style}>) => {
  return <Text style={style}>&bull; {children}</Text>
};


const ReportPDF = ({input, output, furtherChoices, minWidthString}: ReportPDFProps) => {
  // const c = useContext(CalculatorContext);
  console.log("generating report");
  console.log(furtherChoices.chosenDisplaySize);
  return <Document
    title="My Reading Display Report"
    creator="My Reading Display"
    producer="https://myreadingdisplay.umn.edu"
  >
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>My Reading Display Report</Text>
      <Text style={styles.date}>{new Date(Date.now()).toDateString()}</Text>
      <View style={styles.content}>
        <Text style={styles.subheader}>Input Options</Text>
        <ListItem style={styles.option}>Visual Acuity: {input.visualAcuityUnits}{input.visualAcuity}</ListItem>
        <ListItem style={styles.option}>Critical Print Size: {input.criticalPrintSize !== '' ? input.criticalPrintSizeUnits : 'No input'}{input.criticalPrintSize}</ListItem>
        <ListItem style={styles.option}>Has central field loss: {input.hasCentralFieldLoss}</ListItem>
        <ListItem style={styles.option}>Viewing Distance: {input.selectedViewingDistance === 'Custom' ? input.customViewDistance : input.selectedViewingDistance}
        {input.selectedViewingDistance === 'Custom' ? input.customViewDistanceUnits : ''}</ListItem>

        <Text style={styles.subheader}>Results</Text>
        <Text style={styles.descText} >To achieve a maximum reading speed, the reader needs a
        display with a width larger than {minWidthString}.</Text>
        {getPointSizeTableData(input, output).map(({font, pointSize}, index) => {
          return <ListItem style={styles.option} key={index}>{font}: {roundPoints(pointSize)}pt</ListItem>
        })}

        <Text style={[styles.descText, styles.middleDescText]}>Based on the chosen display size of {furtherChoices.chosenDisplaySize}{furtherChoices.chosenDisplaySizeUnits}, the following table shows a range of point sizes for the selected font(s).</Text>
        {getMinMaxTableData(input, output, furtherChoices).map(({font, min, max}, index) => {
          return <ListItem style={styles.option} key={index}>{font}: between {roundPoints(min)}pt and {roundPoints(max)}pt.</ListItem>
        })}
      </View>
    </Page>
  </Document>
};

export default ReportPDF;