"use client";

import { useEffect, useState } from "react";
import { contact, navLinks } from "../data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header shell ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Rishin S Pradeep, home">
          <span className="brand-mark">RS</span>
          <span>
            Rishin S Pradeep
            <small>Senior Data Architect</small>
          </span>
        </a>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-cta magnetic"
            href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
          >
            Book a call <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation ↗
          </a>
        </nav>
      </div>
    </>
  );
}
