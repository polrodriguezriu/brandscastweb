import CookieSettingsLink from './CookieSettingsLink';

export default function FooterFull() {
  return (
    <footer className="footer-home">
      <div className="container">
        <div className="footer-grid">
          {/* Product */}
          <div className="footer-col">
            <h3 className="footer-col-title">Product</h3>
            <ul className="footer-links">
              <li><a href="/private-podcasts-for-teams">Private podcasts for teams</a></li>
              <li><a href="/secure-access-control">Secure access control</a></li>
              <li><a href="/employee-listening-analytics">Employee listening analytics</a></li>
              <li><a href="/audio-messages-and-updates">Audio messages and updates</a></li>
              <li><a href="/audiocourses">Audiocourses</a></li>
              <li><a href="/podcasting-for-remote-teams">Podcasting for remote teams</a></li>
            </ul>
          </div>

          {/* Use cases */}
          <div className="footer-col">
            <h3 className="footer-col-title">Use cases</h3>
            <ul className="footer-links">
              <li><a href="/internal-communication">Internal communication</a></li>
              <li><a href="/leadership-updates">Leadership updates</a></li>
              <li><a href="/hr-announcements">HR announcements</a></li>
              <li><a href="/employee-onboarding">Employee onboarding</a></li>
              <li><a href="/sales-enablement">Sales enablement</a></li>
              <li><a href="/company-culture">Company culture</a></li>
              <li><a href="/product-updates">Product updates</a></li>
              <li><a href="/training-and-compliance">Training and compliance</a></li>
            </ul>
          </div>

          {/* Teams */}
          <div className="footer-col">
            <h3 className="footer-col-title">Teams</h3>
            <ul className="footer-links">
              <li><a href="/for-hr-teams">For HR teams</a></li>
              <li><a href="/for-internal-comms">For internal comms</a></li>
              <li><a href="/for-people-and-culture">For people and culture</a></li>
              <li><a href="/for-leadership">For leadership</a></li>
              <li><a href="/for-distributed-teams">For distributed teams</a></li>
              <li><a href="/for-sales-teams">For sales teams</a></li>
              <li><a href="/for-customer-support-teams">For customer support teams</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-col">
            <h3 className="footer-col-title">Industries</h3>
            <ul className="footer-links">
              <li><a href="/industries/tech-companies">Tech companies</a></li>
              <li><a href="/industries/agencies">Agencies</a></li>
              <li><a href="/industries/professional-services">Professional services</a></li>
              <li><a href="/industries/retail-and-franchises">Retail and franchises</a></li>
              <li><a href="/industries/manufacturing">Manufacturing</a></li>
              <li><a href="/industries/healthcare">Healthcare</a></li>
              <li><a href="/industries/education-and-universities">Education and universities</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="/resources/guide-to-internal-podcasts">Guide to internal podcasts</a></li>
              <li><a href="/resources/async-communication-guide">Async communication guide</a></li>
              <li><a href="/resources/templates-for-company-updates">Templates for company updates</a></li>
              <li><a href="/resources/how-to-launch-a-private-podcast">How to launch a private podcast</a></li>
              <li><a href="/resources/internal-comms-best-practices">Internal comms best practices</a></li>
              <li><a href="/resources/employee-engagement-with-audio">Employee engagement with audio</a></li>
              <li><a href="/resources/remote-team-communication-tips">Remote team communication tips</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links">
              <li><a href="/about">About Brandscast</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/legal">Legal</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><CookieSettingsLink /></li>
              <li><a href="mailto:hello@brandscast.com">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="brand">
            <img src="/brandscast-logo.svg" alt="Brandscast" height={24} />
          </div>
          <div className="small">
            © <CurrentYear /> Brandscast. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
