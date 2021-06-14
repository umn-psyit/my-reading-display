import { NextRouter } from "next/router";
import { centralFieldLossOptions, fontOptions } from "./options-definitions";

class MinMax {
	min: number;
	max: number;
	constructor(min: number, max: number) {
		this.min = min;
		this.max = max;
	};
}

export function getXFFromFont(selectedFont: string): number | MinMax {
	var result = -1;
	if (selectedFont.normalize() === 'No Preference') {
		const min = Math.min.apply(Math, fontOptions.map(function (o) { return (o.xf === undefined) ? Number.MAX_VALUE : o.xf }));
		var max = Math.max.apply(Math, fontOptions.map(function (o) { return (o.xf === undefined) ? Number.MIN_VALUE : o.xf }))
		return new MinMax(min, max);
	}
	else {
		fontOptions.forEach(({ font, xf }) => {
			if (font.normalize() === selectedFont.normalize() && xf !== undefined) {
				result = xf;
			}
		});

		if (result !== -1) {
			return result;
		}
		else {
			throw new Error(`Could not find font: ${selectedFont} result: ${result}`);
		}
	}
}

function getWFFromFont(selectedFont: string): number | MinMax {
	if (selectedFont.normalize() === 'No Preference') {
		const min = Math.min.apply(Math, fontOptions.map(function (o) { return (o.wf === undefined) ? Number.MAX_VALUE : o.wf }));
		var max = Math.max.apply(Math, fontOptions.map(function (o) { return (o.wf === undefined) ? Number.MIN_VALUE : o.wf }))
		return new MinMax(min, max);
	}
	else {
		var result = -1;
		fontOptions.forEach(({ font, wf }) => {
			if (font.normalize() === selectedFont.normalize() && wf !== undefined) {
				result = wf;
			}
		});
		if (result !== -1) {
			return result;
		}
		else {
			throw new Error(`Could not find font: ${selectedFont} result: ${result}`);
		}
	}
}

function getCFLFromString(centralFieldLoss: string): number {
	var result = -1;
	centralFieldLossOptions.forEach(({ CFL, label }) => {
		if (centralFieldLoss.normalize() === label.normalize()) {
			result = CFL;
		}
	});
	if (result !== -1) {
		return result;
	}
	else {
		throw new Error(`Could not find CFS option: ${centralFieldLoss} result: ${result}`);
	}
}

export interface InputValuesInterface {
	visualAcuityUnits: string;
	visualAcuity: string;
	criticalPrintSizeUnits: string;
	criticalPrintSize: string;
	hasCentralFieldLoss: string;
	selectedFont: string;
	selectedViewingDistance: string;
	customViewDistance: number;
	customViewDistanceUnits: string;
};

export class InputValues implements InputValuesInterface {
	visualAcuityUnits: string;
	visualAcuity: string;
	criticalPrintSizeUnits: string;
	criticalPrintSize: string;
	hasCentralFieldLoss: string;
	selectedFont: string;
	selectedViewingDistance: string;
	customViewDistance: number;
	customViewDistanceUnits: string;
	constructor(visualAcuityUnits: string, visualAcuity: string, criticalPrintSizeUnits: string, criticalPrintSize: string, hasCentralFieldLoss: string, selectedFont: string, selectedViewingDistance: string, customViewDistance: number, customViewDistanceUnits: string) {
		this.visualAcuityUnits = visualAcuityUnits;
		this.visualAcuity = visualAcuity;
		this.criticalPrintSizeUnits = criticalPrintSizeUnits;
		this.criticalPrintSize = criticalPrintSize;
		this.hasCentralFieldLoss = hasCentralFieldLoss;
		this.selectedFont = selectedFont;
		this.selectedViewingDistance = selectedViewingDistance;
		this.customViewDistance = customViewDistance;
		this.customViewDistanceUnits = customViewDistanceUnits;
	}
}

export interface OutputValuesInterface {
	show: boolean;
	minWidth: number;
	minPoint: number;
	maxPoint: number;
	viewDistance: number;
	CPS: number;
	VA: number;
}

