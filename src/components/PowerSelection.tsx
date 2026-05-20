import { powerFactors } from "../data";
import Icon from "./Icon";

export default function PowerSelection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Źle dobrana moc = wyższe rachunki i szybsza awaria
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Dlatego nie sprzedajemy „z półki”. Dobieramy precyzyjnie.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {powerFactors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon name={factor.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{factor.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">
                    {factor.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xl text-slate-600">
          Po 15-minutowej wideokonsultacji podamy dokładną moc i 2–3 modele do wyboru.
        </p>
      </div>
    </section>
  );
}
