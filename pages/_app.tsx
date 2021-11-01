import {
  Container, createTheme, CssBaseline, ThemeProvider,
} from '@material-ui/core';
import type {AppProps} from 'next/app';
import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import '../src/styles.css';

import {ThemeProvider as DarkLightThemeProvider} from 'next-themes';
import {darkTheme, lightTheme} from '../src/theme';


function MyReadingDisplayApp({Component, pageProps}: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [useDarkTheme, setDarkTheme] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(function() {
    setDarkTheme(localStorage.getItem('mrd-theme') === 'true');
  }, []);

  if (!mounted) return null;

  const exTheme = createTheme(useDarkTheme ? darkTheme : lightTheme);

  return (
    <DarkLightThemeProvider enableSystem>
      <ThemeProvider theme={exTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar setDarkTheme={setDarkTheme} useDarkTheme={useDarkTheme} />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </DarkLightThemeProvider>
  );
}

export default MyReadingDisplayApp;
