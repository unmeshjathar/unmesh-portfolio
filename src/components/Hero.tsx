import { useEffect, useState } from "react";
import "./Hero.scss";

const ROLES = [
  "React Developer",
  "Frontend Engineer",
  "TypeScript Enthusiast",
] as const;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to new opportunities
        </div>

        <h1 className="hero-heading">
          Hi, I'm <span className="hero-name">Unmesh Jathar</span>
        </h1>

        <div className="hero-role">
          <span className="role-prefix">I'm a </span>
          <span className="role-text">
            {displayed}
            <span className="cursor">|</span>
          </span>
        </div>

        <p className="hero-desc">
          <strong>Meta-certified</strong> React Front-End Developer with{" "}
          <strong>3.7 years</strong> of experience building scalable, responsive
          web applications at <strong>Cognizant</strong>. Skilled in React.js,
          TypeScript, API integration, and UI performance optimization.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">3.7+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Enterprise Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">90%</span>
            <span className="stat-label">Test Coverage</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">8.6</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo("projects")}
          >
            View My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo("contact")}
          >
            Get In Touch
          </button>
          <a href="mailto:unmesh1jathar@gmail.com" className="btn btn-ghost">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>
          <a
            href="/img/Unmesh_Jathar_ReactJS.pdf"
            download="Unmesh_Jathar_ReactJS.pdf"
            className="btn btn-outline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://linkedin.com/in/unmeshjathar"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
          <a
            href="tel:+919922191177"
            className="social-link"
            aria-label="Phone"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo("about")}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
