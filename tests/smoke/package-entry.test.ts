import { describe, expect, it } from 'vitest';
import { ENGINE_PACKAGE_STATUS } from '../../packages/engine/src/index.js';

describe('Engine package smoke test', () => {
  it('exports the package entry point', () => {
    expect(ENGINE_PACKAGE_STATUS).toBe('foundation');
  });
});
