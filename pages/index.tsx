import {
  Box, Card, CardContent, Container, Link as MuiLink, makeStyles, Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Logo from '../components/logo';

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

  return (
    <Container maxWidth="md" disableGutters>
      <Head>
        <title>Welcome | My Reading Display</title>
      </Head>

      <main>
        <Typography variant="h2" className={classes.welcomeText}>
          Welcome to {mrd}
        </Typography>

        <Box style={{display: 'flex', justifyContent: 'space-between'}}>
          <Box style={{width: '75%'}}>
            <Typography variant="body1" className={classes.bodyParagraph}>
              This easy calculator will help you choose the size of display
              and range of print sizes for effective reading.
              {mrd}
              {' '}
              is intended to help people with low vision and those assisting
              them in choosing an appropriate digital reading display.
            </Typography>

            <Typography variant="body1" className={classes.bodyParagraph}>
              Low vision refers to people who cannot achieve normal vision
              with the aid of glasses or contacts. It does not refer to
              people who have normal vision in one eye and reduced vision
              in the other eye.</Typography>
          </Box>

          <Box style={{width: '25%', marginTop: '1.5rem', marginLeft: '1rem'}}>
            <Logo />
          </Box>
        </Box>

        <Typography variant="body1" className={classes.bodyParagraph}>
          After entering your vision characteristics and viewing preferences,
          the calculator will suggest the minimum display width you may need
          for effective reading and the corresponding print size for your
          choice of font. The calculator will also allow you to enter wider
          displays and show you the corresponding range of effective print
          sizes.</Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          This calculator provides customized suggestions for display
          sizes and print sizes for readers with low vision. Please note
          that vision status and reading goals may vary among users and these
          individual differences affect the selection of reading display.
          Our calculation takes into consideration a range of fonts, but
          you can also choose a specific font that you prefer to use.
          The suggestions presented here represent a general guideline
          and may not be appropriate for some readers.</Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          {mrd}
          {' '}
          was developed by Ying-Zi Xiong, Nilsu Atilgan and Gordon E.
          Legge with programming by Reuben Gardos Reid, at the University
          of Minnesota. The calculations are based in part on published work:
        </Typography>

        <Card className={classes.bodyParagraph}>
          <CardContent>
            <Typography>
              Atilgan, N., Xiong, Y. Z., &amp; Legge, G. E. (2020).
              Reconciling print-size and display-size
              constraints on reading. Proceedings of the National
              Academy of Sciences, 117(48), 30276-
              30284.
              <MuiLink href="https://doi.org/10.1073/pnas.2007514117">https://doi.org/10.1073/pnas.2007514117</MuiLink>
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.bodyParagraph}>
          <CardContent>
            <Typography>Xiong, Y. Z., Atilgan, N., Fletcher D. C.,
              &amp; Legge, G. E. (in prep). Principles for Selecting a
              Digital Reading Display for Low Vision</Typography>
          </CardContent>
        </Card>

        <Typography variant="body1" className={classes.bodyParagraph}>
          To understand the vision status and reading preferences of our
          users, as well as to improve our calculator, we will store the
          reading-related information entered by our users, including
          visual acuity, critical print size, central vision status,
          preferred viewing distance and preferred font. The calculator
          DOES NOT ask for or store any identifiable personal information
          such as name, age, gender, or IP address.</Typography>
      </main>

      <footer>
        <Typography variant="body1"
          style={{margin: '3rem 0 1rem 0', maxWidth: '30rem'}}>
          Contact information for questions/comments:
          <MuiLink href="mailto:lowvis@umn.edu">lowvis@umn.edu</MuiLink>
        </Typography>
      </footer>
    </Container>
  );
}
