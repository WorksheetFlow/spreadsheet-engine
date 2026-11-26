import type { CellValue } from '../types/cell-value.js';

export interface Cell {
  readonly id: string;
  readonly address: string;
  value: CellValue;
}

export function createCell(address: string, value: CellValue = null): Cell {
  return { id: address, address, value };
}
