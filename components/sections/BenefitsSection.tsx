const benefits = [
  {
    number: "01",
    title: "Szociális kapcsolatok mélyítése",
    description:
      "A társasjátékok közös élményt teremtenek, erősítik a bizalmat és elmélyítik az emberi kapcsolatokat. Minden parti egy alkalom arra, hogy jobban megismerd azokat, akikkel játszol.",
  },
  {
    number: "02",
    title: "Gondolkodás és stratégia fejlesztése",
    description:
      "A táblákon kibontakozó döntések, tervek és váratlan fordulatok komoly mentális tornát nyújtanak. A játékos gondolkodás az élet más területein is kamatoztatható.",
  },
  {
    number: "03",
    title: "Digitális méregtelenítés",
    description:
      "Valódi jelenlétet, kézzel fogható tárgyakat és szemtől szembe kommunikációt kínálnak. Az asztal körüli összegyülekezés természetesen elvezet a képernyőktől.",
  },
  {
    number: "04",
    title: "Kreativitás és képzelet",
    description:
      "Különösen a szerepjátékos és narratív típusú játékok szabadjára engedik a fantáziát. A szabályok keretei között végtelen történetek és lehetőségek nyílnak meg.",
  },
  {
    number: "05",
    title: "Tanulás és ismeretszerzés",
    description:
      "Számtalan játék tanít történelmet, természettudományokat, kultúrákat vagy szókincset szórakoztató formában. A tudás észrevétlenül épül be a játékélménybe.",
  },
  {
    number: "06",
    title: "Érzelmi intelligencia és türelem",
    description:
      "A verseny, a vereség és a győzelem egészséges keretek között élhető meg. Az asztal megkívánja az önfegyelmet és a másik tiszteletét.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-28 bg-[var(--forest)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-8 h-px bg-[var(--amber)]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--amber)]">
            Miért érdemes?
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--paper)] leading-tight text-balance max-w-xl">
            A társasjátékok hatása az életünkre
          </h2>
          <p className="font-sans text-sm text-[var(--paper)]/60 max-w-xs leading-relaxed">
            Tudományosan alátámasztott és személyesen megtapasztalt előnyök azoknak, akik rendszeresen játszanak.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--paper)]/10">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="bg-[var(--forest)] p-8 flex flex-col gap-4 hover:bg-[var(--ink)] transition-colors duration-300 group"
            >
              <span className="font-serif text-5xl font-bold text-[var(--paper)]/10 group-hover:text-[var(--amber)]/20 transition-colors duration-300 leading-none select-none">
                {benefit.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-[var(--paper)] leading-snug">
                {benefit.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-[var(--paper)]/60">
                {benefit.description}
              </p>
              <span className="block w-6 h-px bg-[var(--amber)] mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
