import Link from "next/link"

const currentYear = new Date().getFullYear()

const pageLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/#bevezetes", label: "Bevezetés" },
  { href: "/#jatekok", label: "Játékok" },
  { href: "/#hagyomanyok", label: "Hagyományok" },
  { href: "/jateklista", label: "Teljes játéklista" },
  { href: "/rolunk", label: "Rólunk" },
]

const legalLinks = [
  { href: "/sutik", label: "Sütikezelési tájékoztató" },
  { href: "/adatvedelem", label: "Adatvédelmi tájékoztató" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">


      {/* Main footer body */}
      <div className="px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto">

        {/* Top: large wordmark + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 pb-16 border-b border-[var(--paper)]/8">

          {/* Large wordmark */}
          <div className="lg:col-span-5">
            <div className="flex flex-col leading-none tracking-tight gap-2">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[var(--paper)]/30 font-medium">
                Hungary
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0">
                <span
                  className="font-serif font-bold text-[var(--paper)] leading-none"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,3.6rem)" }}
                >
                  Tabletop
                </span>
                <span
                  className="font-serif italic text-[var(--amber)] leading-none"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,3.6rem)" }}
                >
                  Games
                </span>
                <span
                  className="font-serif font-bold text-[var(--paper)]/35 leading-none"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,3.6rem)" }}
                >
                  Blog
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-[var(--paper)]/35 leading-relaxed max-w-xs mt-6">
              Fedezd fel a társasjátékok gazdag világát, a hagyományos magyar játékoktól a kortárs stratégiai remekekig.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[var(--paper)]/25 mb-5">
              Oldalak
            </p>
            <nav className="flex flex-col gap-2.5">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-[var(--paper)]/50 hover:text-[var(--paper)] transition-colors leading-none py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal + contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[var(--paper)]/25 mb-5">
              Jogi
            </p>
            <nav className="flex flex-col gap-2.5 mb-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-[var(--paper)]/50 hover:text-[var(--paper)] transition-colors leading-none py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[var(--paper)]/25 mb-3">
              Kapcsolat
            </p>
            <a
              href="mailto:info@hungarytabletopgamesblog.com"
              className="font-sans text-xs text-[var(--paper)]/50 hover:text-[var(--amber)] transition-colors break-all leading-relaxed"
            >
              info@hungarytabletopgamesblog.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-sans text-[10px] tracking-widest text-[var(--paper)]/20">
            &copy; {currentYear} hungarytabletopgamesblog.com &nbsp;·&nbsp; Minden jog fenntartva.
          </p>
          <p className="font-sans text-[10px] tracking-widest text-[var(--paper)]/15">
            Magyarország
          </p>
        </div>
      </div>
    </footer>
  )
}
