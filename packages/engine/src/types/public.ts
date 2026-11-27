/** Stable public identifiers. Branded IDs prevent accidental cross-entity use. */
export type WorkbookId = string & { readonly __brand: 'WorkbookId' };
export type WorksheetId = string & { readonly __brand: 'WorksheetId' };
export type CellAddress = string;

/** Raw cell input. Formula support is represented separately and not evaluated yet. */
export type CellValue = string | number | boolean | null;
export type CellContent =
  | { readonly kind: 'value'; readonly value: CellValue }
  | { readonly kind: 'formula'; readonly formula: string };

export interface CellSnapshot {
  readonly address: CellAddress;
  readonly content: CellContent;
}


export interface WorksheetSnapshot {
  readonly id: WorksheetId;
  readonly name: string;
  /** Only non-empty cells are included; snapshots are sparse. */
  readonly cells: readonly CellSnapshot[];
}


export interface WorkbookSnapshot {
  readonly id: WorkbookId;
  readonly revision: number;
  readonly worksheets: readonly WorksheetSnapshot[];
}


export interface EngineCapabilities {
  readonly workbookSnapshots: true;
  readonly worksheetSnapshots: true;
  readonly sparseCells: true;
  readonly formulas: false;
  readonly operations: false;
  readonly events: false;
}
