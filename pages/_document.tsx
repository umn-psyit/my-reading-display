import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Typography } from '@material-ui/core';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ fontSize: 18 }}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="shortcut icon" href="my-reading-display/favicon.ico" />
        </Head>
        <body style={{ padding: '1rem 3rem' }}>
          <Typography variant="h1" style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>My Reading Display</Typography>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

