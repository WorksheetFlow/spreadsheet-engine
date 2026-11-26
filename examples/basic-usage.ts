import { createWorkbook, createWorksheet, setCellValue } from '../src/index.js';

const workbook = createWorkbook('demo', 'Budget');
const sheet = createWorksheet('sheet-1', 'Summary');
workbook.worksheets.push(sheet);
setCellValue(sheet, 'A1', 'Total');
setCellValue(sheet, 'B1', 1250);
console.log(workbook);
