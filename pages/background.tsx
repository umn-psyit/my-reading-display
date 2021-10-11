import {
  Card, CardContent, Link as MuiLink, Typography, makeStyles, Container,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

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

  return (
    <Container maxWidth="md" disableGutters>
      <Head>
        <title>Background | My Reading Display</title>
      </Head>

      <main>
        <Typography variant="h2" className={classes.welcomeText}>
          Background
        </Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          Several factors interact when deciding on display size and
          print size for reading with low vision. The font size
          (measured in points) required for effective reading
          depends on the reader’s viewing distance, font preference
          and visual acuity. The size of the display will limit the
          number of characters that will fit on a line of text for
          this print size. If the number of characters per line is
          too small, reading will slow down.</Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          Several research studies have determined how many characters
          must be visible on a line at one time in order to achieve
          maximum reading speed. These studies include situations
          in which low-vision readers manually scan a magnifier
          along a line of hard copy text, or scan text through
          the camera’s field of view in a closed-circuit TV magnifier,
          or use a mouse for horizontal scrolling on a computer display.
          Alternatively, word wrap can sometimes be used in which
          digital text is reformatted to fit on lines with fewer
          characters of magnified text, entirely avoiding the need
          for horizontal scrolling. In a 2020 article, the developers
          of this app found that normally sighted readers could achieve
          maximum reading speed if computer text contained at least 13
          characters per line, and those with low vision could achieve
          maximum reading speed with nine or more characters per line
          (Atilgan, Xiong &amp; Legge, 2020).</Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          {mrd}
          {' '}
          calculates minimum required display width and minimum font
          size based on the requirement of providing at least 13
          characters per line, taking into account viewing distance,
          font preference and visual acuity. This estimate is expected
          to be inclusive of people with a wide range of vision conditions.
          It may slightly overestimate the display size required for
          some people with low vision.
        </Typography>

        <Typography variant="body1" className={classes.bodyParagraph}>
          The app computes the minimum horizontal width of a display
          for the conditions in question. The size of retail displays
          is often given in terms of diagonal distance from one corner
          to the opposite corner. The diagonal size will always exceed
          the horizontal width. For example, for a display with a 16:9
          ratio of width to height, the diagonal size is about 20% larger
          than the horizontal width. If MyReadingDisplay calculates a
          minimum recommended width of 10 inches, the corresponding
          diagonal size would be about 20% larger, that is, about 12
          inches for such a display.</Typography>

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
      </main>
    </Container>
  );
}
