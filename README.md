# Spreadsheet Engine

A standalone, UI-independent spreadsheet engine for Worksheet Flow.

## Goals
- Provide a stable, testable workbook model and spreadsheet operations.
- Keep rendering, UI state, desktop APIs, and workflow-specific behavior out of the engine.
- Make data model and calculation behavior explicit and testable.
- Evolve incrementally; this is not an Excel compatibility project at the outset.

## Status
**Early development / foundation.** The current scaffold contains the initial domain types and basic operations. Formula evaluation, file-format interoperability, and advanced spreadsheet features are not implemented yet.

## Development
Requirements: Node.js 22+ and pnpm 9+.

```bash
 pnpm install
 pnpm test
 pnpm typecheck
 pnpm build
```

## Initial boundaries
Included: workbook/worksheet/cell/range model; basic value types; basic cell operations; validation; future calculation and import/export boundaries.
Excluded: UI, canvas/rendering, desktop integration, workflow packs, persistence UX, and application-level undo/redo.

## Project layout
- `src/model`: domain structures
- `src/operations`: engine-level operations
- `src/types`: shared value and result types
- `tests`: behavior tests
- `docs`: design notes and API direction
- `examples`: usage examples

## License
MIT. See [LICENSE](LICENSE).
