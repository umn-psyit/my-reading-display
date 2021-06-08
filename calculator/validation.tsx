import * as yup from 'yup';
import { centralFieldLossOptions, distanceUnits, fontOptions, viewingDistances, visionUnits } from '../calculator/options-definitions';

export const validationSchema = yup.object({
	visualAcuityUnits: yup
	  .mixed()
	  .oneOf(visionUnits.map(({ label }) => (label)))
	  .required()
	  .label('Visual Acuity Units'),
	visualAcuity: yup
	  .number()
	// .when('visualAcuityUnits', {
	//   is: 'Metric',
	//   then: yup.number().min(0),
	//   otherwise: yup.number().min(0)
	// })
	  .label('Visual Acuity'),
	criticalPrintSizeUnits: yup
	  .mixed()
	  .oneOf(visionUnits.map(({ label }) => (label)))
	  .required()
	  .label('Critical Print Size Units'),
	criticalPrintSize: yup
	  .number()
	  .label('Critical Print Size'),
	hasCentralFieldLoss: yup
	  .string()
	  .oneOf(centralFieldLossOptions.map(({label}) => (label)))
	  .label('Has Central Field Loss'),
	selectedFont: yup
	  .string()
	  .oneOf(fontOptions.map(({font}) => (font)))
	  .label('Selected Font'),
	selectedViewingDistance: yup
	  .string()
	  .oneOf(viewingDistances.map(({label}) => (label)))
	  .label('Selected Viewing Distance'),
	customViewDistance: yup
	  .number()
	  .moreThan(0)
	  .label('Custom View Distance'),
	customViewDistanceUnits: yup
	  .string()
	  .oneOf(distanceUnits.map(({label}) => (label)))
	  .label('Custom View Distance Units')
  })