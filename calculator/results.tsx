import {
  Box, Button, InputAdornment, MenuItem, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead,
  TableRow, TextField, Typography, Tooltip
} from '@material-ui/core';
import {Form, Formik, FormikProps, useFormikContext} from 'formik';
import React, {useContext, useEffect} from 'react';
import * as yup from 'yup';
import {useRouter} from 'next/dist/client/router';
import {
  calculateMaxPointSize, calculateMinPointSize,
  getXFFromFont, getWXFromFont, getWFFromFont, InputValues, OutputValues,
} from './calculate';
import {distanceUnits, fontOptions} from '../content/options-definitions';
import {roundPoints} from '../src/util';
import TypicalDisplaySizeAccordion from '../components/display-sizes-accordion';
import {CalculatorContext} from './calculator-context';
import ReportDownloadButton from '../components/report-download-button';
import ReportPDF from './report';
import { usePDF } from '@react-pdf/renderer';
import {text} from '../content/calculator-text';

const ResetInputValues = () => {
  const { resetForm } = useFormikContext();
  const { furtherChoices } = useContext(CalculatorContext);
  useEffect(() => {
    if (furtherChoices.chosenDisplaySize === -1 || furtherChoices.chosenDisplaySize === '') {
      resetForm();
    }
  }, [furtherChoices, resetForm] );
  return null;
}

interface PointSizeTableRows {
  font: string;
  pointSize: number;
}

