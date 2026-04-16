import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Link from "next/link"

function getUpdateDate() {
  const now = new Date()
  return now.toLocaleDateString("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function CookiePolicyPage() {
  const updateDate = getUpdateDate()

  return (
    <>
      <Header />
      <main className="bg-[var(--paper)] pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs text-[var(--muted-foreground)]">
            <Link href="/" className="hover:text-[var(--forest)] transition-colors">
              Főoldal
            </Link>
            <span>/</span>
            <span>Sütikezelési tájékoztató</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[var(--amber)]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
              Jogi tájékoztató
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight mb-4 text-balance">
            Sütikezelési tájékoztató
          </h1>
          <p className="font-sans text-xs text-[var(--muted-foreground)] mb-12">
            Utoljára frissítve: <time dateTime={new Date().toISOString().split("T")[0]}>{updateDate}</time>
          </p>

          <div className="prose-custom flex flex-col gap-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Mi az a süti?</h2>
              <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                A sütik (angolul: cookies) kis méretű szöveges fájlok, amelyeket a böngésző helyez el az eszközödön,
                amikor egy weboldalt látogatsz meg. Ezek lehetővé teszik, hogy a weboldal emlékezzen a korábbi
                látogatásaidra és beállításaidra, javítva a felhasználói élményt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Milyen sütiket használunk?</h2>
              <div className="flex flex-col gap-5">
                <div className="border-l-2 border-[var(--amber)] pl-5 py-1">
                  <h3 className="font-sans text-sm font-semibold text-[var(--ink)] mb-1">Szükséges sütik</h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Ezek nélkülözhetetlenek az oldal megfelelő működéséhez. Nem tárolnak személyes azonosítható adatot,
                    és nem lehet letiltani őket. Például a sütibeleegyezés tárolása is ilyen.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--border)] pl-5 py-1">
                  <h3 className="font-sans text-sm font-semibold text-[var(--ink)] mb-1">Analitikai sütik</h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Névtelen statisztikai adatokat gyűjtenek arról, hogyan használják a látogatók az oldalt. Ezek az adatok
                    kizárólag az oldal fejlesztésére szolgálnak.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--border)] pl-5 py-1">
                  <h3 className="font-sans text-sm font-semibold text-[var(--ink)] mb-1">Funkcionális sütik</h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Megjegyzik a felhasználó döntéseit, például a sötét/világos mód beállítását vagy a keresési
                    szűrőket, ezzel kényelmesebbé téve a böngészést.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Sütik kezelése</h2>
              <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                A legtöbb böngésző lehetővé teszi a sütik kezelését, letiltását vagy törlését a beállításokon
                keresztül. Ha letiltod az összes sütit, előfordulhat, hogy az oldal egyes funkciói nem működnek
                megfelelően.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Beleegyezés visszavonása</h2>
              <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                A korábban megadott hozzájárulást bármikor visszavonhatod a böngésző cookie-kezelő beállításaiban.
                Ha kérdésed van a sütikkel kapcsolatban, írj nekünk:{" "}
                <a
                  href="mailto:info@hungarytabletopgamesblog.com"
                  className="text-[var(--forest)] hover:text-[var(--amber)] transition-colors"
                >
                  info@hungarytabletopgamesblog.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[var(--ink)] mb-3">Módosítások</h2>
              <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                Fenntartjuk a jogot, hogy ezt a tájékoztatót bármikor frissítsük. A módosítás dátuma mindig az oldal
                tetején jelenik meg, és automatikusan az aktuális dátumot mutatja.
              </p>
            </section>

            <div className="pt-4 border-t border-[var(--border)]">
              <Link
                href="/adatvedelem"
                className="font-sans text-sm text-[var(--forest)] hover:text-[var(--amber)] transition-colors"
              >
                Olvasd el az Adatvédelmi tájékoztatót &#8594;
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
