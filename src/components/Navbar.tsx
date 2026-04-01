import { useState, useEffect } from "react";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<NavLink>("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: NavLink) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

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
      </div>
    </nav>
  );
}
