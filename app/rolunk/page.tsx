"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
    feedback: false,
    partnership: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormState((prev) => ({ ...prev, [target.name]: target.checked }))
    } else {
      setFormState((prev) => ({ ...prev, [target.name]: target.value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setError("Kérjük, töltsd ki az összes kötelező mezőt.")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="bg-[var(--paper)] pt-32 pb-20">
        {/* About hero */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[var(--amber)]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
              Rólunk
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--ink)] leading-tight text-balance mb-8">
                Kik vagyunk mi?
              </h1>
              <div className="flex flex-col gap-5">
                <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)]">
                  A <strong className="text-[var(--ink)]">hungarytabletopgamesblog.com</strong> egy független magyar társasjáték-kultúra blog, amelyet a játékok iránt szenvedélyesen lelkesedő írók csapata üzemeltet.
                  Célunk, hogy megmutassuk: a társasjátékok Magyarországon nem csupán gyerekkori emlékek, hanem élő, pezsgő kultúra.
                </p>
                <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)]">
                  Nem ismertetünk konkrét márkaneveket és nem vállalunk fizetett reklámmegjelenéseket.
                  Mindent, amit itt olvashatsz, az objektív tapasztalat és a játékkultúra iránti szeretet vezérel.
                </p>
                <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)]">
                  Szerkesztőségi alapelveink: hitelességre és sokszínűségre törekszünk. Bemutatjuk a hagyományos népi játékokat és a kortárs stratégiai remekeket egyaránt.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Hitelességre törekszünk",
                  text: "Minden leírt tapasztalat valós játékokon alapul. Nem fogadunk el fizetett hirdetéseket.",
                },
                {
                  title: "Közösséget építünk",
                  text: "A blog célja, hogy összehozza azokat, akik hisznek az asztali játék erejében.",
                },
                {
                  title: "Magyar kultúrát képviselünk",
                  text: "Külön figyelmet fordítunk a hazai hagyományokra, történelemre és helyi közösségekre.",
                },
                {
                  title: "Mindenki számára írunk",
                  text: "Kezdőknek, veteránoknak és kíváncsi érdeklődőknek egyaránt szól minden tartalmunk.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-[var(--parchment)] px-6 py-5 border-l-2 border-[var(--amber)]">
                  <h3 className="font-serif text-base font-bold text-[var(--ink)] mb-1">{v.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-[var(--parchment)] py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-[var(--amber)]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
                Kapcsolat
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-[var(--ink)] mb-3 text-balance">
              Írj nekünk
            </h2>
            <p className="font-sans text-sm text-[var(--muted-foreground)] mb-10 leading-relaxed">
              Kérdésed, véleményed vagy javaslatod van? Szívesen halljuk. Válaszolunk minden megkeresésre.
              <br />
              <a
                href="mailto:info@hungarytabletopgamesblog.com"
                className="text-[var(--forest)] hover:text-[var(--amber)] transition-colors"
              >
                info@hungarytabletopgamesblog.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs tracking-wide uppercase text-[var(--muted-foreground)]">
                    Teljes neved <span className="text-[var(--amber)]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] font-sans text-sm"
                    placeholder="pl. Kiss János"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs tracking-wide uppercase text-[var(--muted-foreground)]">
                    E-mail-cím <span className="text-[var(--amber)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] font-sans text-sm"
                    placeholder="pl. pelda@email.hu"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-xs tracking-wide uppercase text-[var(--muted-foreground)]">
                  Üzeneted <span className="text-[var(--amber)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="px-4 py-3 border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] font-sans text-sm resize-none"
                  placeholder="Írd ide üzeneted..."
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 pt-2">
                <p className="font-sans text-xs tracking-wide uppercase text-[var(--muted-foreground)] mb-1">
                  Érdeklődés tárgya
                </p>
                {[
                  { name: "newsletter", label: "Feliratkozok a hírlevélre" },
                  { name: "feedback", label: "Visszajelzést szeretnék adni a blogról" },
                  { name: "partnership", label: "Tartalmi együttműködés lehetősége érdekel" },
                ].map((cb) => (
                  <label key={cb.name} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name={cb.name}
                      checked={formState[cb.name as keyof typeof formState] as boolean}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 accent-[var(--forest)] cursor-pointer"
                    />
                    <span className="font-sans text-sm text-[var(--muted-foreground)] group-hover:text-[var(--ink)] transition-colors leading-relaxed">
                      {cb.label}
                    </span>
                  </label>
                ))}
              </div>

              {error && (
                <p className="font-sans text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                className="font-sans text-sm tracking-wide px-8 py-4 bg-[var(--forest)] text-[var(--paper)] hover:bg-[var(--ink)] transition-colors duration-200 self-start"
              >
                Üzenet elküldése
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Submission success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink)]/60 backdrop-blur-sm"
          onClick={() => setSubmitted(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sikeres küldés visszajelzés"
        >
          <div
            className="bg-[var(--paper)] max-w-sm w-full mx-4 p-10 text-center flex flex-col items-center gap-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full border-2 border-[var(--forest)] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--forest)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
              Köszönjük!
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
              Üzeneted megkaptuk. Hamarosan visszaírunk az e-mail-cíomedre.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-sans text-sm px-6 py-3 bg-[var(--forest)] text-[var(--paper)] hover:bg-[var(--ink)] transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
