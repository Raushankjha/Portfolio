import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Brand from "./Brand";

const navigationLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 20);
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("keydown", closeMenuOnEscape);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const themeAction = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className="desktop-nav">
          {navigationLinks.map(({ label, id }, index) => (
            <a key={id} href={`#${id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </a>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-pressed={theme === "dark"}
          aria-label={themeAction}
          title={themeAction}
        >
          <Sun size={16} aria-hidden="true" />
          <Moon size={16} aria-hidden="true" />
        </button>
        <a className="nav-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {menuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
