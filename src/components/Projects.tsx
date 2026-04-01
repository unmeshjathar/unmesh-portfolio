import { useState, useEffect, useRef } from "react";
import "./Projects.scss";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  featured: boolean;
  color: string;
  emoji: string;
  client?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Verizon E-Commerce",
    description:
      'Built mini-cart and "Save for Later" features. Integrated APIs and fixed key UI bugs for e-commerce flows. Added unit tests and resolved SonarQube code-quality issues.',
    tags: ["React", "TypeScript", "Jest", "REST API", "SonarQube"],
    category: "E-Commerce",
    client: "Verizon",
    github: "#",
    demo: "#",
    featured: true,
    color: "#cd040b",
    emoji: "📱",
  },
  {
    title: "ACT – MyACT App",
    description:
      "Developed the MyACT application with front-end coding, UI design, and fixed critical production bugs for score submission in the data dashboard. Increased test coverage from 25% to 90%.",
    tags: [
      "React",
      "TypeScript",
      "Jest",
      "Mocha",
      "Webpack",
      "Figma",
      "GitHub Copilot",
    ],
    category: "EdTech",
    client: "ACT",
    github: "#",
    demo: "#",
    featured: true,
    color: "#0066cc",
    emoji: "🎓",
  },
  {
    title: "DirecTV Full-Stack App",
    description:
      "Worked as a full-stack developer implementing features with React.js and Spring Boot. Debugged UI and backend issues and delivered an Application Handbook for team knowledge sharing.",
    tags: ["React", "Spring Boot", "REST API", "TypeScript"],
    category: "Media",
    client: "DirecTV",
    github: "#",
    demo: "#",
    featured: true,
    color: "#0066ff",
    emoji: "📺",
  },
  {
    title: "PayPal Merchant App",
    description:
      "Worked on the PayPal Merchant Application — fixed UI bugs, ensured cross-browser compatibility, enhanced responsive design, and optimized front-end performance following application security standards.",
    tags: ["React", "JavaScript", "CSS3", "Agile", "Performance"],
    category: "FinTech",
    client: "PayPal",
    github: "#",
    demo: "#",
    featured: true,
    color: "#003087",
    emoji: "💳",
  },
  {
    title: "Micro-Frontend Architecture",
    description:
      "Worked on Nx Monorepo with Module Federation to support micro-frontend architecture. Built scalable features using React Query and modern UI patterns for enterprise-grade applications.",
    tags: ["Nx Monorepo", "Module Federation", "React Query", "TypeScript"],
    category: "Architecture",
    github: "#",
    demo: "#",
    featured: false,
    color: "#143055",
    emoji: "🏗️",
  },
  {
    title: "Hospital IT Systems",
    description:
      "Led tech initiatives at Sadguru Moredada Charitable Hospital as Outstanding Tech Team Leader, resolving critical issues in systems serving 100,000+ users.",
    tags: ["React", "JavaScript", "System Debugging", "Leadership"],
    category: "Healthcare",
    github: "#",
    demo: "#",
    featured: false,
    color: "#10b981",
    emoji: "🏥",
  },
];

const CATEGORIES = [
  "All",
  "E-Commerce",
  "EdTech",
  "Media",
  "FinTech",
  "Architecture",
  "Healthcare",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          filtered.forEach((_, i) => {
            setTimeout(() => setVisible((prev) => [...prev, i]), i * 100);
          });
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setVisible([]);
    filtered.forEach((_, i) => {
      setTimeout(() => setVisible((prev) => [...prev, i]), i * 80);
    });
  }, [filter]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Project Experience</h2>
        <p className="section-subtitle">
          Enterprise projects delivered at Cognizant for global clients
        </p>

        <div className="filter-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid" ref={sectionRef}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`project-card${project.featured ? " featured" : ""}${visible.includes(i) ? " visible" : ""}`}
              style={{ "--card-color": project.color } as React.CSSProperties}
            >
              <div className="project-header">
                <div className="project-emoji">{project.emoji}</div>
                <div className="project-links">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                      aria-label="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="17"
                        height="17"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                  {project.client && (
                    <span className="client-badge">🏢 {project.client}</span>
                  )}
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
