import { describe, expect, it } from 'vitest';
import { statusLabel } from '../public/taskStore.js';

describe('statusLabel', () => {
  it('returns the readable label for a task status', () => {
    expect(statusLabel('in-progress')).toBe('In progress');
  });
});