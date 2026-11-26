import type { Cell } from './cell.js';

export interface Worksheet {
  readonly id: string;
  name: string;
  cells: Map<string, Cell>;
}

export function createWorksheet(id: string, name: string): Worksheet {
  return { id, name, cells: new Map() };
}
