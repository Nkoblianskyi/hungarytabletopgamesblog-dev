"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/#bevezetes", label: "Bevezetés" },
  { href: "/#jatekok", label: "Játékok" },
  { href: "/#hagyomanyok", label: "Hagyományok" },
  { href: "/jateklista", label: "Teljes lista" },
  { href: "/rolunk", label: "Rólunk" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--paper)] border-b border-[var(--ink)]/10"
          : "bg-transparent"
      }`}
    >
          {/* Top bar - newspaper masthead style */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-0 overflow-hidden h-0 opacity-0" : "py-2 opacity-100"
        } border-b border-[var(--paper)]/20 px-6 md:px-10`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--paper)]/50">
            Magyarország
          </span>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--paper)]/50">
            hungarytabletopgamesblog.com
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className={`px-6 md:px-10 transition-all duration-500 ${scrolled ? "py-4" : "py-5"}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-8">
          {/* Wordmark */}
          <Link href="/" className="group shrink-0 min-w-0">
            <div className="flex flex-col leading-none gap-[3px]">
              <span className={`font-sans text-[9px] tracking-[0.25em] uppercase font-medium transition-colors duration-500 ${scrolled ? "text-[var(--ink)]/40" : "text-[var(--paper)]/40"}`}>
                Hungary
              </span>
              <div className="flex items-baseline gap-1">
                <span className={`font-serif font-bold text-[1.05rem] tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-[var(--ink)]" : "text-[var(--paper)]"}`}>
                  Tabletop
                </span>
                <span className={`font-serif italic text-[1.05rem] tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-[var(--forest)]" : "text-[var(--amber)]"}`}>
                  Games
                </span>
                <span className={`font-serif font-bold text-[1.05rem] tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-[var(--ink)]/50" : "text-[var(--paper)]/50"}`}>
                  Blog
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav - right-aligned, small caps */}
          <nav className="hidden md:flex items-baseline gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-[var(--ink)]/60 hover:text-[var(--ink)]"
                    : "text-[var(--paper)]/60 hover:text-[var(--paper)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                scrolled ? "bg-[var(--ink)]" : "bg-[var(--paper)]"
              } ${open ? "rotate-45 translate-y-[7px] w-6" : "w-6"}`}
            />
            <span
              className={`block h-px w-4 transition-all duration-300 ${
                scrolled ? "bg-[var(--ink)]" : "bg-[var(--paper)]"
              } ${open ? "opacity-0 w-0" : ""}`}
            />
            <span
              className={`block h-px transition-all duration-300 origin-center ${
                scrolled ? "bg-[var(--ink)]" : "bg-[var(--paper)]"
              } ${open ? "-rotate-45 -translate-y-[7px] w-6" : "w-5"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[var(--ink)] transition-all duration-500 flex flex-col ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-8 pt-24 pb-12 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-5xl font-bold text-[var(--paper)] hover:text-[var(--amber)] transition-colors py-2 border-b border-[var(--paper)]/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto px-8 pb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-[var(--paper)]/30">
            hungarytabletopgamesblog.com
          </p>

        </div>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 font-sans text-xs tracking-widest uppercase text-[var(--paper)]/50 hover:text-[var(--amber)] transition-colors"
        >
          bezár
        </button>
      </div>
    </header>
  )
}
