import * as yup from 'yup';
import { centralFieldLossOptions, distanceUnits, fontOptions, viewingDistances, visionUnits } from '../calculator/options-definitions';
import { logMARLimit, snellenImperialViewLimit, snellenMetricViewLimit, Limit } from '../calculator/limits';

const visionMeasureValidation = (id: string, label: string) =>
	yup
		.number()
		.when(id, {
			is: '6/',
			then:
				yup.number()
					.min(snellenMetricViewLimit.min, `${label} must be at least ${(snellenMetricViewLimit.min).toFixed(2)}`)
					.max(snellenMetricViewLimit.max, `${label} must be no greater than ${snellenMetricViewLimit.max}`)
					.typeError(`Please enter a number between ${(snellenMetricViewLimit.min).toFixed(2)} and ${snellenMetricViewLimit.max}`)
		})
		.when(id, {
			is: '20/',
			then:
				yup.number()
					.min(snellenImperialViewLimit.min, `${label} must be at least ${(snellenImperialViewLimit.min).toFixed(2)}`)
					.max(snellenImperialViewLimit.max, `${label} must be no greater than ${snellenImperialViewLimit.max}`)
					.typeError(`Please enter a number between ${(snellenImperialViewLimit.min).toFixed(2)} and ${snellenImperialViewLimit.max}`)
		})
		.when(id, {
			is: ' ',
			then:
				yup.number()
					.min(logMARLimit.min, `${label} must be at least ${(logMARLimit.min).toFixed(2)}`)
					.max(logMARLimit.max, `${label} must be no greater than ${logMARLimit.max}`)
					.typeError(`Please enter a number between ${(logMARLimit.min).toFixed(2)} and ${logMARLimit.max}`)
		})
		.label(label);

export const validationSchema = yup.object({
	visualAcuityUnits: yup
		.mixed()
		.oneOf(visionUnits.map(({ label }) => (label)))
		.required()
		.label('Visual Acuity Units'),
	visualAcuity: visionMeasureValidation('visualAcuityUnits', 'Visual Acuity'),
	criticalPrintSizeUnits: yup
		.mixed()
		.oneOf(visionUnits.map(({ label }) => (label)))
		.required()
		.label('Critical Print Size Units'),
	criticalPrintSize: visionMeasureValidation('criticalPrintSizeUnits', 'Critical Print Size'),
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