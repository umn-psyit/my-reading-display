import {createContext} from 'react';
import {InputValues, OutputValues} from './calculate';
import {FurtherChoice} from './results';

export type CalculatorContextType = {
    outputValues: OutputValues;
    setOutputValues: (values: OutputValues) => void;
    resetOutputValues: () => void;
	inputValues: InputValues;
    setInputValues: (values: InputValues) => void;
    resetInputValues: () => void;
	showMinMaxTable: boolean;
    setShowMinMaxTable: (showMinMaxTable: boolean) => void;
	furtherChoices: FurtherChoice;
    setFurtherChoices: (choices: FurtherChoice) => void;
    resetFurtherChoices: () => void;
	showWarning: boolean;
    setShowWarning: (showWarning: boolean) => void;
}

export const defaultCalculatorState: CalculatorContextType = {
  outputValues: new OutputValues(false, -1, -1, -1, -1, -1, -1),
  setOutputValues: (values: OutputValues) => {},
  resetOutputValues: () => {},
  inputValues: new InputValues('', '', '', '', '', '', '', -1, ''),
  setInputValues: (values: InputValues) => {},
  resetInputValues: () => {},
  showMinMaxTable: false,
  setShowMinMaxTable: (showMinMaxTable: boolean) => {},
  furtherChoices: new FurtherChoice('', -1),
  setFurtherChoices: (choices: FurtherChoice) => {},
  resetFurtherChoices: () => {},
  showWarning: false,
  setShowWarning: (showWarning: boolean) => {},
};

export const CalculatorContext = createContext(defaultCalculatorState);
