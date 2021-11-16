const CUTOFF = 20;

/**
 * Rounds a number to the nearest 1 for inputs >= CUTOFF
 * and rounds to nearest 0.5 for inputs < CUTOFF.
 * @param input input number to round
 * @returns rounded string based on the CUTOFF constant
 */
export function roundPoints(input: number): string {
  if (input >= CUTOFF) {
    return input.toFixed(0);
  }
  return (Math.round(input * 2) / 2).toFixed(1);
}

export type VisionUnitType = '20/' | '6/' | ' ';
