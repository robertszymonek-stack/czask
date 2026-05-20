import { cities } from "../data";
import Icon from "./Icon";

export default function Cities() {
  const total = cities.reduce((s, c) => s + c.count, 0);
  const max = Math.max(...cities.map((c) => c.count));

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Obszar działania
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Montujemy blisko Ciebie.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Siedziba w Jachrance, działamy w kierunku północno-wschodnim od
              Warszawy. Krótki dojazd = szybszy montaż i serwis.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                <Icon name="map" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {total}+ montaży
                </div>
                <div className="text-sm text-slate-600">
                  w {cities.length} miastach i okolicach
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <div className="space-y-3">
                {cities.map((c) => {
                  const width = (c.count / max) * 100;
                  return (
                    <div key={c.name}>
                      <div className="mb-1.5 flex items-baseline justify-between text-sm">
                        <span className="font-medium text-slate-900">
                          {c.name}
                        </span>
                        <span className="font-semibold text-sky-600">
                          {c.count}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
                * Dane za ostatnie 24 miesiące. W każdej lokalizacji mamy
                stałych klientów korzystających z serwisu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
