"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  contact,
  hasValidLinkedIn,
  hasValue,
  navLinks,
} from "../data/portfolio";

function PrimaryCta({ className, onClick }: { className?: string; onClick?: () => void }) {
  if (hasValue(contact.calendarUrl)) {
    return (
      <a
        className={className}
        href={contact.calendarUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        Book 20 minutes <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <a
      className={className}
      href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
      onClick={onClick}
    >
      Email Rishin <span aria-hidden="true">↗</span>
    </a>
  );
}

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
        <Link className="brand" href="/" aria-label="Rishin S Pradeep, home">
          {hasValue(contact.photo) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="brand-photo" src={contact.photo} alt="" width={40} height={40} />
          ) : (
            <span className="brand-mark">RS</span>
          )}
          <span>
            Rishin S Pradeep
            <small>Senior Data Architect</small>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ),
          )}
          <PrimaryCta className="nav-cta magnetic" />
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
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ),
          )}
          {hasValidLinkedIn(contact.linkedin) ? (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn ↗
            </a>
          ) : null}
          {hasValue(contact.github) ? (
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub ↗
            </a>
          ) : null}
          <PrimaryCta onClick={() => setMenuOpen(false)} />
        </nav>
      </div>
    </>
  );
}
