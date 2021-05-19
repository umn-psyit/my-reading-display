import React from 'react';
import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Box } from '@material-ui/core';

import { visionUnits, centralFieldLossOptions, fontOptions, viewingDistances } from '../calculator/options-definitions';

function getXFFromFont(selectedFont: string): number {
  var result = -1;
  fontOptions.forEach(({font, wx, wf, xf}) => {
    if (font.normalize() === selectedFont.normalize()) {
      result = xf;
    }
  });

  if (result !== -1) {
    return result;
  }
  else {
    throw new Error(`Could not find font: ${selectedFont} result: ${result}`);
  }
}

function getWFFromFont(selectedFont: string): number {
  var result = -1;
  fontOptions.forEach(({font, wx, wf, xf}) => {
    if (font.normalize() === selectedFont.normalize()) {
      result = wf;
    }
  });
  if (result !== -1) {
    return result;
  }
  else {
    throw new Error(`Could not find font: ${selectedFont} result: ${result}`);
  }
}

function getCFLFromString(centralFieldLoss: string): number {
  var result = -1;
  centralFieldLossOptions.forEach(({value, CFL}) => {
    if (centralFieldLoss.normalize() === value.normalize()) {
      result = CFL;
    }
  });
  if (result !== -1) {
    return result;
  }
  else {
    throw new Error(`Could not find CFS option: ${centralFieldLoss} result: ${result}`);
  }
}

