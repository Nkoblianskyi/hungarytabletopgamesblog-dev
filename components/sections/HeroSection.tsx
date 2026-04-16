import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-board-games.jpg"
          alt="Társasjátékok asztali elrendezése"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay - layered for depth */}
        <div className="absolute inset-0 bg-[var(--ink)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
        {/* Editorial label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-12 h-px bg-[var(--amber)]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
            Magyar Társasjáték Kultúra
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--paper)] leading-[0.95] text-balance max-w-3xl mb-8">
          Ahol a Tábla
          <br />
          <span className="italic text-[var(--amber)]">Mesél.</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-base md:text-lg text-[var(--paper)]/70 leading-relaxed max-w-xl mb-12">
          Merülj el a társasjátékok sokoldalú világában. Stratégiák, hagyományok, közösségek és
          játékélmények, amelyek összekapcsolnak mindenkit az asztalnál.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#bevezetes"
            className="font-sans text-sm tracking-wide px-8 py-4 bg-[var(--amber)] text-[var(--ink)] font-medium hover:bg-[var(--paper)] transition-colors duration-200"
          >
            Fedezd fel
          </Link>
          <Link
            href="/jateklista"
            className="font-sans text-sm tracking-wide px-8 py-4 border border-[var(--paper)]/50 text-[var(--paper)] hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors duration-200"
          >
            Játéklista
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--paper)]/40">
          Görgets le
        </span>
        <div className="w-px h-8 bg-[var(--paper)]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-[var(--amber)] h-1/2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
