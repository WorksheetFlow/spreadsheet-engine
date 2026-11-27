# System Overview

Spreadsheet Engine is a standalone TypeScript library that owns spreadsheet data semantics and operations. It must remain independent of UI frameworks, desktop shells, Workflow definitions, and application-specific business rules.


## Consumer relationship

`worksheet-flow` is expected to depend on the Engine's public API. Desktop applications may consume Engine directly for spreadsheet interaction, but must not bypass its mutation/operation model.


## Foundation status

This document is a high-level overview. Detailed module responsibilities and dependency constraints are maintained in `module-boundaries.md`.
