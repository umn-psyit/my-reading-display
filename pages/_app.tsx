import { Button, Container, createMuiTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import '../src/styles.css';
import { useMediaQuery } from '@material-ui/core';
import { useTheme, ThemeProvider as DarkLightThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../src/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);
    const [useDarkTheme, setDarkTheme] = useState(false);
    console.log(`useDarkTheme: ${useDarkTheme}`);

    useEffect(() => setMounted(true), []);

    const exTheme = createMuiTheme(useDarkTheme ? darkTheme : lightTheme);

    if (!mounted) return null;

    return (
        <DarkLightThemeProvider enableSystem>
            <ThemeProvider theme={exTheme}>
                <CssBaseline />
                <Container maxWidth="lg">
                <Navbar setDarkTheme={setDarkTheme} useDarkTheme={useDarkTheme}/>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
        </DarkLightThemeProvider>
    )
}