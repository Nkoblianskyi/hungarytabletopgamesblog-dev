import Image from "next/image"

const traditions = [
  {
    name: "Magyar Ulti",
    era: "17. század óta",
    origin: "Népi kártyajáték",
    description:
      "Magyarország legismertebb kártyajátéka, amelyet hagyományos, 32 lapos magyar kártyával játszanak. Három résztvevőjű, ütős rendszerű játék, ahol a stratégia és az emlékezőképesség egyformán számít. Generációk óta a kávéházak és otthonok kedvence.",
  },
  {
    name: "Filkó",
    era: "18. század",
    origin: "Magyar tájjáték",
    description:
      "A vidéki magyarság körében elterjedt szimpla kártyajáték, ahol a lapok értékeit helyi szabályok határozzák meg. Könnyű megtanulni, mégis tele van váratlan fordulattal. Ma is él a falusi közösségekben és a játékgyűjtők körében.",
  },
  {
    name: "Snapszer",
    era: "Közép-Európai hagyomány",
    origin: "Páros kártyajáték",
    description:
      "Kétszemélyes, páros kártyajáték, amelynek egyszerű szabályai ellenére mélységes taktikai gondolkodást igényel. Magyarországon különösen a dunántúli vidékeken terjedt el, és máig a fiatalabb generációk is szívesen játsszák.",
  },
  {
    name: "Ostábla",
    era: "Bronzkor óta",
    origin: "Táblajáték",
    description:
      "Az egyik legősibb ismert táblajáték európai formája, amelynek nyomait a Kárpát-medencéből is ismerünk. Két játékos egymás ellen vezeti figuráit egy rácsba osztott táblán, logikai és előrelátó gondolkodást igényel.",
  },
  {
    name: "Malomjáték",
    era: "Középkor",
    origin: "Európai népi játék",
    description:
      "A középkori Magyarország otthonainak és fogadóinak közkedvelt szórakozása volt. A táblát olykor közvetlenül a padlóba karcolták, ma is a legtöbb gyerekjáték-gyűjtemény tartalmazza valamilyen formában.",
  },
]

export default function TraditionalSection() {
  return (
    <section id="hagyomanyok" className="py-28 bg-[var(--paper)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-8 h-px bg-[var(--amber)]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
            Hagyományos játékok
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 items-end">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight text-balance">
              Magyarország asztalain évszázadok óta
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
              A Magyar Alföldtől a Dunántúlon át Erdélyig, a kártyalapok és a faragott táblák mindig is
              összekötötték a közösségeket. Íme néhány hagyományos játék, amelyek mélyen gyökereznek a
              magyar kultúrában.
            </p>
          </div>
        </div>

        {/* Image + content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: staggered tradition list */}
          <div className="flex flex-col gap-0 divide-y divide-[var(--border)]">
            {traditions.map((t, i) => (
              <details key={t.name} className="group py-5 cursor-pointer list-none" open={i === 0}>
                <summary className="flex items-start justify-between gap-4 select-none list-none marker:hidden">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-lg font-bold text-[var(--ink)] group-open:text-[var(--forest)] transition-colors">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs text-[var(--muted-foreground)]">{t.era}</span>
                      <span className="block w-1 h-1 rounded-full bg-[var(--amber)]" />
                      <span className="font-sans text-xs text-[var(--muted-foreground)]">{t.origin}</span>
                    </div>
                  </div>
                  <span className="font-sans text-xl text-[var(--amber)] mt-0.5 group-open:rotate-45 transition-transform duration-200 shrink-0">
                    +
                  </span>
                </summary>
                <div className="pt-4 pb-1">
                  <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {t.description}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/traditional-games.jpg"
                alt="Hagyományos magyar játékeszközök"
                fill
                className="object-cover"
              />
              {/* Editorial overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--ink)]/70 px-6 py-5">
                <p className="font-serif text-sm italic text-[var(--paper)]/80">
                  &ldquo;A játék a legjobb módja annak, hogy egy kultúrát belülről ismerjük meg.&rdquo;
                </p>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[var(--amber)]/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
