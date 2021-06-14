import {Container, CssBaseline, ThemeProvider} from '@material-ui/core';
import {ThemeProvider as NextThemeProvider, useTheme} from 'next-themes';
import type {AppProps} from 'next/app';
import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import {darkTheme, lightTheme} from '../src/theme';

export default function MyApp({Component, pageProps}: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <NextThemeProvider enableSystem>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </NextThemeProvider >
  );
}
