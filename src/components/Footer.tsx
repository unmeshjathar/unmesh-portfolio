import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="bracket">&lt;</span>Unmesh Jathar
              <span className="bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Meta-certified React Frontend Developer building scalable,
              performant web applications.
            </p>
            <div className="footer-socials">
              <a
                href="https://linkedin.com/in/unmeshjathar"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:unmesh1jathar@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul>
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)}>{link}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-nav-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>📧 unmesh1jathar@gmail.com</li>
              <li> Pune, Maharashtra – 411001</li>
              <li>💼 Cognizant (Associate)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Unmesh Ramesh Jathar. All rights reserved.</p>
          <p className="footer-credit">
            Built with <span className="heart">❤️</span> using React, TypeScript
            &amp; SCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
