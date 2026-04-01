import { useEffect, useRef } from "react";
import "./Experience.scss";

interface Achievement {
  text: string;
}
interface WorkExp {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  current: boolean;
}

const EXPERIENCES: WorkExp[] = [
  {
    role: "React.js Front-End Developer / Associate",
    company: "Cognizant",
    period: "Aug 2022 – Present",
    duration: "3.7 yrs",
    location: "Pune, India",
    description:
      "Building scalable features for enterprise clients using React.js, TypeScript, React Query, and modern UI patterns in Agile environments.",
    achievements: [
      "Built scalable features using React.js, JavaScript/TypeScript, React Query, and modern UI patterns",
      "Worked on Nx Monorepo and Module Federation for micro-frontend architecture",
      "Integrated APIs and GraphQL queries to improve performance and application reliability",
      "Delivered responsive UI components with optimised rendering and cross-browser compatibility",
      "Resolved 100% of critical UI defects and production issues, improving stability",
      "Contributed to Agile workflows — sprints, stand-ups, code reviews, and release cycles",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "React Query",
      "GraphQL",
      "Nx",
      "Module Federation",
      "Jest",
    ],
    current: true,
  },
];

interface ProjectExp {
  title: string;
  client: string;
  period: string;
  achievements: string[];
  tech: string[];
  emoji: string;
}

const PROJECTS_EXP: ProjectExp[] = [
  {
    title: "Verizon",
    client: "Verizon",
    period: "Oct 2025 – Jan 2026",
    emoji: "📱",
    achievements: [
      'Built mini-cart and "Save for Later" features using React and TypeScript',
      "Integrated APIs and fixed key UI bugs for e-commerce flows",
      "Added unit tests and resolved Sonar code-quality issues",
      "Contributed to Agile sprint-based development",
    ],
    tech: ["React", "TypeScript", "Jest", "SonarQube", "REST API"],
  },
  {
    title: "ACT – MyACT Application",
    client: "ACT",
    period: "Jul 2024 – Oct 2025",
    emoji: "🎓",
    achievements: [
      "Developed the MyACT application with front-end coding, UI design, and critical production UI bug fixes",
      "Implemented Figma mockups into reusable React components using Webpack",
      "Increased test coverage from 25% to 90% using Jest and Mocha",
      "Applied GitHub Copilot to accelerate coding efficiency and improve estimation accuracy",
    ],
    tech: [
      "React",
      "TypeScript",
      "Jest",
      "Mocha",
      "Webpack",
      "Figma",
      "GitHub Copilot",
    ],
  },
  {
    title: "DirecTV",
    client: "DirecTV",
    period: "Nov 2023 – May 2024",
    emoji: "📺",
    achievements: [
      "Worked as a full-stack developer implementing features with React.js, Spring Boot, and APIs",
      "Debugged and troubleshot UI and backend issues",
      "Delivered an Application Handbook and technical presentations enhancing team knowledge sharing",
    ],
    tech: ["React", "Spring Boot", "REST API", "TypeScript"],
  },
  {
    title: "PayPal Merchant App",
    client: "PayPal",
    period: "Oct 2022 – Oct 2023",
    emoji: "💳",
    achievements: [
      "Worked on the PayPal Merchant Application, fixing UI bugs and ensuring cross-browser compatibility",
      "Enhanced responsive design and optimised front-end performance",
      "Adhered to application security standards for production stability",
      "Participated in Agile sprints using team collaboration techniques",
    ],
    tech: ["React", "JavaScript", "CSS3", "Agile"],
  },
];

const CERTIFICATIONS = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    year: "2024",
    icon: "🏅",
  },
  {
    name: "Outstanding Tech Team Leader – North Maharashtra",
    issuer: "Sadguru Moredada Hospital",
    year: "2024",
    icon: "🏆",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current?.classList.add("visible");
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          3.7 years at Cognizant delivering enterprise projects
        </p>

        <div className="exp-layout" ref={sectionRef}>
          {/* Work Timeline */}
          <div className="timeline-col">
            <h3 className="col-heading">
              <span>💼</span> Work History
            </h3>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="tl-line">
                  <div className={`tl-dot${exp.current ? " active" : ""}`} />
                </div>
                <div className="exp-card">
                  {exp.current && (
                    <span className="current-badge">Current</span>
                  )}
                  <h4 className="exp-role">{exp.role}</h4>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-meta">
                    <span>📅 {exp.period}</span>
                    <span>⏱ {exp.duration}</span>
                    <span>📍 {exp.location}</span>
                  </div>
                  <p className="exp-desc">{exp.description}</p>
                  <ul className="exp-achievements">
                    {exp.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <h3 className="col-heading" style={{ marginTop: "40px" }}>
              <span>🚀</span> Project Experience
            </h3>
            {PROJECTS_EXP.map((proj, i) => (
              <div key={i} className="timeline-item">
                <div className="tl-line">
                  <div className="tl-dot" />
                  {i < PROJECTS_EXP.length - 1 && (
                    <div className="tl-connector" />
                  )}
                </div>
                <div className="exp-card proj-card">
                  <div className="proj-card-header">
                    <span className="proj-emoji">{proj.emoji}</span>
                    <div>
                      <h4 className="exp-role">{proj.title}</h4>
                      <div className="proj-period">📅 {proj.period}</div>
                    </div>
                  </div>
                  <ul className="exp-achievements">
                    {proj.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {proj.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="side-col">
            <div className="edu-block">
              <h3 className="col-heading">
                <span>🎓</span> Education
              </h3>
              <div className="edu-card">
                <div className="edu-icon">🎓</div>
                <div>
                  <h4 className="edu-degree">Bachelor of Engineering</h4>
                  <div className="edu-field">Computer Engineering</div>
                  <div className="edu-school">
                    NBN Sinhgad School of Engineering, Pune
                  </div>
                  <div className="edu-meta">
                    <span>Aug 2018 – Jun 2022</span>
                    <span className="edu-grade">CGPA: 8.6/10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cert-block">
              <h3 className="col-heading">
                <span>🏆</span> Awards & Certificates
              </h3>
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="cert-card">
                  <span className="cert-icon">{cert.icon}</span>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-meta">
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-card">
              <h3 className="col-heading" style={{ marginBottom: "16px" }}>
                <span>📊</span> Quick Stats
              </h3>
              <div className="summary-stats">
                {[
                  { num: "3.7+", label: "Years Exp." },
                  { num: "4", label: "Enterprise Clients" },
                  { num: "90%", label: "Test Coverage" },
                  { num: "100%", label: "Bug Resolution" },
                ].map((s) => (
                  <div key={s.label} className="summary-stat">
                    <span className="summary-num">{s.num}</span>
                    <span className="summary-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
