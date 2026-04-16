"use client"

import Link from "next/link"
import { useState } from "react"

type GameCategory = "Stratégiai" | "Kooperatív" | "Kártyajáték" | "Családi" | "Oktató" | "Szerepjáték"

interface Game {
  title: string
  category: GameCategory
  players: string
  duration: string
  description: string
  difficulty: "Könnyű" | "Közepes" | "Nehéz"
}

const games: Game[] = [
  {
    title: "Hatalmi Szövetségek",
    category: "Stratégiai",
    players: "2–4 fő",
    duration: "90–120 perc",
    description:
      "Középkori Közép-Európában játszódó területszerző stratégiai játék. Szövetségek, árulások és diplomáciai manőverek formálják a birodalmak sorsát.",
    difficulty: "Nehéz",
  },
  {
    title: "Pannon Kereskedők",
    category: "Stratégiai",
    players: "2–5 fő",
    duration: "60–90 perc",
    description:
      "A Kárpát-medence kereskedelmi útvonalain navigálsz, erőforrásokat gyűjtesz és városokat fejlesztesz ebben a gazdag eurogame-élményben.",
    difficulty: "Közepes",
  },
  {
    title: "Dunai Rejtély",
    category: "Kooperatív",
    players: "1–4 fő",
    duration: "45–75 perc",
    description:
      "Csapatban kell feltárnotok egy folyóparti titok szálait, mielőtt az idő lejár. Minden döntés számít, egyetlen megoldás van.",
    difficulty: "Közepes",
  },
  {
    title: "Ulti Mestere",
    category: "Kártyajáték",
    players: "3 fő",
    duration: "30–60 perc",
    description:
      "A klasszikus magyar ulti modern, versenyszerű átdolgozása. A hagyományos ütős lapjáték taktikai mélységgel és friss szabályrendszerrel.",
    difficulty: "Közepes",
  },
  {
    title: "Kis Felfedezők",
    category: "Családi",
    players: "2–6 fő",
    duration: "20–40 perc",
    description:
      "Mesés illusztrációkkal és egyszerű szabályokkal, ideális bevezetés a társasjátékok világába gyerekek és szülők számára egyaránt.",
    difficulty: "Könnyű",
  },
  {
    title: "Természet Tanítója",
    category: "Oktató",
    players: "2–4 fő",
    duration: "45–60 perc",
    description:
      "A Kárpát-medence természetvilágán keresztül ismerheted meg az ökoszisztémák működését, növény- és állatfajokat, szórakoztató vetélkedő formájában.",
    difficulty: "Könnyű",
  },
  {
    title: "Krónikások Rendje",
    category: "Szerepjáték",
    players: "3–6 fő",
    duration: "120–180 perc",
    description:
      "Historikus narratív szerepjáték, ahol a játékosok középkori krónikások és kutatók bőrébe bújva tárják fel egy elveszett kézirat titkait.",
    difficulty: "Nehéz",
  },
  {
    title: "Falugyűlés",
    category: "Kooperatív",
    players: "4–8 fő",
    duration: "30–50 perc",
    description:
      "Szociális dedukciós játék, ahol a falvat fenyegető veszélyt kell azonosítani és kiszavazni. Tárgyalás, meggyőzés, logika.",
    difficulty: "Könnyű",
  },
]

const allCategories: GameCategory[] = ["Stratégiai", "Kooperatív", "Kártyajáték", "Családi", "Oktató", "Szerepjáték"]

const difficultyColor: Record<Game["difficulty"], string> = {
  Könnyű: "text-[var(--forest)] bg-[var(--forest)]/10",
  Közepes: "text-[var(--amber)] bg-[var(--amber)]/10",
  Nehéz: "text-red-700 bg-red-50",
}

export default function GamesSection() {
  const [activeCategory, setActiveCategory] = useState<GameCategory | "Összes">("Összes")

  const filtered =
    activeCategory === "Összes" ? games : games.filter((g) => g.category === activeCategory)

  return (
    <section id="jatekok" className="py-28 bg-[var(--parchment)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-8 h-px bg-[var(--amber)]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
            Játékok és típusaik
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight text-balance max-w-xl">
            Melyik asztal vár rád?
          </h2>
          <Link
            href="/jateklista"
            className="font-sans text-sm px-6 py-3 border border-[var(--forest)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-[var(--paper)] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Teljes játéklista
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["Összes", ...allCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[var(--forest)] border-[var(--forest)] text-[var(--paper)]"
                  : "bg-transparent border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--forest)] hover:text-[var(--forest)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Games list */}
        <div className="flex flex-col gap-0 divide-y divide-[var(--border)]">
          {filtered.map((game, i) => (
            <div
              key={game.title}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-6 hover:bg-[var(--paper)] px-4 transition-colors duration-200"
            >
              {/* Number */}
              <span className="font-serif text-2xl font-bold text-[var(--border)] group-hover:text-[var(--amber)] transition-colors duration-200 min-w-[2.5rem] leading-none mt-1 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)] leading-snug">
                    {game.title}
                  </h3>
                  <span
                    className={`font-sans text-xs px-2.5 py-0.5 rounded-full ${difficultyColor[game.difficulty]}`}
                  >
                    {game.difficulty}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
                  {game.description}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:text-right shrink-0 md:min-w-[140px]">
                <div>
                  <p className="font-sans text-xs text-[var(--muted-foreground)]/60 uppercase tracking-wide">Kategória</p>
                  <p className="font-sans text-xs font-medium text-[var(--forest)]">{game.category}</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-[var(--muted-foreground)]/60 uppercase tracking-wide">Játékosok</p>
                  <p className="font-sans text-xs text-[var(--ink)]">{game.players}</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-[var(--muted-foreground)]/60 uppercase tracking-wide">Idő</p>
                  <p className="font-sans text-xs text-[var(--ink)]">{game.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex items-center justify-between">
          <p className="font-sans text-sm text-[var(--muted-foreground)]">
            {filtered.length} játék megjelenítve
          </p>
          <Link
            href="/jateklista"
            className="font-sans text-sm text-[var(--forest)] hover:text-[var(--amber)] transition-colors flex items-center gap-2"
          >
            Összes játék megtekintése
            <span className="text-base leading-none">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