export function getPointSizeTableData(inputs: InputValues, results:
  OutputValues): PointSizeTableRows[] {
  const rows: PointSizeTableRows[] = [];

  if (results.show) {
    if (inputs.selectedFont === 'No Preference') {
      // go to -1 since we are skipping "No Preference"
      for (let i = 1; i < fontOptions.length - 1; i++) {
        rows.push({font: fontOptions[i].font,
          pointSize: calculateMinPointSize(results.viewDistance,
              results.CPS, fontOptions[i].xf, fontOptions[i].wx)});
      }
    } else {
      console.log(inputs.selectedFont);
      const xf = getXFFromFont(inputs.selectedFont);
      const wx = getWXFromFont(inputs.selectedFont);      
      if ((typeof xf === 'number') && (typeof wx === 'number')) {
        rows.push({font: inputs.selectedFont,
          pointSize: calculateMinPointSize(results.viewDistance,
              results.CPS, xf, wx)});
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

export function getMinMaxTableData(inputs: InputValues, results: OutputValues,
    furtherChoices: FurtherChoice): MinMaxTableRows[] {
  const rows: MinMaxTableRows[] = [];

  if (results.show && furtherChoices.chosenDisplaySize !== '') {
    if (inputs.selectedFont === 'No Preference') {
      // go to -1 since we are skipping "No Preference"
      for (let i = 1; i < fontOptions.length - 1; i++) {
        let width = -1;
        if (furtherChoices.chosenDisplaySizeUnits === 'in') {
          width = 2.54 * furtherChoices.chosenDisplaySize;
        } else {
          width = furtherChoices.chosenDisplaySize;
        }

        rows.push({font: fontOptions[i].font,
          min: calculateMinPointSize(results.viewDistance,
              results.CPS, fontOptions[i].xf, fontOptions[i].wx),
          max: calculateMaxPointSize(width, fontOptions[i].wf)});
      }
    } else {
      console.log(inputs.selectedFont);
      const xf = getXFFromFont(inputs.selectedFont);
      const wx = getWXFromFont(inputs.selectedFont);      
      const wf = getWFFromFont(inputs.selectedFont);      

      let width = -1;
      if (furtherChoices.chosenDisplaySizeUnits === 'in') {
        width = 2.54 * furtherChoices.chosenDisplaySize;
      } else {
        width = furtherChoices.chosenDisplaySize;
      }
      
      if ((typeof xf === 'number') && (typeof wx === 'number') && (typeof wf === 'number')) {
        rows.push({font: inputs.selectedFont,
                   min: calculateMinPointSize(results.viewDistance,results.CPS, xf, wx),
                   max: calculateMaxPointSize(width, wf)});
      
      }
    }
  }

  return rows;
}

const validationSchema = yup.object({
  chosenDisplaySizeUnits: yup
      .mixed()
      .oneOf(distanceUnits.map(({label}) => (label)))
      .label('Chosen Display Size Units'),
  chosenDisplaySize: yup
      .number()
      .moreThan(0)
      .label('Chosen Display Size')
      .typeError('Please enter a number greater than 0'),
});

export class FurtherChoice {
  chosenDisplaySizeUnits: string;

  chosenDisplaySize: number | '';

  constructor(chosenDisplaySizeUnits: string,
      chosenDisplaySize: number | '') {
    this.chosenDisplaySizeUnits = chosenDisplaySizeUnits;
    this.chosenDisplaySize = chosenDisplaySize;
  }
}

const initialValues = new FurtherChoice(distanceUnits[0].label, '');

function shouldShowWarning(furtherChoices: FurtherChoice, minWidth: number) {
  console.log(furtherChoices);
  console.log(minWidth);
  if (furtherChoices.chosenDisplaySize === '') {
    return false;
  }
  if (furtherChoices.chosenDisplaySizeUnits === 'in') {
    if (furtherChoices.chosenDisplaySize * 2.54 < minWidth) {
      return true;
    }
    return false;
  }
  if (furtherChoices.chosenDisplaySize < minWidth) {
    return true;
  }
  return false;
}

export default function Results() {
  const {
    outputValues, inputValues, showMinMaxTable,
    setFurtherChoices, setShowMinMaxTable,
    setShowWarning, showWarning, furtherChoices,
  } = useContext(CalculatorContext);
  const minWidthString = `${(outputValues.minWidth).toFixed(2)}cm
  (${(outputValues.minWidth / 2.54).toFixed(2)}in)`;
  const router = useRouter();

  const [instance, updateReport] = usePDF({ document:
    <ReportPDF input={inputValues} output={outputValues} furtherChoices={furtherChoices}
    minWidthString={minWidthString} />
  });

  useEffect(() => {
    updateReport();
  }, [furtherChoices, updateReport]);

  const handleSubmit = (values: FurtherChoice) => {
    setShowMinMaxTable(true);
    const fc = new FurtherChoice(values.chosenDisplaySizeUnits,
        values.chosenDisplaySize);
    setFurtherChoices(fc);
    setShowWarning(shouldShowWarning(fc, outputValues.minWidth));
    router.push('#chosenWidthTable');
  };

  const handleReset = (values: FurtherChoice) => {

  }

  let highlightColor: 'primary' | 'secondary' = 'primary';
  const theme = localStorage.getItem('mrd-theme');
  if (theme !== null) highlightColor = localStorage.getItem('mrd-theme') === 'true' ? 'secondary' : 'primary';

  return (
    <Box hidden={!outputValues.show} aria-live="polite"
      style={{marginBottom: '3rem'}}>
      <a id="results" href="#results" />
      <Typography variant="h3" style={{marginTop: '2rem', marginBottom: '1rem'}}>Results</Typography>
      <Typography style={{marginTop: '1rem'}}>
        {eval('`' + text.maxReadingSpeed + '`')}
      </Typography>

      <TypicalDisplaySizeAccordion />

      <Typography style={{marginTop: '2rem'}}>
        {eval('`' + text.firstTableDescription + '`')}
      </Typography>

      <TableContainer component={Paper} style={{maxWidth: '25rem',
        margin: '1rem 0'}}>
        <Table aria-label="point size for chosen font(s)">
          <TableHead>
            <TableRow>
              <TableCell>Font</TableCell>
              <TableCell align="center">{text.firstTableColumnHeader}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getPointSizeTableData(inputValues, outputValues)
                .map(({font, pointSize}) => (
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
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {(props: FormikProps<FurtherChoice>) => (
          <Form onSubmit={props.handleSubmit} onReset={props.handleReset}>
            <a id="chosenWidthTable" href="#chosenWidthTable" />
            <Typography style={{marginTop: '2rem', marginBottom: '1rem'}}>
              Enter a new width here to see what print size range you should have
              for effective reading. Once you enter the width and click &rsquo;Show Table&lsquo;
              you may download a PDF report of your inputs and the results.</Typography>
  
            <TextField
              select
              required
              id="chosenDisplaySizeUnits"
              name="chosenDisplaySizeUnits"
              label="Display Size Units"
              value={props.values.chosenDisplaySizeUnits}
              onChange={props.handleChange}
              style={{width: '13rem', marginLeft: '1rem'}}
              error={props.touched.chosenDisplaySizeUnits &&
                Boolean(props.errors.chosenDisplaySizeUnits)}
              helperText={props.touched.chosenDisplaySizeUnits &&
                props.errors.chosenDisplaySizeUnits}
              color={highlightColor}
            >
              {distanceUnits.map(({label}, index) => (
                <MenuItem key={index} value={label}>{label}</MenuItem>
              ))}
            </TextField>
            
          <TextField
              required
              id="chosenDisplaySize"
              name="chosenDisplaySize"
              label="Display Size"
              value={props.values.chosenDisplaySize}
              onChange={props.handleChange}
              error={props.touched.chosenDisplaySize &&
                Boolean(props.errors.chosenDisplaySize)}
              helperText={props.touched.chosenDisplaySize &&
                props.errors.chosenDisplaySize}
              InputProps={{
                endAdornment: <InputAdornment position="end"
                  aria-live="polite">{props.values.chosenDisplaySizeUnits}
                </InputAdornment>,
              }}
              style={{width: '10rem', marginLeft: '1rem'}}
              color={highlightColor}
            />
            
            <Button variant="contained" color="primary"
              style={{marginLeft: '1rem', marginTop: '1rem'}} type="submit">
                {!showMinMaxTable ? 'Show table' : 'Update table'}</Button>
            <ResetInputValues />
            <ReportDownloadButton instance={instance} disabled={!showMinMaxTable} />
          </Form>
        )}
      </Formik>
      <Box hidden={!showWarning}>
        <Typography style={{marginTop: '2rem'}}>
          {eval('`' + text.chosenSizeWarning + '`')}
        </Typography>
      </Box>

      <Box hidden={!showMinMaxTable}>
        <TableContainer component={Paper} style={{maxWidth: '25rem',
          margin: '1rem 0'}}>
          <Table aria-label="point size for chosen font(s)">
            <TableHead>
              <TableRow>
                <TableCell>Font</TableCell>
                <TableCell align="center"><div dangerouslySetInnerHTML={{__html: text.secondTableColumn1Header}} /></TableCell>
                <TableCell align="center"><div dangerouslySetInnerHTML={{__html: text.secondTableColumn2Header}} /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getMinMaxTableData(inputValues, outputValues,
                  furtherChoices).map(({font, min, max}) => (
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
