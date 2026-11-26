# Initial Engine Scope

## In scope for foundation
- Workbook / worksheet / cell / range domain model
- Primitive cell values (`string`, `number`, `boolean`, `null`)
- Basic operations and deterministic unit tests
- Public package entry point

## Planned, not implemented
- Formula parsing and evaluation
- Dependency graph and recalculation strategy
- Cell formatting and style model
- Row / column dimensions
- Selection-independent range operations
- Import/export adapters (initially evaluate formats separately)
- Undo/redo command model (decision required)

## Non-goals
- UI or rendering layer
- Desktop OS APIs
- Workflow Pack concepts
- Excel parity as a blanket target
