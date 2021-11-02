import {
  Card, CardContent, Link as MuiLink, Typography, makeStyles, Container,
} from '@material-ui/core';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
// @ts-ignore
import Content, {metadata} from '../content/background-content.mdx';
import {MDXProvider} from '@mdx-js/react';

const mrd = (<em>MyReadingDisplay</em>);

const useStyles = makeStyles({
  bodyParagraph: {
    margin: '1rem 0 1rem 0',
  },
  welcomeText: {
    margin: '2rem 0 1rem 0',
  },
});

export default function Background() {
  const classes = useStyles();
  const H1: FC = ({children}) => {
    return <Typography variant="h2" className={classes.welcomeText}>
            {children}
    </Typography>
  };
  const p: FC = ({children}) => {
    return <Typography variant="body1" className={classes.bodyParagraph}>
      {children}
    </Typography>
  };
  interface ReferenceProps {
    link: string
  }

  const Reference = ({link, children}: PropsWithChildren<ReferenceProps>) => {
    return <Card className={classes.bodyParagraph}>
        <CardContent>
            <Typography>
                {children} {link ? <MuiLink href={link}>{link}</MuiLink> : ''}
            </Typography>
        </CardContent>
    </Card>
  };

  const components = {
    h1: H1,
    p: p,
    Reference: Reference,
    a: MuiLink
  }

  return (
    <Container maxWidth="md" disableGutters>
      <Head>
        <title>{metadata.pageTitle} | My Reading Display</title>
      </Head>

      <main>
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </main>
    </Container>
  );
}
