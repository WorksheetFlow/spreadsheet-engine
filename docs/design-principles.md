# Engine Design Principles

1. **UI-independent:** no React, DOM, canvas, or desktop-shell imports.
2. **Deterministic core:** operations should be predictable and testable.
3. **Explicit model:** avoid implicit state or hidden side effects.
4. **Small API surface:** expose intentional public exports from `src/index.ts`.
5. **Compatibility is deliberate:** import/export support is adapter-based and documented.
6. **Test first for semantics:** behavior is specified with tests before broad feature implementation.
