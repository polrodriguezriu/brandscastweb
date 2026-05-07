export default function FooterMinimal() {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-bottom">
          <a className="brand" href="/">
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
          </a>
          <div className="small">
            © {new Date().getFullYear()} Brandscast. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
