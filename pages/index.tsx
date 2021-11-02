import {
  Box, Card, CardContent, Container, Hidden, Link as MuiLink, makeStyles, Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React, { FC, PropsWithChildren, ReactChildren } from 'react';
import Logo from '../components/logo';
// @ts-ignore
import Content, {metadata} from '../content/index-content.mdx';
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

export default function Home() {
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

  interface LogoProps {
    widthPercent: string,
    side: 'right' | 'left'
  }

  const LogoModified = ({widthPercent, side}: PropsWithChildren<LogoProps>) => {
    return <Hidden smDown><Box style={{float: `${side}`, paddingLeft: '1em', paddingBottom: '1em', width: `${widthPercent}%`}}><Logo /></Box></Hidden>
  };

  const components = {
    h1: H1,
    p: p,
    Reference: Reference,
    a: MuiLink,
    Logo: LogoModified
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
