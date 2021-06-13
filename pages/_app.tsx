import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline, Typography, Container } from '@material-ui/core';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';


export default function ReadingDisplayApp({ Component, pageProps }: AppProps) {
    const { theme } = useTheme();
    const siteTheme = React.useMemo(() => {
        if (theme === 'dark') {
            return (
                createMuiTheme({
                    typography: {
                        fontSize: 18,
                        fontFamily: '\'Open Sans\', sans-serif'
                    },
                    palette: {
                        type: 'dark'
                    }
                }))
        }
        return (
            createMuiTheme({
                typography: {
                    fontSize: 18,
                    fontFamily: '\'Open Sans\', sans-serif'
                }
            }))
    }, [theme]);


    return (
        <ThemeProvider theme={siteTheme}>
            <NextThemeProvider>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Navbar />
                    {/* <p>{theme}</p> */}
                    <Component {...pageProps} />
                </Container>
            </NextThemeProvider>
        </ThemeProvider>
    )
}