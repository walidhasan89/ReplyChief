import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('joins truthy class names', () => {
    const shouldInclude = false;
    expect(cn('a', 'b', shouldInclude && 'c', undefined, 'd')).toBe('a b d');
  });

  it('resolves conflicting Tailwind classes, keeping the last one', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });
});