export default function Home() {
  const router = useRouter();
  // const { t } = useTranslation('common');

  const [visualAcuityUnits, setVisualAcuityUnits] = React.useState(visionUnits[0].label);
  const [visualAcuity, setVisualAcuity] = React.useState('');

  const [criticalPrintSizeUnits, setCriticalPrintSizeUnits] = React.useState(visionUnits[0].label);
  const [criticalPrintSize, setCriticalPrintSize] = React.useState('');

  const [hasCentralFieldLoss, setHasCentralFieldLoss] = React.useState('1');

  const [selectedFont, setSelectedFont] = React.useState(fontOptions[0].font);

  const [selectedViewingDistance, setSelectedViewingDistance] = React.useState(viewingDistances[0].label);

  const [minDisplayWidth, setMinDisplayWidth] = React.useState(-1);
  const [minPointSize, setMinPointSize] = React.useState(-1);
  const [maxPointSize, setMaxPointSize] = React.useState(-1);

  const [hasResults, setHasResults] = React.useState(false);

  const handleChangeVisualAcuityUnits = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setVisualAcuityUnits(event.target.value as string);
  };

  const handleChangeVisualAcuity = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setVisualAcuity(event.target.value as string);
  };

  const handleChangeCriticalPrintSizeUnits = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setCriticalPrintSizeUnits(event.target.value as string);
  };

  const handleChangeCriticalPrintSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setCriticalPrintSize(event.target.value as string);
  };

  const handleChangeHasCentralFieldLoss = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setHasCentralFieldLoss(event.target.value as string);
  };

  const handleChangeSelectedFont = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setSelectedFont(event.target.value as string);
  };

  const handleChangeSelectedViewingDistance = (event: React.ChangeEvent<{ value: unknown }>) => {
    hideResults();
    setSelectedViewingDistance(event.target.value as string);
  };

  const handleCalculate = async (event: React.FormEvent) => {
    event.preventDefault();
    var VA = -1;
    if (visualAcuityUnits === '20/') {
      VA = 20/parseFloat(visualAcuity);
    }
    else if (visualAcuityUnits === '6/') {
      VA = 6/parseFloat(visualAcuity);
    }
    else {
      VA = parseFloat(visualAcuity);
    }

    var CPS = -1;
    var CFL = getCFLFromString(hasCentralFieldLoss);

    if (criticalPrintSize === '') {  // Estimate CPS if not provided
      CPS = VA + 0.3 + 0.2 * CFL;
      console.log(`Estimated CPS: ${CPS}, VA: ${VA}, CFL: ${CFL}`);
    }
    else {
      if (criticalPrintSizeUnits === '20/') {
        CPS = 20/parseFloat(criticalPrintSize);
      }
      else if (criticalPrintSizeUnits === '6/') {
        CPS = 6/parseFloat(criticalPrintSize);
      }
      else {
        CPS = parseFloat(criticalPrintSize);
      }
    }

    var vd = parseFloat(selectedViewingDistance);
    var xf = getXFFromFont(selectedFont);
    var wf = getWFFromFont(selectedFont);

    var minWidth = 0.013 * vd * Math.pow(10, CPS);
    if (!isNaN(minWidth)) {
      setMinDisplayWidth(minWidth);
    }
    else {
      throw new Error(`minWidth is NaN, vd: ${vd}, CPS: ${CPS}`);
    }

    var minPoint = (0.04 * vd * Math.pow(10, CPS)) / xf;
    if (!isNaN(minPoint)) {
      setMinPointSize(minPoint);
    }
    else {
      throw new Error(`minPoint is NaN, vd: ${vd}, CPS: ${CPS}, xf: ${xf}`);
    }

    var maxPoint = minWidth / (0.32 * wf);
    if (!isNaN(maxPoint)) {
      setMaxPointSize(maxPoint);
    }
    else {
      throw new Error(`maxPoint is NaN, minWidth: ${minWidth}, wf: ${wf}`);
    }

    setHasResults(true);
    router.push("#results");
  };

  const hideResults = () => {
    setHasResults(false);
  };

  const clearForm = () => {
    setVisualAcuity('');
    setCriticalPrintSize('');
    setHasCentralFieldLoss('1');
    setSelectedFont(fontOptions[0].font);
    setSelectedViewingDistance(viewingDistances[0].label);
    hideResults();
  };

  return (
    <div className="container" style={{padding: '1em'}}>
      <Head>
        <title>Vision Calculator</title>
      </Head>

      <main>
      <Typography variant="h1">Vision Calculator</Typography>
      <hr style={{ width: '50%', marginLeft: '0px'}}/>

      <form autoComplete='off' onSubmit={handleCalculate} onChange={hideResults}>        
        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>Please enter the reader's binocular visual acuity.</Typography>
        <Typography variant='body2' style={{marginBottom: '1em'}}>Choose from one of the given units.</Typography>

        <Box>
          <FormControl style={{marginRight: '1em'}} required>
            <InputLabel htmlFor="visualAcuityUnits">
              Visual Acuity Units
            </InputLabel>
            
            <Select
              label="Visual Acuity Units"
              labelId="select-visual-acuity-units"
              value={visualAcuityUnits}
              onChange={handleChangeVisualAcuityUnits}
              autoWidth
              style={{ minWidth: '11em', marginRight: '1em'}}
            >
              {visionUnits.map(({value, label}, index) => (
                <MenuItem key={index} value={label}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            required
            id="standard-required"
            label="Visual Acuity"
            InputProps={{
              startAdornment: <InputAdornment position="start">{visualAcuityUnits}</InputAdornment>,
            }}
            value={visualAcuity}
            onChange={handleChangeVisualAcuity}
          />
        </Box>

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>Please enter the reader's critical print size measured by reading charts. Critical print size refers to the smallest print size that allows one to read at their maximum reading speed.</Typography>
        <Typography variant='body2' style={{marginBottom: '1em'}}>Choose from one of the given units.</Typography>

        <Box>
          <FormControl style={{marginRight: '1em'}}>
            <InputLabel htmlFor="criticalPrintSizeUnits">
              Critical Print Size Units
            </InputLabel>
            
            <Select
              labelId="select-critical-print-size-units"
              value={criticalPrintSizeUnits}
              onChange={handleChangeCriticalPrintSizeUnits}
              autoWidth
              style={{ minWidth: '12em'}}
            >
              {visionUnits.map(({value, label}, index) => (
                <MenuItem key={index} value={label}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Critical Print Size"
            InputProps={{
              startAdornment: <InputAdornment position="start">{criticalPrintSizeUnits}</InputAdornment>,
            }}
            value={criticalPrintSize}
            onChange={handleChangeCriticalPrintSize}
          />
        </Box>

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>Does the reader have central field loss?</Typography>

        <FormControl required>
          <FormLabel>Central Field Loss</FormLabel>
          <RadioGroup
            row
            value={hasCentralFieldLoss}
            onChange={handleChangeHasCentralFieldLoss}
          >
            {centralFieldLossOptions.map(({value, CFL, label}, index) => (
              <FormControlLabel
                value={value}
                control={<Radio color="primary" required={true}/>}
                label={label}
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <br />

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>Please select a preferred font.</Typography>

        <Box>
          <FormControl required style={{marginRight: '1em'}}>
            <InputLabel htmlFor="chooseFont">
              Font
            </InputLabel>
            
            <Select
              labelId="select-font"
              value={selectedFont}
              onChange={handleChangeSelectedFont}
              autoWidth
              style={{ minWidth: '12em'}}
            >
              {fontOptions.map(({font, wx, wf, xf}, index) => (
                <MenuItem key={index} value={font}>{font}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>Please enter the preferred viewing distance for reading.</Typography>

        <Box>
          <FormControl required style={{marginRight: '1em'}}>
            <InputLabel htmlFor="chooseViewingDistance">
              Viewing Distance
            </InputLabel>
            
            <Select
              labelId="select-viewing-distance"
              value={selectedViewingDistance}
              onChange={handleChangeSelectedViewingDistance}
              autoWidth
              style={{ minWidth: '12em'}}
            >
              {viewingDistances.map(({label, vd}, index) => (
                <MenuItem key={index} value={label}>{label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button type="submit" variant="contained" color="primary" style={{marginTop: '3em'}}>Calculate</Button>

        <Button onClick={clearForm} variant="contained" color="secondary" style={{marginTop: '3em', marginLeft: '1em'}}>Clear</Button>
      </form>

      <Box hidden={!hasResults}>
        <a id="results"></a>
        <Typography variant="h4" style={{marginTop: '1em'}}>Results</Typography>

        <Typography variant="body1" style={{marginTop: '1em'}}>To achieve a maximum reading speed, the reader needs a display with a width larger than {minDisplayWidth.toFixed(1)}cm ({(minDisplayWidth/2.54).toFixed(1)} inch).</Typography>

        <Typography variant="body1" style={{marginTop: '1em'}}>Please refer to the table below for a list of common displays that meet this requirements, and choose a preferred display.</Typography>

        <Typography variant="body2" style={{background: '#DDDDDD', padding: '2em', margin: '1em'}}>-- Placeholder for displays -- </Typography>

        <Typography variant="body1" style={{marginTop: '1em'}}>To achieve maximum reading speed on a tablet display, when reading at {selectedViewingDistance} with {selectedFont} font, the reader needs to use a print size between {minPointSize.toFixed(1)} and {maxPointSize.toFixed(1)}.</Typography>

        <Typography variant="body2" style={{background: '#DDDDDD', padding: '2em', margin: '1em'}}>-- Placeholder for figure -- </Typography>
      </Box>

      </main>

      <footer>
      </footer>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   if (context.locale === undefined) {
//     throw new Error('context.locale is undefined');
//   }
//   return {props: {
//     ...(await serverSideTranslations(context.locale, ['common']))
//   }}
// }
