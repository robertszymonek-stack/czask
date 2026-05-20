import { includedInPrice, notExtraCharged, steps } from "../data";

export default function Process() {
  return (
    <section id="proces" className="bg-slate-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Montaż klimatyzacji krok po kroku
          </h2>
          <p className="mt-4 text-xl text-white/70">
            Od zgłoszenia do uruchomienia — wszystko ogarniamy za Ciebie.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n}>
              <div className="text-6xl font-black text-sky-700/70">{step.n}</div>
              <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/75">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-800/70 p-8">
            <h3 className="text-3xl font-black text-white">
              ✅ Co wchodzi w cenę z montażem
            </h3>
            <ul className="mt-6 space-y-4">
              {includedInPrice.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-white/85">
                  <span className="mt-1 text-emerald-400">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-950/30 to-slate-800 p-8">
            <h3 className="text-3xl font-black text-white">
              ⚠️ Czego u nas NIE doliczamy
            </h3>
            <ul className="mt-6 space-y-4">
              {notExtraCharged.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-white/85">
                  <span className="mt-1 text-red-400">✘</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base italic text-white/50">
              Dodatkowe prace (bruzdowanie, pompka skroplin, {'>'}3 m instalacji) zawsze wyceniamy z góry — nigdy nie zaskakujemy fakturą.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
