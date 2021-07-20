import { Accordion, Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, MenuItem, Radio, RadioGroup, TextField, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { NextRouter } from 'next/dist/client/router';
import React, { Component } from 'react';
import { calculate, OutputValues, InputValues } from '../calculator/calculate';
import { centralFieldLossOptions, distanceUnits, fontOptions, viewingDistances, visionUnits } from '../calculator/options-definitions';
import { validationSchema } from '../calculator/validation';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface InputFormProps {
  setResults: (results: OutputValues) => void;
  setInputs: (inputs: InputValues) => void;
  router?: NextRouter;
}

const initialValues = {
  visualAcuityUnits: visionUnits[0].label,
  visualAcuity: '20',
  criticalPrintSizeUnits: visionUnits[0].label,
  criticalPrintSize: '',
  hasCentralFieldLoss: 'Don\'t Know',
  selectedFont: fontOptions[0].font,
  selectedViewingDistance: viewingDistances[0].label,
  customViewDistance: 10,
  customViewDistanceUnits: distanceUnits[0].label
};

class InputForm extends Component<InputFormProps> {
  render() {
    const { setResults, setInputs, router } = this.props;

    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => { setInputs(values); calculate(setResults, values, router); }}>
        {props =>
          <Form
            onSubmit={props.handleSubmit}
            onReset={() => { props.resetForm(); setResults(new OutputValues(false, -1, -1, -1, -1, -1, -1)) }}
            onChange={(e) => { props.handleChange(e); setResults(new OutputValues(false, -1, -1, -1, -1, -1, -1)) }}>
            <Typography variant='body1' style={{ marginBottom: '1em', marginTop: '1em' }}>Please enter the reader's binocular visual acuity <strong>(required)</strong>.</Typography>
            <Box style={{ marginTop: '1em' }}>
              <TextField
                required
                id="visualAcuity"
                name="visualAcuity"
                label="Visual Acuity (VA)"
                value={props.values.visualAcuity}
                onChange={props.handleChange}
                error={props.touched.visualAcuity && Boolean(props.errors.visualAcuity)}
                helperText={props.touched.visualAcuity && props.errors.visualAcuity}
                InputProps={{
                  startAdornment: <InputAdornment position="start" aria-live="polite">{props.values.visualAcuityUnits}</InputAdornment>,
                }}
                style={{ width: '13rem', margin: '0 1rem 0 0' }}
              />

              <TextField
                required
                select
                id="visualAcuityUnits"
                name="visualAcuityUnits"
                label="VA Units"
                value={props.values.visualAcuityUnits}
                onChange={props.handleChange}
                error={props.touched.visualAcuityUnits && Boolean(props.errors.visualAcuityUnits)}
                helperText={props.touched.visualAcuityUnits && props.errors.visualAcuityUnits}
                style={{ width: '12rem' }}
              >
                {visionUnits.map(({ value, label }, index) => (
                  <MenuItem key={index} value={label}>{value}</MenuItem>
                ))}
              </TextField>
            </Box>

            <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
              <Typography variant='body1' style={{ marginTop: '2em' }}>Please enter the reader's critical print size measured by reading charts <strong>(optional)</strong>.</Typography>

              <Typography variant='body1' style={{ marginBottom: '1em' }}>Critical print size refers to the smallest print size that allows one to read at their maximum reading speed.</Typography>
              <TextField
                id="criticalPrintSize"
                name="criticalPrintSize"
                label="Critical Print Size (CPS)"
                value={props.values.criticalPrintSize}
                onChange={props.handleChange}
                error={props.touched.criticalPrintSize && Boolean(props.errors.criticalPrintSize)}
                helperText={props.touched.criticalPrintSize && props.errors.criticalPrintSize}
                InputProps={{
                  startAdornment: <InputAdornment position="start" aria-live="polite">{props.values.criticalPrintSizeUnits}</InputAdornment>,
                }}
                style={{ width: '15rem', margin: '0 1rem 0 0' }}
              />

              <TextField
                select
                id="criticalPrintSizeUnits"
                name="criticalPrintSizeUnits"
                label="CPS Units"
                value={props.values.criticalPrintSizeUnits}
                onChange={props.handleChange}
                style={{ width: '13rem' }}
              >
                {visionUnits.map(({ value, label }, index) => (
                  <MenuItem key={index} value={label}>{value}</MenuItem>
                ))}
              </TextField>
            </Box>

            <Box>
              <Typography variant='body1' style={{ marginBottom: '1em', marginTop: '2em' }}>Does the reader have central field loss?</Typography>
              <FormControl
                required
              >
                <FormLabel>Has Central Field Loss</FormLabel>
                <RadioGroup
                  row
                  aria-label="has central field loss"
                  id="hasCentralFieldLoss"
                  name="hasCentralFieldLoss"
                  value={props.values.hasCentralFieldLoss}
                  onChange={props.handleChange}
                >
                  {centralFieldLossOptions.map(({ label, CFL }, index) => (
                    <FormControlLabel control={<Radio />} key={index} value={label} label={label} />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>

            <Box style={{ marginTop: '1em', marginBottom: '1em', display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                select
                required
                style={{ width: '12em' }}
                id="selectedFont"
                name="selectedFont"
                label="Selected Font"
                value={props.values.selectedFont}
                onChange={props.handleChange}
                onFocus={() => setResults(new OutputValues(false, -1, -1, -1, -1, -1, -1))}
              >
                {fontOptions.map(({ font }, index) => (
                  <MenuItem key={index} value={font}>{font}</MenuItem>
                ))}
              </TextField>
              <Accordion style={{ width: '60%' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>Font Demos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <img style={{ width: '100%'}} src='font-sample.png' />
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
              <TextField
                select
                required
                style={{ width: '12rem' }}
                id="selectedViewingDistance"
                name="selectedViewingDistance"
                label="Viewing Distance"
                value={props.values.selectedViewingDistance}
                onChange={props.handleChange}
                onFocus={() => setResults(new OutputValues(false, -1, -1, -1, -1, -1, -1))}
              >
                {viewingDistances.map(({ label }, index) => (
                  <MenuItem key={index} value={label}>{label}</MenuItem>
                ))}
              </TextField>
              <Box component="span" hidden={!Boolean(props.values.selectedViewingDistance === 'Custom')}>
                <TextField
                  required
                  id="customViewDistance"
                  name="customViewDistance"
                  label="View Distance"
                  value={props.values.customViewDistance}
                  onChange={props.handleChange}
                  error={props.touched.customViewDistance && Boolean(props.errors.customViewDistance)}
                  helperText={props.touched.customViewDistance && props.errors.customViewDistance}
                  InputProps={{
                    endAdornment: <InputAdornment position="end" aria-live="polite">{props.values.customViewDistanceUnits}</InputAdornment>,
                  }}
                  style={{ width: '10rem', margin: '0 1rem' }}
                />
                <TextField
                  select
                  required
                  id="customViewDistanceUnits"
                  name="customViewDistanceUnits"
                  label="View Distance Units"
                  value={props.values.customViewDistanceUnits}
                  onChange={props.handleChange}
                  style={{ width: '13rem' }}
                  error={props.touched.customViewDistanceUnits && Boolean(props.errors.customViewDistanceUnits)}
                  helperText={props.touched.customViewDistanceUnits && props.errors.customViewDistanceUnits}
                >
                  {distanceUnits.map(({ value, label }, index) => (
                    <MenuItem key={index} value={label}>{label}</MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            <Button color="primary" variant="contained" type="submit">
              Calculate
            </Button>
            <Button color="secondary" variant="contained" type="reset" style={{ marginLeft: '1rem' }}>
              Reset
            </Button>
          </Form>
        }
      </Formik>
    )
  }
}

export default InputForm;