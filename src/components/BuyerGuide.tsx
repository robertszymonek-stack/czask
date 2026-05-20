import { buyerGuide } from "../data";
import Icon from "./Icon";

export default function BuyerGuide() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Przed zakupem
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              O co pytają klienci w 2026?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Większość problemów z klimatyzacją zaczyna się przed montażem:
              źle dobrana moc, brak zgody wspólnoty albo cena, która rośnie
              dopiero na miejscu. Dlatego wyjaśniamy te rzeczy przed zakupem.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Zapytaj o swój montaż
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-slate-50/60">
            {buyerGuide.map((item, index) => (
              <div key={item.title} className="grid gap-4 p-6 sm:grid-cols-[72px_1fr] sm:p-8">
                <div className="text-4xl font-black text-sky-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}