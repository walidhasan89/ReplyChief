import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the brand CTA and legal links in light mode', () => {
    render(<Footer isDark={false} />);
    expect(screen.getByText('Add to Chrome — Free')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
  });

  it('renders in dark mode without crashing', () => {
    render(<Footer isDark={true} />);
    expect(screen.getByText('Add to Chrome — Free')).toBeInTheDocument();
  });
});
