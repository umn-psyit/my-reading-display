import React from 'react';
import {CalculatorContext, CalculatorContextType}
  from '../calculator/calculator-context';
import InputForm from '../calculator/input-form';
import Results, {FurtherChoice} from '../calculator/results';
import {InputValues, OutputValues} from '../calculator/calculate';
import {distanceUnits} from '../content/options-definitions';

export default class CalculatorComponent extends React.Component {
  state: CalculatorContextType;

  constructor(props: {}) {
    super(props);

    this.state = {
      outputValues: new OutputValues(false, -1, -1, -1, -1, -1, -1),
      setOutputValues: (values: OutputValues) => {
        this.state.outputValues = values;
      },
      resetOutputValues: () => {
        this.state.outputValues =
          new OutputValues(false, -1, -1, -1, -1, -1, -1);
      },
      inputValues: new InputValues('Snellen (U.S.)', '', 'Snellen (U.S.)', '', '', '', '', -1, ''),
      setInputValues: (values: InputValues) => {
        this.state.inputValues = values;
      },
      resetInputValues: () => {
        this.state.inputValues =
          new InputValues('Snellen (U.S.)', '', 'Snellen (U.S.)', '', '', '', '', -1, '');
      },
      showMinMaxTable: false,
      setShowMinMaxTable: (showMinMaxTable: boolean) => {
        this.state.showMinMaxTable = showMinMaxTable;
      },
      furtherChoices: new FurtherChoice('', -1),
      setFurtherChoices: (choices: FurtherChoice) => {
        this.state.furtherChoices = choices;
      },
      resetFurtherChoices: () => {
        this.state.furtherChoices =
          new FurtherChoice(distanceUnits[0].label, '');
      },
      showWarning: false,
      setShowWarning: (showWarning: boolean) => {
        this.state.showWarning = showWarning;
      },

    };
  }

  render() {
    return (
      <CalculatorContext.Provider value={this.state}>
        <InputForm />
        <Results />
      </CalculatorContext.Provider>
    );
  }
}
