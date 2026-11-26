import type { Worksheet } from '../model/worksheet.js';
import { createCell } from '../model/cell.js';
import type { CellValue } from '../types/cell-value.js';

export function setCellValue(worksheet: Worksheet, address: string, value: CellValue): Worksheet {
  const current = worksheet.cells.get(address);
  if (current) {
    current.value = value;
  } else {
    worksheet.cells.set(address, createCell(address, value));
  }
  return worksheet;
}
