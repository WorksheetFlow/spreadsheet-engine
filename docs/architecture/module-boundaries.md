# Engine Module Boundaries (E0-02)

## 1. Principles

- **Single ownership:** each domain concept has one owning module.
- **Public facade:** consumers import only from the package public entry point; internal paths are not API.
- **Mutation control:** state changes must go through the Operation layer, not direct writes from consumers.
- **Snapshot reads:** public read APIs return immutable snapshots/value objects, not mutable internal references.
- **Dependency direction:** foundational types are at the bottom; orchestration at the top.
- **Runtime neutrality:** no React, Tauri, Electron, browser DOM, Node filesystem, or OS-specific imports in core.
- **No workflow awareness:** Engine does not define Pack, Workflow, Task, progress, or business validation concepts.

## 2. Module ownership

| Module | Owns | Does not own |
|---|---|---|
| `types` | shared primitive types, branded IDs, value unions | domain behavior, storage |
| `errors` | stable error codes, error shape, error factories | UI error presentation, retry policy |
| `cell` | cell content/value/formula representation and cell invariants | range traversal, sheet layout, formula evaluation policy |
| `range` | address parsing, normalization, bounds, range shape | workbook mutation, formula evaluation |
| `worksheet` | sheet identity/name, sheet-level model and lookup delegation | workbook-wide lifecycle, operation orchestration |
| `workbook` | workbook identity, revision, sheet collection, snapshot assembly | operation execution implementation, IO persistence |
| `operations` | operation contracts, validation/execution dispatch, atomic mutation orchestration | workflow/task semantics, UI commands |
| `changes` | immutable change records/change sets describing committed mutations | durable audit database, user identity, workflow history |
 | `calculation` | calculation interface/results/errors; later formula graph and evaluator | task completion conditions, business reconciliation |
 | `events` | in-process event contracts and subscription mechanism | cross-process transport, UI state, persistent event log |
 | `api` | public facade and supported capability reporting | internal model details, consumer-specific adapters |

## 3. Dependency direction

Allowed conceptual direction:


`api` → `operations` → `workbook` / `worksheet` / `cell` / `range`

`operations` → `changes` / `errors` / `types`

`calculation` → `workbook` / `worksheet` / `cell` / `range` / `errors` / `types`

`events` → `changes` / `errors` / `types`

All modules may depend on shared foundational types/errors as needed, but foundational modules must not import orchestration modules.

## 4. Ownership and mutation

- Workbook is the owner of workbook-wide sheet membership and revision state.
- Worksheet owns sheet-local structure and sparse cell storage.
- Cell owns its content representation and local invariants.
- Range is a validated address/coordinate abstraction; it does not own cell data.
- Operation Executor is the only public mutation pathway and coordinates commits.
- ChangeSet is created from successful commits and is immutable to consumers.
- Calculation is responsible for computed results and calculation state, not for task-level pass/fail decisions.

## 5. Public vs internal modules

Only symbols explicitly exported from `src/index.ts` are public. Internal implementation modules may be reorganized without semver guarantees until deliberately exposed. Avoid barrel exports from every folder into the package root before the contract review.


## 6. Contract boundaries for WorksheetFlow

WorksheetFlow may rely on:
- Engine public types and facade
- read snapshots
- typed operation definitions
- operation results and change sets
- error codes
- capabilities
- calculation results
- engine events

WorksheetFlow must not rely on:
- internal mutable maps/arrays
- private storage layout
- implementation-specific class constructors
- undocumented source paths
- mutation methods that bypass the Operation Executor

The Workflow adapter should map workflow-oriented calls to Engine operations and translate Engine outcomes into Workflow task outcomes. The Engine must not import WorksheetFlow.


## 7. Deferred decisions

The following are intentionally not finalized by E0-02:
- formula dependency graph architecture
- full undo/redo and operation inverse representation
- transaction grouping across multiple operations
- workbook serialization format
- XLSX/CSV adapter package boundaries
- worker/thread calculation model
- persistence and autosave architecture
- style/formatting data model
- collaboration and concurrent edits
- cell storage implementation and performance tuning
