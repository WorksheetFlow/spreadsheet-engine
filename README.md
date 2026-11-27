# Spreadsheet Engine

A standalone, TypeScript-first spreadsheet core intended to power WorksheetFlow and other consumers. The engine is UI-agnostic and runtime-independent.


## Status

Foundation setup is in progress. This repository currently contains tooling and architecture scaffolding; spreadsheet features are not implemented yet.

## Prerequisites

- Node.js 22+
- pnpm 10+

Enable pnpm through Corepack if needed:

```sh
corepack enable
corepack prepare pnpm@10.10.0 --activate
```

## Setup

```sh
pnpm install
```

## Scripts

- `pnpm build` — build the Engine package
- `pnpm test` — run tests
- `pnpm test:watch` — watch tests
- `pnpm typecheck` — TypeScript checks
- `pnpm lint` — lint source and configuration
- `pnpm format` — format files
- `pnpm format:check` — check formatting

## Module layout

The Engine source is organized by domain responsibility under `packages/engine/src`. The formal module boundaries and dependency rules are documented in `docs/architecture/module-boundaries.md`.


## Non-goals of the foundation stage

No spreadsheet model, formula evaluator, import/export, grid UI, workflow runtime, or desktop integration is implemented in this stage.
