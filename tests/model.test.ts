import { describe, expect, it } from 'vitest';
import { createCell, createRange, createWorkbook, createWorksheet, setCellValue } from '../src/index.js';

describe('initial model', () => {
  it('creates a workbook with no sheets', () => {
    expect(createWorkbook('book-1', 'Untitled').worksheets).toEqual([]);
  });
  it('creates an empty worksheet cell map', () => {
    expect(createWorksheet('sheet-1', 'Sheet 1').cells.size).toBe(0);
  });
  it('creates a cell with a null default value', () => {
    expect(createCell('A1').value).toBeNull();
  });
  it('creates a single-cell range by default', () => {
    expect(createRange('A1')).toEqual({ start: 'A1', end: 'A1' });
  });
  it('sets a cell value, creating a cell when needed', () => {
    const sheet = createWorksheet('s1', 'Sheet 1');
    setCellValue(sheet, 'A1', 42);
    expect(sheet.cells.get('A1')?.value).toBe(42);
  });
  it('updates an existing cell value', () => {
    const sheet = createWorksheet('s1', 'Sheet 1');
    setCellValue(sheet, 'A1', 'first');
    setCellValue(sheet, 'A1', 'updated');
    expect(sheet.cells.get('A1')?.value).toBe('updated');
  });
});
