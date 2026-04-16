"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Link from "next/link"
import { useState } from "react"

type GameCategory = "Stratégiai" | "Kooperatív" | "Kártyajáték" | "Családi" | "Oktató" | "Szerepjáték" | "Parti" | "Absztrakt"

interface Game {
  title: string
  category: GameCategory
  players: string
  duration: string
  description: string
  difficulty: "Könnyű" | "Közepes" | "Nehéz"
}

const fullGamesList: Game[] = [
  {
    title: "Hatalmi Szövetségek",
    category: "Stratégiai",
    players: "2–4 fő",
    duration: "90–120 perc",
    description: "Középkori Közép-Európában játszódó területszerző stratégiai játék. Szövetségek, árulások és diplomáciai manőverek formálják a birodalmak sorsát.",
    difficulty: "Nehéz",
  },
  {
    title: "Pannon Kereskedők",
    category: "Stratégiai",
    players: "2–5 fő",
    duration: "60–90 perc",
    description: "A Kárpát-medence kereskedelmi útvonalain navigálsz, erőforrásokat gyűjtesz és városokat fejlesztesz ebben a gazdag eurogame-élményben.",
    difficulty: "Közepes",
  },
  {
    title: "Dunai Rejtély",
    category: "Kooperatív",
    players: "1–4 fő",
    duration: "45–75 perc",
    description: "Csapatban kell feltárnotok egy folyóparti titok szálait, mielőtt az idő lejár. Minden döntés számít, egyetlen megoldás van.",
    difficulty: "Közepes",
  },
  {
    title: "Ulti Mestere",
    category: "Kártyajáték",
    players: "3 fő",
    duration: "30–60 perc",
    description: "A klasszikus magyar ulti modern, versenyszerű átdolgozása. A hagyományos ütős lapjáték taktikai mélységgel és friss szabályrendszerrel.",
    difficulty: "Közepes",
  },
  {
    title: "Kis Felfedezők",
    category: "Családi",
    players: "2–6 fő",
    duration: "20–40 perc",
    description: "Mesés illusztrációkkal és egyszerű szabályokkal, ideális bevezetés a társasjátékok világába gyerekek és szülők számára egyaránt.",
    difficulty: "Könnyű",
  },
  {
    title: "Természet Tanítója",
    category: "Oktató",
    players: "2–4 fő",
    duration: "45–60 perc",
    description: "A Kárpát-medence természetvilágán keresztül ismerheted meg az ökoszisztémák működését, növény- és állatfajokat, szórakoztató vetélkedő formájában.",
    difficulty: "Könnyű",
  },
  {
    title: "Krónikások Rendje",
    category: "Szerepjáték",
    players: "3–6 fő",
    duration: "120–180 perc",
    description: "Historikus narratív szerepjáték, ahol a játékosok középkori krónikások és kutatók bőrébe bújva tárják fel egy elveszett kézirat titkait.",
    difficulty: "Nehéz",
  },
  {
    title: "Falugyűlés",
    category: "Kooperatív",
    players: "4–8 fő",
    duration: "30–50 perc",
    description: "Szociális dedukciós játék, ahol a falvat fenyegető veszélyt kell azonosítani és kiszavazni. Tárgyalás, meggyőzés, logika.",
    difficulty: "Könnyű",
  },
  {
    title: "Erdélyi Legendák",
    category: "Szerepjáték",
    players: "2–5 fő",
    duration: "90–150 perc",
    description: "Kalandozz a középkori Erdély hegyei között, ahol a mitológia és a valóság összeolvad. Karakterfejlesztés, epikus küldetések.",
    difficulty: "Nehéz",
  },
  {
    title: "Gyorskártyák",
    category: "Kártyajáték",
    players: "2–8 fő",
    duration: "15–25 perc",
    description: "Gyors tempójú kártyalerakós játék, ahol a reflexek és a kombinációs készség versenyez. Tökéletes társasági gyorsforduló.",
    difficulty: "Könnyű",
  },
  {
    title: "Várépítők Gildája",
    category: "Stratégiai",
    players: "2–4 fő",
    duration: "60–90 perc",
    description: "Dolgozóelhelyezős mechanika, amelyben középkori várakat építesz, munkásokat irányítasz és befolyásodat növeled. Mély, áttekinthető eurogame.",
    difficulty: "Közepes",
  },
  {
    title: "Logikai Vár",
    category: "Oktató",
    players: "1–2 fő",
    duration: "20–40 perc",
    description: "Logikai feladványok sorozata, amelyben puzzle-elemeket kell elrendezni, hogy kijutsál a várból. Gyerekeknek és felnőtteknek is kihívás.",
    difficulty: "Közepes",
  },
  {
    title: "Hídverők",
    category: "Absztrakt",
    players: "2 fő",
    duration: "30–50 perc",
    description: "Kétjátékos absztrakt stratégia, amelyben hidakat építesz és uralod a folyó két partját. Elegáns, mély gondolkodást igényel.",
    difficulty: "Közepes",
  },
  {
    title: "Éjszakai Kaland",
    category: "Kooperatív",
    players: "2–5 fő",
    duration: "45–70 perc",
    description: "Egy sötét kastélyban kell felfedezni a rejtélyeket, miközben az idő kérlelhetetlenül fogy. Együttműködés és logika szükséges.",
    difficulty: "Közepes",
  },
  {
    title: "Szavak Harca",
    category: "Parti",
    players: "4–12 fő",
    duration: "20–40 perc",
    description: "Könnyed szóasszociációs verseny, ahol a csapatok egymással versenyeznek a legjobb tippekért. Hangos, vicces, pörgős.",
    difficulty: "Könnyű",
  },
  {
    title: "Hajósok Tengere",
    category: "Családi",
    players: "2–4 fő",
    duration: "40–60 perc",
    description: "Fedezd fel a tengert, gyűjts kincseket és kerüld el a veszélyeket ebben a kalandos családi játékban. Szerencse és stratégia keveréke.",
    difficulty: "Könnyű",
  },
  {
    title: "Mítoszok és Mondák",
    category: "Parti",
    players: "3–8 fő",
    duration: "30–50 perc",
    description: "Mesélj történeteket, találj ki legendákat, szavazz a legjobbra. Kreativitás és humor találkozik ebben a narratív parti játékban.",
    difficulty: "Könnyű",
  },
  {
    title: "Geometria Mestere",
    category: "Absztrakt",
    players: "2–3 fő",
    duration: "25–45 perc",
    description: "Formákat rakosgatva próbálsz területeket uralma alatt tartani. Vizuális érzék és tervezés a győzelem kulcsa.",
    difficulty: "Közepes",
  },
]

