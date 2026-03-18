import Image from 'next/image';

export default function FooterMinimal() {
  return (
    <footer className="footer-minimal">
      <div className="container">
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
            © {new Date().getFullYear()} Brandscast. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
