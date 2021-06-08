import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField, Typography, InputAdornment } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { centralFieldLossOptions, distanceUnits, fontOptions, viewingDistances, visionUnits } from '../calculator/options-definitions';
import { validationSchema } from '../calculator/validation';

const InputForm = () => {
  const formik = useFormik({
    initialValues: {
      visualAcuityUnits: visionUnits[0].label,
      visualAcuity: '20',
      criticalPrintSizeUnits: visionUnits[0].label,
      criticalPrintSize: '20',
      hasCentralFieldLoss: 'Don\'t Know',
      selectedFont: fontOptions[0].font,
      selectedViewingDistance: viewingDistances[0].label,
      customViewDistance: 10,
      customViewDistanceUnits: distanceUnits[0].label
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant='body1' style={{ marginBottom: '1em', marginTop: '2em' }}>Please enter the reader's binocular visual acuity.</Typography>
        <Box style={{ marginTop: '1em' }}>
          <TextField
            required
            id="visualAcuity"
            name="visualAcuity"
            label="Visual Acuity (VA)"
            value={formik.values.visualAcuity}
            onChange={formik.handleChange}
            error={formik.touched.visualAcuity && Boolean(formik.errors.visualAcuity)}
            helperText={formik.touched.visualAcuity && formik.errors.visualAcuity}
            InputProps={{
              startAdornment: <InputAdornment position="start" aria-live="polite">{formik.values.visualAcuityUnits}</InputAdornment>,
            }}
		        style={{width: '10rem', margin: '0 1rem 0 0'}}
          />

          <TextField
            required
            select
            id="visualAcuityUnits"
            name="visualAcuityUnits"
            label="VA Units"
            value={formik.values.visualAcuityUnits}
            onChange={formik.handleChange}
            error={formik.touched.visualAcuityUnits && Boolean(formik.errors.visualAcuityUnits)}
            helperText={formik.touched.visualAcuityUnits && formik.errors.visualAcuityUnits}
          >
            {visionUnits.map(({ value, label }, index) => (
              <MenuItem key={index} value={label}>{value}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
          <Typography variant='body1' style={{ marginTop: '2em' }}>Please enter the reader's critical print size measured by reading charts.</Typography>

          <Typography variant='body1' style={{ marginBottom: '1em' }}>Critical print size refers to the smallest print size that allows one to read at their maximum reading speed.</Typography>
          <TextField
            id="criticalPrintSize"
            name="criticalPrintSize"
            label="Critical Print Size (CPS)"
            value={formik.values.criticalPrintSize}
            onChange={formik.handleChange}
            error={formik.touched.criticalPrintSize && Boolean(formik.errors.criticalPrintSize)}
            helperText={formik.touched.criticalPrintSize && formik.errors.criticalPrintSize}
            InputProps={{
              startAdornment: <InputAdornment position="start" aria-live="polite">{formik.values.criticalPrintSizeUnits}</InputAdornment>,
            }}
            style={{width: '12rem', margin: '0 1rem 0 0'}}
          />

          <TextField
            select
            id="criticalPrintSizeUnits"
            name="criticalPrintSizeUnits"
            label="CPS Units"
            value={formik.values.criticalPrintSizeUnits}
            onChange={formik.handleChange}
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
              value={formik.values.hasCentralFieldLoss}
              onChange={formik.handleChange}
            >
              {centralFieldLossOptions.map(({ label, CFL }, index) => (
                <FormControlLabel control={<Radio />} key={index} value={label} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>           

        <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
          <TextField
            select
            required
            style={{ width: '8em' }}
            id="selectedFont"
            name="selectedFont"
            label="Selected Font"
            value={formik.values.selectedFont}
            onChange={formik.handleChange}
          >
            {fontOptions.map(({ font }, index) => (
              <MenuItem key={index} value={font}>{font}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
          <TextField
            select
            required
            style={{ width: '10rem' }}
            id="selectedViewingDistance"
            name="selectedViewingDistance"
            label="Viewing Distance"
            value={formik.values.selectedViewingDistance}
            onChange={formik.handleChange}
          >
            {viewingDistances.map(({ label }, index) => (
              <MenuItem key={index} value={label}>{label}</MenuItem>
            ))}
          </TextField>
          <Box component="span" hidden={!Boolean(formik.values.selectedViewingDistance === 'Custom')}>
            <TextField
              required
              id="customViewDistance"
              name="customViewDistance"
              label="View Distance"
              value={formik.values.customViewDistance}
              onChange={formik.handleChange}
              error={formik.touched.customViewDistance && Boolean(formik.errors.customViewDistance)}
              helperText={formik.touched.customViewDistance && formik.errors.customViewDistance}
              InputProps={{
                endAdornment: <InputAdornment position="end" aria-live="polite">{formik.values.customViewDistanceUnits}</InputAdornment>,
              }}
              style={{width: '8rem', margin: '0 1rem'}}
            />
            <TextField
              select
              required
              id="customViewDistanceUnits"
              name="customViewDistanceUnits"
              label="View Distance Units"
              value={formik.values.customViewDistanceUnits}
              onChange={formik.handleChange}
              style={{width: '10rem'}}
              error={formik.touched.customViewDistanceUnits && Boolean(formik.errors.customViewDistanceUnits)}
              helperText={formik.touched.customViewDistanceUnits && formik.errors.customViewDistanceUnits}
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
        <Button color="secondary" variant="contained" onClick={() => (console.log(formik.errors))}>
          Check
        </Button>
      </form>
    </Box>
  )
}

export default InputForm;