import type { EngineCapabilities, WorkbookId, WorkbookSnapshot } from '../types/public.js';

/** Public facade contract. Implementation and lifecycle details are intentionally opaque. */
export interface SpreadsheetEngine {
  readonly capabilities: EngineCapabilities;
  createWorkbook(): WorkbookSnapshot;
  getWorkbookSnapshot(workbookId: WorkbookId): WorkbookSnapshot;
}

