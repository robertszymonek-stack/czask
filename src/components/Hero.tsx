import Icon from "./Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 pb-20 pt-16 text-white lg:pt-24"
    >
      {/* tło dekoracyjne */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-medium text-sky-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
          </span>
          Autoryzowany montaż i serwis
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Klimatyzacja dobrana do Twojego domu,
          <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            nie tylko do metrażu.
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Montaż klimatyzacji w Warszawie Białołęce, Legionowie, Markach,
          Serocku, Jabłonnie, Nieporęcie i okolicach. Po 15-minutowej
          wideokonsultacji dobieramy moc, wskazujemy 2–3 modele i podajemy
          jasną cenę z montażem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
          >
            Sprawdź dostępność terminu
            <Icon
              name="arrow"
              className="h-4 w-4 transition group-hover:translate-x-1"
            />
          </a>
          <a
            href="tel:+48788304845"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            <Icon name="phone" className="h-4 w-4" />
            +48 788 304 845
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <Icon name="check" className="h-4 w-4 text-emerald-400" />
            Wycena po wideokonsultacji
          </span>
          <span className="flex items-center gap-2">
            <Icon name="check" className="h-4 w-4 text-emerald-400" />
            Standardowy montaż 2–3h
          </span>
          <span className="flex items-center gap-2">
            <Icon name="check" className="h-4 w-4 text-emerald-400" />
            Gwarancja 5–7 lat
          </span>
        </div>
      </div>
    </section>
  );
}
