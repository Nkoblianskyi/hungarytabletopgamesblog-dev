"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Sütik kezelése"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--ink)] text-[var(--paper)] border-t-2 border-[var(--amber)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        {/* Text */}
        <div className="flex-1">
          <p className="font-sans text-sm leading-relaxed text-[var(--paper)]/80 max-w-2xl">
            Ez az oldal sütiket (cookie) használ a jobb felhasználói élmény biztosítása érdekében.
            A sütik elfogadásával hozzájárulsz azok elhelyezéséhez. Bővebb tájékoztatásért olvasd el{" "}
            <Link
              href="/sutik"
              className="text-[var(--amber)] hover:underline underline-offset-2"
            >
              Sütikezelési tájékoztatónkat
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs tracking-wide px-5 py-2.5 border border-[var(--paper)]/20 text-[var(--paper)]/60 hover:text-[var(--paper)] hover:border-[var(--paper)]/40 transition-colors"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs tracking-wide px-5 py-2.5 bg-[var(--amber)] text-[var(--ink)] hover:bg-[var(--paper)] transition-colors font-medium"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
