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

export default function PrivacyPolicyPage() {
  const updateDate = getUpdateDate()

  return (
    <>
      <Header />
      <main className="bg-(--paper) pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-10 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-(--forest) transition-colors">
              Főoldal
            </Link>
            <span>/</span>
            <span>Adatvédelmi tájékoztató</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-(--amber)" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-(--amber)">
              Jogi tájékoztató
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-(--ink) leading-tight mb-4 text-balance">
            Adatvédelmi tájékoztató
          </h1>
          <p className="font-sans text-xs text-muted-foreground mb-12">
            Utoljára frissítve: <time dateTime={new Date().toISOString().split("T")[0]}>{updateDate}</time>
          </p>

          <div className="prose-custom flex flex-col gap-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-(--ink) mb-3">Milyen adatokat kezelünk?</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Az oldalon megadott kapcsolati adatok, mint a név, e-mail-cím és az elküldött üzenet tartalma,
                kizárólag a kapcsolatfelvétel és a válaszadás célját szolgálják. Nem kérünk érzékeny személyes
                adatokat, és nem végzünk automatizált profilalkotást.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-(--ink) mb-3">Az adatkezelés célja</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Az adatokat arra használjuk, hogy válaszolni tudjunk a megkeresésekre, kezeljük a visszajelzéseket,
                és javítsuk az oldal tartalmi minőségét. Az adatokat nem adjuk el, és nem használjuk fel harmadik fél
                marketingtevékenységéhez.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-(--ink) mb-3">Meddig őrizzük meg az adatokat?</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                A kapcsolatfelvétel során megadott adatokat csak a szükséges ideig őrizzük meg, vagy amíg azt jogi
                kötelezettség indokolja. Ha kéred, az adatokat indokolatlan késedelem nélkül töröljük.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-(--ink) mb-3">A felhasználó jogai</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Jogod van tájékoztatást kérni a kezelt adataidról, kérni azok helyesbítését, törlését vagy az
                adatkezelés korlátozását. Kérdés esetén írj nekünk a{" "}
                <a
                  href="mailto:info@hungarytabletopgamesblog.com"
                  className="text-(--forest) hover:text-(--amber) transition-colors"
                >
                  info@hungarytabletopgamesblog.com
                </a>{" "}
                címen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-(--ink) mb-3">Külső szolgáltatások</h2>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Az oldal használhat analitikai vagy hoszting szolgáltatásokat, amelyek technikai adatokat kezelhetnek
                a működés biztosítása érdekében. Ezek az adatok a szolgáltatás biztonságos működtetéséhez és az oldal
                teljesítményének méréséhez szükségesek.
              </p>
            </section>

            <div className="pt-4 border-t border-border">
              <Link
                href="/sutik"
                className="font-sans text-sm text-(--forest) hover:text-(--amber) transition-colors"
              >
                Olvasd el a Sütikezelési tájékoztatót &#8594;
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
