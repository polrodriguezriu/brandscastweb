export default function FooterMinimal() {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-bottom">
          <div className="brand">
            <img src="/brandscast-logo.svg" alt="Brandscast" />
          </div>
          <div className="small">
            © {new Date().getFullYear()} Brandscast. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