const allCategories: GameCategory[] = ["Stratégiai", "Kooperatív", "Kártyajáték", "Családi", "Oktató", "Szerepjáték", "Parti", "Absztrakt"]

const difficultyColor: Record<Game["difficulty"], string> = {
  Könnyű: "text-[var(--forest)] bg-[var(--forest)]/10",
  Közepes: "text-[var(--amber)] bg-[var(--amber)]/10",
  Nehéz: "text-red-700 bg-red-50",
}

export default function GameListPage() {
  const [activeCategory, setActiveCategory] = useState<GameCategory | "Összes">("Összes")
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = fullGamesList.filter((game) => {
    const matchesCategory = activeCategory === "Összes" || game.category === activeCategory
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="bg-[var(--paper)] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs text-[var(--muted-foreground)]">
            <Link href="/" className="hover:text-[var(--forest)] transition-colors">
              Főoldal
            </Link>
            <span>/</span>
            <span>Játéklista</span>
          </div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[var(--amber)]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
              Teljes gyűjtemény
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--ink)] leading-tight text-balance mb-6">
            Játéklista
          </h1>
          <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)] max-w-2xl mb-12">
            Böngéssz a teljes gyűjteményben, szűrj kategória szerint, vagy keress rá kedvenc játékodra. Minden
            játékhoz megtalálod a részleteket, nehézségi szintet és játékidőt.
          </p>

          {/* Search + filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Keresés a játékok között..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-5 py-3 border border-[var(--border)] bg-[var(--parchment)] text-[var(--ink)] placeholder:text-[var(--muted-foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--forest)] font-sans text-sm"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Results count */}
          <p className="font-sans text-sm text-[var(--muted-foreground)] mb-6">
            {filtered.length} játék megjelenítve
          </p>

          {/* Games list */}
          <div className="flex flex-col gap-0 divide-y divide-[var(--border)]">
            {filtered.length > 0 ? (
              filtered.map((game, i) => (
                <div
                  key={game.title}
                  className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-6 hover:bg-[var(--parchment)] px-4 transition-colors duration-200"
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
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="font-sans text-base text-[var(--muted-foreground)]">
                  Nem található játék a megadott keresési feltételekkel.
                </p>
              </div>
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-[var(--border)]">
            <Link
              href="/"
              className="font-sans text-sm text-[var(--forest)] hover:text-[var(--amber)] transition-colors flex items-center gap-2"
            >
              <span className="text-base leading-none rotate-180">&#8594;</span>
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
