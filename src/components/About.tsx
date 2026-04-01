import { useEffect, useRef } from "react";
import "./About.scss";

interface Highlight {
  icon: string;
  label: string;
}

const HIGHLIGHTS: Highlight[] = [
  { icon: "⚛️", label: "React Specialist" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "🚀", label: "Performance First" },
  { icon: "🧪", label: "Jest / RTL" },
  { icon: "🤝", label: "Agile / Scrum" },
  { icon: "🏗️", label: "Micro-Frontends" },
  { icon: "🏅", label: "Meta Certified" },
  { icon: "🤖", label: "AI-Powered Dev" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Meta-certified developer passionate about modern React ecosystems
        </p>

        <div className="about-grid" ref={ref}>
          <div className="about-image-wrap">
            <div className="about-avatar">
              <img
                src="/img/unmeshprofilepic.jpeg"
                alt="Unmesh Jathar"
                className="avatar-img"
              />
              <div className="avatar-ring" />
            </div>
            <div className="about-exp-badge">
              <span className="exp-num">3.7</span>
              <span className="exp-label">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="about-cert-badge">
              <span>🏅</span>
              <span>Meta Certified</span>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">
              Unmesh Ramesh Jathar
              <span className="about-location">
                📍 Pune, Maharashtra, India
              </span>
            </h3>

            <p className="about-para">
              I'm a <strong>Meta-certified React Front-End Developer</strong>{" "}
              with 3.7 years at <strong>Cognizant, Pune</strong>, building
              scalable enterprise web applications for global clients including{" "}
              <strong>Verizon, ACT, DirecTV, and PayPal</strong>.
            </p>

            <p className="about-para">
              I specialize in React.js, TypeScript, Redux Toolkit, and React
              Query. I've worked extensively on{" "}
              <strong>Nx Monorepo and Module Federation</strong> for
              micro-frontend architecture, integrated GraphQL APIs, and boosted
              test coverage from <strong>25% → 90%</strong> using Jest and
              Mocha.
            </p>

            <p className="about-para">
              I hold a{" "}
              <strong>Bachelor of Engineering (Computer Engineering)</strong>{" "}
              from NBN Sinhgad School of Engineering, Pune (CGPA: 8.6/10) and
              was recognized as an <strong>Outstanding Tech Team Leader</strong>{" "}
              for resolving critical issues serving 100,000+ users.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="highlight-chip">
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Company</span>
                <span className="info-value">💼 Cognizant, Pune</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">📧 unmesh1jathar@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value available">
                  ✅ Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