export class OutputValues implements OutputValuesInterface {
	show: boolean;
	minWidth: number;
	minPoint: number;
	maxPoint: number;
	viewDistance: number;
	CPS: number;
	VA: number;
	constructor(show: boolean, minWidth: number, minPoint: number, maxPoint: number, viewDistance: number, CPS: number, VA: number) {
		this.show = show;
		this.minWidth = minWidth;
		this.minPoint = minPoint;
		this.maxPoint = maxPoint;
		this.viewDistance = viewDistance;
		this.CPS = CPS;
		this.VA = VA;
	}
};

export function calculateMinWidth(vd: number, CPS: number) {
	return 0.013 * vd * Math.pow(10, CPS);
}

export function calculateMinPointSize(vd: number, CPS: number, xf: number | undefined) {
	if (xf === undefined) {
		throw new Error('Could not calculate minimum point size because xf is undefined');
	}
	return (0.04 * vd * Math.pow(10, CPS)) / xf;
}

export function calculateMaxPointSize(minWidth: number, wf: number | undefined) {
	if (wf === undefined) {
		throw new Error('Could not calculate maximum point size because wf is undefined');
	}
	return (minWidth / (0.32 * wf));
}

export const calculate = (setResults: (results: OutputValues) => void, values: InputValuesInterface, router: NextRouter | undefined) => {
	console.log(JSON.stringify(values));

	var VA = -1;
	if (values.visualAcuityUnits === '20/') {
		VA = -Math.log10(20 / parseFloat(values.visualAcuity));
	}
	else if (values.visualAcuityUnits === '6/') {
		VA = -Math.log10(6 / parseFloat(values.visualAcuity));
	}
	else {
		VA = parseFloat(values.visualAcuity);
	}
	console.log(`VA: ${VA}, raw val: ${values.visualAcuity}`);

	var CPS = -1;
	var CFL = getCFLFromString(values.hasCentralFieldLoss);

	if (values.criticalPrintSize === '') {  // Estimate CPS if not provided
		CPS = VA + 0.3 + 0.2 * CFL;
		console.log(`Estimated CPS: ${CPS}, VA: ${VA}, CFL: ${CFL}`);
	}
	else {
		if (values.criticalPrintSizeUnits === '20/') {
			CPS = -Math.log10(20 / parseFloat(values.criticalPrintSize));
		}
		else if (values.criticalPrintSizeUnits === '6/') {
			CPS = -Math.log10(6 / parseFloat(values.criticalPrintSize));
		}
		else {
			CPS = parseFloat(values.criticalPrintSize);
		}
	}

	console.log(`CPS: ${CPS}`);

	var vd = parseFloat(values.selectedViewingDistance);
	if (values.selectedViewingDistance === 'Custom') {
		if (values.customViewDistanceUnits === 'in') {
			vd = 2.54 * values.customViewDistance;
		}
		else {
			vd = values.customViewDistance;
		}
	}
	var xf = getXFFromFont(values.selectedFont);
	var wf = getWFFromFont(values.selectedFont);

	var minWidth = calculateMinWidth(vd, CPS);
	if (isNaN(minWidth)) {
		throw new Error(`minWidth is NaN, vd: ${vd}, CPS: ${CPS}`);
	}

	var minPoint: number = -1;
	if (xf instanceof MinMax) {
		minPoint = (0.04 * vd * Math.pow(10, CPS)) / xf.max;
	}
	else {
		minPoint = (0.04 * vd * Math.pow(10, CPS)) / xf;
		if (isNaN(minPoint)) {
			throw new Error(`minPoint is NaN, vd: ${vd}, CPS: ${CPS}, xf: ${xf}`);
		}
	}


	var maxPoint: number = -1;
	if (wf instanceof MinMax) {
		maxPoint = (minWidth / (0.32 * wf.min));
	}
	else {
		maxPoint = minWidth / (0.32 * wf);
		if (isNaN(maxPoint)) {
			throw new Error(`maxPoint is NaN, minWidth: ${minWidth}, wf: ${wf}`);
		}
	}

	// if (!(minPoint instanceof MinMax) && !(maxPoint instanceof MinMax)) {
	var results = new OutputValues(true, minWidth, minPoint, maxPoint, vd, CPS, VA);
	setResults(results);
	if (router !== undefined) {
		router.push('#results');
	}
	// }
};