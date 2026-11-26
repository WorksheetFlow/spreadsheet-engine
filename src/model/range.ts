/** A rectangular range expressed with normalized A1-style endpoints. */
export interface CellRange {
  readonly start: string;
  readonly end: string;
}
export function createRange(start: string, end: string = start): CellRange {
  return { start, end };
}
