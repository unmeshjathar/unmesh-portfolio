import { useEffect, useRef } from "react";
import "./Skills.scss";

interface Skill {
  name: string;
  level: number;
}
interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 / CSS3", level: 93 },
    ],
  },
  {
    title: "Styling & UI",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux / Redux Toolkit", level: 87 },
      { name: "React Query", level: 85 },
      { name: "Figma → React", level: 82 },
    ],
  },
  {
    title: "Backend & Data",
    icon: "🗃️",
    skills: [
      { name: "GraphQL", level: 80 },
      { name: "REST API Integration", level: 90 },
      { name: "SQL / MongoDB", level: 72 },
      { name: "Spring Boot (basics)", level: 65 },
    ],
  },
  {
    title: "DevOps & Testing",
    icon: "🛠️",
    skills: [
      { name: "Jest / React Testing Library", level: 88 },
      { name: "Git / GitHub", level: 92 },
      { name: "Docker / Jenkins / CI-CD", level: 75 },
      { name: "SonarQube / Mocha", level: 78 },
    ],
  },
  {
    title: "AI-Powered Development",
    icon: "🤖",
    skills: [
      { name: "GitHub Copilot", level: 92 },
      { name: "Cursor AI", level: 90 },
      { name: "Prompt Engineering", level: 88 },
      { name: "MCP Server (UI Dev)", level: 82 },
    ],
  },
];

const TECH_BADGES = [
  { name: "React", color: "#61DAFB", symbol: "⚛" },
  { name: "TypeScript", color: "#3178C6", symbol: "TS" },
  { name: "JavaScript", color: "#F7DF1E", symbol: "JS" },
  { name: "Redux", color: "#764ABC", symbol: "⬡" },
  { name: "React Query", color: "#FF4154", symbol: "RQ" },
  { name: "Tailwind", color: "#06B6D4", symbol: "🌊" },
  { name: "GraphQL", color: "#E535AB", symbol: "◈" },
  { name: "Git", color: "#F05032", symbol: "⎇" },
  { name: "Jest", color: "#C21325", symbol: "🧪" },
  { name: "Docker", color: "#2496ED", symbol: "🐳" },
  { name: "Webpack/Vite", color: "#646CFF", symbol: "⚡" },
  { name: "Nx Monorepo", color: "#143055", symbol: "NX" },
  { name: "GitHub Copilot", color: "#238636", symbol: "🤖" },
  { name: "Cursor AI", color: "#7C3AED", symbol: "AI" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("visible");
          barsRef.current.forEach((bar, i) => {
            if (bar) {
              setTimeout(() => {
                bar.style.width = (bar.dataset.level ?? "0") + "%";
              }, i * 80);
            }
          });
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  let barIdx = 0;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical toolkit built over 3.7 years at Cognizant
        </p>

        <div className="skills-wrapper" ref={sectionRef}>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
                <div className="skill-list">
                  {cat.skills.map((skill) => {
                    const idx = barIdx++;
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-meta">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-pct">{skill.level}%</span>
                        </div>
                        <div className="skill-bar-bg">
                          <div
                            className="skill-bar-fill"
                            data-level={skill.level}
                            ref={(el) => {
                              barsRef.current[idx] = el;
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-cloud">
            <h3 className="tech-cloud-title">Technologies I Work With</h3>
            <div className="tech-icons">
              {TECH_BADGES.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-badge"
                  style={{ "--tech-color": tech.color } as React.CSSProperties}
                >
                  <span className="tech-symbol">{tech.symbol}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
