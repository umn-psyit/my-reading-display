import React from 'react';
import Head from 'next/head'
import type { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';

import { visionUnits, centralFieldLossOptions, fontOptions, viewingDistances } from '../calculator/options-definitions';

const l = [1, 2, 3];

export default function Home() {
  const { t } = useTranslation('common');

  const [visualAcuityUnits, setVisualAcuityUnits] = React.useState(visionUnits[0].label);
  const [visualAcuity, setVisualAcuity] = React.useState('');

  const [criticalPrintSizeUnits, setCriticalPrintSizeUnits] = React.useState(visionUnits[0].label);
  const [criticalPrintSize, setCriticalPrintSize] = React.useState('');

  const [hasCentralFieldLoss, setHasCentralFieldLoss] = React.useState('1');

  const [selectedFont, setSelectedFont] = React.useState(fontOptions[0].font);

  const [selectedViewingDistance, setSelectedViewingDistance] = React.useState(viewingDistances[0].label);

  const handleChangeVisualAcuityUnits = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVisualAcuityUnits(event.target.value as string);
  };

  const handleChangeVisualAcuity = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVisualAcuity(event.target.value as string);
  };

  const handleChangeCriticalPrintSizeUnits = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCriticalPrintSizeUnits(event.target.value as string);
  };

  const handleChangeCriticalPrintSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCriticalPrintSize(event.target.value as string);
  };

  const handleChangeHasCentralFieldLoss = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHasCentralFieldLoss(event.target.value as string);
  };

  const handleChangeSelectedFont = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedFont(event.target.value as string);
  };

  const handleChangeSelectedViewingDistance = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedViewingDistance(event.target.value as string);
  };

  const handleCalculate = () => {

  };

  return (
    <div className="container" style={{padding: '1em'}}>
      <Head>
        <title>{t('appTitle')}</title>
      </Head>

      <main>
      <Typography variant="h1">{t('appTitle')}</Typography>
      <hr style={{ width: '50%', marginLeft: '0px'}}/>

      <form autoComplete='off'>        
        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>{t('enterVisualAcuity')}</Typography>
        <Typography variant='body2' style={{marginBottom: '1em'}}>{t('chooseFromUnits')}</Typography>

        <FormControl required style={{marginRight: '1em'}}>
          <InputLabel htmlFor="visualAcuityUnits">
            Visual Acuity Units
          </InputLabel>
          
          <Select
            labelId="select-visual-acuity-units"
            value={visualAcuityUnits}
            onChange={handleChangeVisualAcuityUnits}
            autoWidth
            style={{ minWidth: '11em'}}
          >
            {visionUnits.map(({value, label}, index) => (
              <MenuItem key={index} value={label}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl required>
            <TextField
              required
              id="standard-required"
              label="Visual Acuity"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">{visualAcuityUnits}</InputAdornment>,
              }}
              value={visualAcuity}
              onChange={handleChangeVisualAcuity}
            />
        </FormControl>

        <br />

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>{t('enterCritcalPrintSize')}</Typography>
        <Typography variant='body2' style={{marginBottom: '1em'}}>{t('chooseFromUnits')}</Typography>

        <FormControl required style={{marginRight: '1em'}}>
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

        <FormControl required>
            <TextField
              required
              label="Critical Print Size"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">{criticalPrintSizeUnits}</InputAdornment>,
              }}
              value={criticalPrintSize}
              onChange={handleChangeCriticalPrintSize}
            />
        </FormControl>

        <br />

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>{t('hasCentralFieldLoss')}</Typography>

        <FormControl required>
          <FormLabel>Central Field Loss</FormLabel>
          <RadioGroup
            row
            value={hasCentralFieldLoss}
            onChange={handleChangeHasCentralFieldLoss}
          >
            {centralFieldLossOptions.map(({value, CFS}, index) => (
              <FormControlLabel
                value={value}
                control={<Radio color="primary" />}
                label={t(value)}
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <br />

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>{t('enterFont')}</Typography>

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

        <br />

        <Typography variant='body1' style={{marginBottom: '1em', marginTop: '2em'}}>{t('enterViewingDistance')}</Typography>

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
        
        <br />

        <FormControl>
          <Button onClick={handleCalculate} variant="contained" color="primary" style={{marginTop: '3em'}}>{t('calculate')}</Button>
        </FormControl>
      </form>

      <Typography variant="h4" style={{marginTop: '1em'}}>{t('results')}</Typography>

      <Typography variant="body1" style={{marginTop: '1em'}}>{t('minDisplayWidth', {cm: 10, inch: 10})} {}</Typography>

      <Typography variant="body1" style={{marginTop: '1em'}}>{t('chooseMatchingDisplay')}</Typography>

      <Typography variant="body1" style={{marginTop: '1em'}}>{t('usePointSize')}</Typography>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.locale === undefined) {
    throw new Error('context.locale is undefined');
  }
  return {props: {
    ...(await serverSideTranslations(context.locale, ['common']))
  }}
}
