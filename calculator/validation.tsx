import * as yup from 'yup';
import { centralFieldLossOptions, distanceUnits, fontOptions, viewingDistances, visionUnits } from '../calculator/options-definitions';
import { logMARLimitVA, snellenImperialViewLimitVA, snellenMetricViewLimitVA, logMARLimitCPS, snellenImperialViewLimitCPS, snellenMetricViewLimitCPS, Limit } from '../calculator/limits';

const visualAcuityValidation = (id: string, label: string) =>
	yup
		.number()
		.when(id, {
			is: '6/',
			then:
				yup.number()
					.min(snellenMetricViewLimitVA.min, `${label} must be at least ${(snellenMetricViewLimitVA.min).toFixed(2)}`)
					.max(snellenMetricViewLimitVA.max, `${label} must be no greater than ${snellenMetricViewLimitVA.max}`)
					.typeError(`Please enter a number between ${(snellenMetricViewLimitVA.min).toFixed(2)} and ${snellenMetricViewLimitVA.max}`)
		})
		.when(id, {
			is: '20/',
			then:
				yup.number()
					.min(snellenImperialViewLimitVA.min, `${label} must be at least ${(snellenImperialViewLimitVA.min).toFixed(2)}`)
					.max(snellenImperialViewLimitVA.max, `${label} must be no greater than ${snellenImperialViewLimitVA.max}`)
					.typeError(`Please enter a number between ${(snellenImperialViewLimitVA.min).toFixed(2)} and ${snellenImperialViewLimitVA.max}`)
		})
		.when(id, {
			is: ' ',
			then:
				yup.number()
					.min(logMARLimitVA.min, `${label} must be at least ${(logMARLimitVA.min).toFixed(2)}`)
					.max(logMARLimitVA.max, `${label} must be no greater than ${logMARLimitVA.max}`)
					.typeError(`Please enter a number between ${(logMARLimitVA.min).toFixed(2)} and ${logMARLimitVA.max}`)
		})
		.label(label);

const criticalPrintSizeValidation = (id: string, label: string) =>
	yup
		.number()
		.when(id, {
			is: '6/',
			then:
				yup.number()
					.min(snellenMetricViewLimitCPS.min, `${label} must be at least ${(snellenMetricViewLimitCPS.min).toFixed(2)}`)
					.max(snellenMetricViewLimitCPS.max, `${label} must be no greater than ${snellenMetricViewLimitCPS.max}`)
					.typeError(`Please enter a number between ${(snellenMetricViewLimitCPS.min).toFixed(2)} and ${snellenMetricViewLimitCPS.max}`)
		})
		.when(id, {
			is: '20/',
			then:
				yup.number()
					.min(snellenImperialViewLimitCPS.min, `${label} must be at least ${(snellenImperialViewLimitCPS.min).toFixed(2)}`)
					.max(snellenImperialViewLimitCPS.max, `${label} must be no greater than ${snellenImperialViewLimitCPS.max}`)
					.typeError(`Please enter a number between ${(snellenImperialViewLimitCPS.min).toFixed(2)} and ${snellenImperialViewLimitCPS.max}`)
		})
		.when(id, {
			is: ' ',
			then:
				yup.number()
					.min(logMARLimitCPS.min, `${label} must be at least ${(logMARLimitCPS.min).toFixed(2)}`)
					.max(logMARLimitCPS.max, `${label} must be no greater than ${logMARLimitCPS.max}`)
					.typeError(`Please enter a number between ${(logMARLimitCPS.min).toFixed(2)} and ${logMARLimitCPS.max}`)
		})
		.label(label);

export const validationSchema = yup.object({
	visualAcuityUnits: yup
		.mixed()
		.oneOf(visionUnits.map(({ label }) => (label)))
		.required()
		.label('Visual Acuity Units'),
	visualAcuity: visualAcuityValidation('visualAcuityUnits', 'Visual Acuity'),
	criticalPrintSizeUnits: yup
		.mixed()
		.oneOf(visionUnits.map(({ label }) => (label)))
		.required()
		.label('Critical Print Size Units'),
	criticalPrintSize: criticalPrintSizeValidation('criticalPrintSizeUnits', 'Critical Print Size'),
	hasCentralFieldLoss: yup
		.string()
		.oneOf(centralFieldLossOptions.map(({ label }) => (label)))
		.label('Has Central Field Loss'),
	selectedFont: yup
		.string()
		.oneOf(fontOptions.map(({ font }) => (font)))
		.label('Selected Font'),
	selectedViewingDistance: yup
		.string()
		.oneOf(viewingDistances.map(({ label }) => (label)))
		.label('Selected Viewing Distance'),
	customViewDistance: yup
		.number()
		.moreThan(0)
		.label('Custom View Distance'),
	customViewDistanceUnits: yup
		.string()
		.oneOf(distanceUnits.map(({ label }) => (label)))
		.label('Custom View Distance Units')
})