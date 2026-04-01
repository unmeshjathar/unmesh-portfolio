import { useState, useEffect, useRef } from "react";
import "./Navbar.scss";

const LINKS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
] as const;
type NavLink = (typeof LINKS)[number];

type Theme = "default" | "saas" | "glass" | "sunset" | "ocean" | "forest" | "cyberpunk";

const THEMES: { id: Theme; label: string; dot: string }[] = [
  { id: "default",   label: "Default",   dot: "#6366f1" },
  { id: "saas",      label: "SaaS",      dot: "#0070f3" },
  { id: "glass",     label: "Glass",     dot: "#a78bfa" },
  { id: "sunset",    label: "Sunset",    dot: "#f97316" },
  { id: "ocean",     label: "Ocean",     dot: "#06b6d4" },
  { id: "forest",    label: "Forest",    dot: "#22c55e" },
  { id: "cyberpunk", label: "Cyberpunk", dot: "#f0e040" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<NavLink>("Home");
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.getAttribute("data-theme") as Theme) || "default",
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    setPickerOpen(false);
    if (t === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const scrollTo = (id: NavLink) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const currentTheme = THEMES.find((t) => t.id === theme)!;

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => scrollTo("Home")}>
          <span className="bracket">&lt;</span>
          <span>UJ</span>
          <span className="bracket">/&gt;</span>
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav-link${active === link ? " active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              className="btn btn-primary nav-cta"
              onClick={() => scrollTo("Contact")}
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Theme picker */}
        <div className="theme-picker-wrap" ref={pickerRef}>
          <button
            className="theme-toggle"
            onClick={() => setPickerOpen((v) => !v)}
            aria-label="Switch theme"
            title="Change theme"
          >
            <span className="theme-dot" style={{ background: currentTheme.dot }} />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {pickerOpen && (
            <div className="theme-dropdown">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`theme-option${theme === t.id ? " active" : ""}`}
                  onClick={() => applyTheme(t.id)}
                >
                  <span className="theme-dot" style={{ background: t.dot }} />
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
