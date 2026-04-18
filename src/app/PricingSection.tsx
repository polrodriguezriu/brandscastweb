'use client';

import { useState, useEffect } from 'react';

function getCurrencySymbol(): string {
  if (typeof document === 'undefined') return '€';
  const match = document.cookie.match(/(?:^|;\s*)currency=([^;]+)/);
  return match?.[1] === 'USD' ? '$' : '€';
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [symbol, setSymbol] = useState('€');

  useEffect(() => {
    setSymbol(getCurrencySymbol());
  }, []);

  return (
    <section id="pricing" className="section-muted">
      <div className="container">
        <div className="section-head">
          <h2>Pricing that scales with your team</h2>
          <p>One model, flexible by team size. All features included.</p>
        </div>

        <div className="billing-toggle" role="group" aria-label="Billing period">
          <span style={{ color: 'var(--muted)', fontWeight: 600 }}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              id="billingSwitch"
              role="switch"
              aria-checked={isYearly}
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <span style={{ fontWeight: 700, color: 'var(--brand)' }}>
            Yearly <small style={{ color: 'var(--muted)', fontWeight: 400 }}>(save up to 20%)</small>
          </span>
        </div>

        <div className="pricing-grid" aria-live="polite">
          <article className="price-card" data-plan="starter">
            <p className="tier">Starter</p>
            <p className="price"><span className="price-value">{isYearly ? `${symbol}29` : `${symbol}39`}</span> <span className="unit">/month</span></p>
            <p className="feat">Up to 60 employees</p>
            <p className="feat">Up to 3 users</p>
            <ul>
              <li>Unlimited private podcasts</li>
              <li>Private feeds</li>
              <li>IAB analytics</li>
              <li>Email support</li>
            </ul>
            <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
          </article>

          <article className="price-card" data-plan="growth">
            <p className="tier">Growth</p>
            <p className="price"><span className="price-value">{isYearly ? `${symbol}59` : `${symbol}79`}</span> <span className="unit">/month</span></p>
            <p className="feat">Up to 120 employees</p>
            <p className="feat">Up to 10 users</p>
            <ul>
              <li>Unlimited private podcasts</li>
              <li>Private feeds</li>
              <li>IAB analytics</li>
              <li>Email support</li>
            </ul>
            <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
          </article>

          <article className="price-card" data-plan="enterprise">
            <p className="tier">Enterprise</p>
            <p className="price"><span className="price-value">Custom</span> <span className="unit">/quote</span></p>
            <p className="feat">More than 120 employees</p>
            <p className="feat">Unlimited users</p>
            <ul>
              <li>Everything in Growth</li>
              <li>Dedicated success manager</li>
              <li>Volume pricing</li>
            </ul>
            <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
          </article>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '18px' }}>
          {isYearly ? 'Billed yearly, cancel anytime' : 'Billed monthly, cancel anytime'}
        </p>
      </div>
    </section>
  );
}
