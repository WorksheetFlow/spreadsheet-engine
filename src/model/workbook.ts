import type { Worksheet } from './worksheet.js';

export interface Workbook {
  readonly id: string;
  name: string;
  worksheets: Worksheet[];
}
export function createWorkbook(id: string, name: string): Workbook {
  return { id, name, worksheets: [] };
}
