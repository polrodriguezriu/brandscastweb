import Image from 'next/image';

export default function FooterFull() {
  return (
    <footer className="footer-home">
      <div className="container">
        <div className="footer-grid">
          {/* Product */}
          <div className="footer-col">
            <h3 className="footer-col-title">Product</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/private-podcasts-for-teams/">Private podcasts for teams</a></li>
              <li><a href="https://brandscast.com/secure-access-control/">Secure access control</a></li>
              <li><a href="https://brandscast.com/employee-listening-analytics/">Employee listening analytics</a></li>
              <li><a href="https://brandscast.com/audio-messages-and-updates/">Audio messages and updates</a></li>
              <li><a href="https://brandscast.com/audiocourses/">Audiocourses</a></li>
              <li><a href="https://brandscast.com/podcasting-for-remote-teams/">Podcasting for remote teams</a></li>
            </ul>
          </div>

          {/* Use cases */}
          <div className="footer-col">
            <h3 className="footer-col-title">Use cases</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/internal-communication/">Internal communication</a></li>
              <li><a href="https://brandscast.com/leadership-updates/">Leadership updates</a></li>
              <li><a href="https://brandscast.com/hr-announcements/">HR announcements</a></li>
              <li><a href="https://brandscast.com/employee-onboarding/">Employee onboarding</a></li>
              <li><a href="https://brandscast.com/sales-enablement/">Sales enablement</a></li>
              <li><a href="https://brandscast.com/company-culture/">Company culture</a></li>
              <li><a href="https://brandscast.com/product-updates/">Product updates</a></li>
              <li><a href="https://brandscast.com/training-and-compliance/">Training and compliance</a></li>
            </ul>
          </div>

          {/* Teams */}
          <div className="footer-col">
            <h3 className="footer-col-title">Teams</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/for-hr-teams/">For HR teams</a></li>
              <li><a href="https://brandscast.com/for-internal-comms/">For internal comms</a></li>
              <li><a href="https://brandscast.com/for-people-and-culture/">For people and culture</a></li>
              <li><a href="https://brandscast.com/for-leadership/">For leadership</a></li>
              <li><a href="https://brandscast.com/for-distributed-teams/">For distributed teams</a></li>
              <li><a href="https://brandscast.com/for-sales-teams/">For sales teams</a></li>
              <li><a href="https://brandscast.com/for-customer-support-teams/">For customer support teams</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-col">
            <h3 className="footer-col-title">Industries</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/tech-companies/">Tech companies</a></li>
              <li><a href="https://brandscast.com/agencies/">Agencies</a></li>
              <li><a href="https://brandscast.com/professional-services/">Professional services</a></li>
              <li><a href="https://brandscast.com/retail-and-franchises/">Retail and franchises</a></li>
              <li><a href="https://brandscast.com/manufacturing/">Manufacturing</a></li>
              <li><a href="https://brandscast.com/healthcare/">Healthcare</a></li>
              <li><a href="https://brandscast.com/education-and-universities/">Education and universities</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/guide-to-internal-podcasts/">Guide to internal podcasts</a></li>
              <li><a href="https://brandscast.com/async-communication-guide/">Async communication guide</a></li>
              <li><a href="https://brandscast.com/templates-for-company-updates/">Templates for company updates</a></li>
              <li><a href="https://brandscast.com/how-to-launch-a-private-podcast/">How to launch a private podcast</a></li>
              <li><a href="https://brandscast.com/internal-comms-best-practices/">Internal comms best practices</a></li>
              <li><a href="https://brandscast.com/resources/employee-engagement-with-audio/">Employee engagement with audio</a></li>
              <li><a href="https://brandscast.com/remote-team-communication-tips/">Remote team communication tips</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links">
              <li><a href="https://brandscast.com/about/">About Brandscast</a></li>
              <li><a href="https://brandscast.com/#pricing">Pricing</a></li>
              <li><a href="https://brandscast.com/legal/">Legal</a></li>
              <li><a href="https://brandscast.com/privacy/">Privacy</a></li>
              <li><a href="javascript:void(0)" className="js-lcc-settings-toggle">Cookies</a></li>
              <li><a href="mailto:hello@brandscast.com">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="brand">
            <Image
              src="https://brandscast.com/favicon_brandscast.webp"
              alt="Brandscast logo"
              width={28}
              height={28}
            />
            <span>Brandscast</span>
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
