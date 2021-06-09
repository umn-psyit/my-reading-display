export const logMARLimit = {
	min: -0.52,
	max: 3
};

const snellenViewLimit = {
	min: Math.pow(10, -logMARLimit.min),
	max: Math.pow(10, -logMARLimit.max)
};

export const snellenMetricViewLimit = {
	min: (6/snellenViewLimit.min),
	max: (6/snellenViewLimit.max)
};

export const snellenImperialViewLimit = {
	min: (20/snellenViewLimit.min),
	max: (20/snellenViewLimit.max)
}

export interface Limit {
	min: number;
	max: number;
}