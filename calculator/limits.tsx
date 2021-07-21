export const logMARLimitVA = {
	min: -0.52,
	max: 3
};

const snellenViewLimitVA = {
	min: Math.pow(10, -logMARLimitVA.min),
	max: Math.pow(10, -logMARLimitVA.max)
};

export const snellenMetricViewLimitVA = {
	min: (6/snellenViewLimitVA.min),
	max: (6/snellenViewLimitVA.max)
};

export const snellenImperialViewLimitVA = {
	min: (20/snellenViewLimitVA.min),
	max: (20/snellenViewLimitVA.max)
}
export const logMARLimitCPS = {
	min: -0.3,
	max: 4
};

const snellenViewLimitCPS = {
	min: Math.pow(10, -logMARLimitCPS.min),
	max: Math.pow(10, -logMARLimitCPS.max)
};

export const snellenMetricViewLimitCPS = {
	min: (6/snellenViewLimitCPS.min),
	max: (6/snellenViewLimitCPS.max)
};

export const snellenImperialViewLimitCPS = {
	min: (20/snellenViewLimitCPS.min),
	max: (20/snellenViewLimitCPS.max)
}

export interface Limit {
	min: number;
	max: number;
}