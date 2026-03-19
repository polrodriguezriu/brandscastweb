'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  pricingHref?: string;
}

export default function Header({ pricingHref = '/#pricing' }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) setDrawerOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [drawerOpen]);

  const handleNavClick = () => setDrawerOpen(false);

  return (
    <header>
      <div className="container nav" role="navigation" aria-label="Main">
        <Link className="brand" href="/">
          <img src="/brandscast-logo.svg" alt="Brandscast" height={28} />
        </Link>

        <nav className="menu" aria-label="Primary">
          <a href={pricingHref}>Pricing</a>
          <a href="https://app.brandscast.com/login" target="_blank" rel="noopener">Sign in</a>
          <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-drawer"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="bar" />
        </button>
      </div>

      <div id="mobile-drawer" className="drawer" hidden={!drawerOpen}>
        <div className="container drawer-inner">
          <a href={pricingHref} onClick={handleNavClick}>Pricing</a>
          <a href="https://app.brandscast.com/login" target="_blank" rel="noopener" onClick={handleNavClick}>Sign in</a>
          <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener" onClick={handleNavClick}>Start trial</a>
        </div>
      </div>
    </header>
  );
}
