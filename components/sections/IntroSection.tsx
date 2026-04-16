export default function IntroSection() {
  return (
    <section id="bevezetes" className="py-28 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="block w-8 h-px bg-[var(--amber)]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
            Bevezetés
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: main text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink)] leading-tight text-balance mb-6">
              Miért hódítják vissza az asztalok a figyelmet?
            </h2>
            <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)] mb-6">
              A digitális világ minden zajában egyre több ember fordul vissza ahhoz az egyszerű örömhöz, amelyet az asztal körül,
              egymással szemben töltött játékos órák nyújtanak. A társasjátékok nem csupán szórakozás, hanem a gondolkodás, a
              kreativitás és az emberi kapcsolatok erőteljes eszközei.
            </p>
            <p className="font-sans text-base leading-relaxed text-[var(--muted-foreground)]">
              Magyarországon különösen gazdag hagyományai vannak az asztali játékkultúrának. A népi kártyajátékoktól az
              összetett stratégiai táblákon át egészen a modern kooperatív élményekig, a paletta széles és lenyűgöző.
              Ez a blog arra hivatott, hogy megmutassa ezt a sokszínű világot mindazoknak, akik nyitottak rá.
            </p>
          </div>

          {/* Right: editorial pull-quote + stats */}
          <div className="flex flex-col gap-8">
            <blockquote className="border-l-2 border-[var(--amber)] pl-6 py-2">
              <p className="font-serif text-2xl text-[var(--ink)] italic leading-snug">
                &ldquo;Minden játék egy közös nyelv, amelyet bárki megtanulhat az első dobástól.&rdquo;
              </p>
            </blockquote>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "150+", label: "Játék bemutatva" },
                { value: "8+", label: "Játékkategória" },
                { value: "Heti", label: "Friss tartalmak" },
                { value: "100%", label: "Magyar tartalom" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--parchment)] p-5 flex flex-col gap-1"
                >
                  <span className="font-serif text-3xl font-bold text-[var(--forest)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs tracking-wide text-[var(--muted-foreground)] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
