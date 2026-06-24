"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  pricingHref?: string;
}

export default function Header({ pricingHref = "/#pricing" }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerOpen) setDrawerOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [drawerOpen]);

  const handleNavClick = () => setDrawerOpen(false);

  return (
    <header>
      <div className="container nav" role="navigation" aria-label="Main">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <svg
              viewBox="0 0 44 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M9 4c-3 4-3 12 0 16" />
              <path d="M15 8c-1.5 2.4-1.5 5.6 0 8" />
              <path d="M35 4c3 4 3 12 0 16" />
              <path d="M29 8c1.5 2.4 1.5 5.6 0 8" />
            </svg>
          </span>
          <span>
            Brands
            <strong style={{ fontWeight: 800, color: "var(--brand)" }}>
              Cast
            </strong>
          </span>
        </Link>

        <nav className="menu" aria-label="Primary">
          <a href="/features">Features</a>
          <a href={pricingHref}>Pricing</a>
          <a
            href="https://app.brandscast.com/login"
            target="_blank"
            rel="noopener"
          >
            Sign in
          </a>
          <a
            className="btn"
            href="https://app.brandscast.com/signup"
            target="_blank"
            rel="noopener"
          >
            Start trial
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-drawer"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="bar" />
        </button>
      </div>

      <div id="mobile-drawer" className="drawer" hidden={!drawerOpen}>
        <div className="container drawer-inner">
          <a href="/features" onClick={handleNavClick}>
            Features
          </a>
          <a href={pricingHref} onClick={handleNavClick}>
            Pricing
          </a>
          <a
            href="https://app.brandscast.com/login"
            target="_blank"
            rel="noopener"
            onClick={handleNavClick}
          >
            Sign in
          </a>
          <a
            className="btn"
            href="https://app.brandscast.com/signup"
            target="_blank"
            rel="noopener"
            onClick={handleNavClick}
          >
            Start trial
          </a>
        </div>
      </div>
    </header>
  );
}
