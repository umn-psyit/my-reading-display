import {Component} from 'react';
import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
  Table, TableBody, Paper, TableContainer, TableHead, TableRow, TableCell,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {displayMeasures, showDisplayMeasures, displayMeasuresTitle, columnTitles} from '../content/typical-display-measures';

export default class TypicalDisplaysAccordion extends Component {
  render() {
    if (!showDisplayMeasures) {
      return null;
    }
    return (
      <Accordion style={{marginTop: '1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{displayMeasuresTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper} style={{margin: '1rem 0'}}>
            <Table aria-label="point size for chosen font(s)">
              <TableHead>
                <TableRow>
                  <TableCell>{columnTitles[0]}</TableCell>
                  <TableCell>{columnTitles[1]}</TableCell>
                  <TableCell>{columnTitles[2]}</TableCell>
                  <TableCell>{columnTitles[3]}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayMeasures.map(({
                  device, diagonalInch, widthInch, widthCM,
                }) => (
                  <TableRow key={diagonalInch}>
                    <TableCell scope="row">
                      {device}
                    </TableCell>
                    <TableCell scope="row">
                      {diagonalInch}
                      {' '}
                      in
                    </TableCell>
                    <TableCell scope="row">
                      {widthInch}
                      {' '}
                      in
                    </TableCell>
                    <TableCell scope="row">
                      {widthCM}
                      {' '}
                      cm
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
  }
}
