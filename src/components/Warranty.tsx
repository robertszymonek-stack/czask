import { warrantyRows } from "../data";

export default function Warranty() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
            🛡️ Gwarancje producentów
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Pełna gwarancja producenta + gwarancja na montaż
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Jako autoryzowany partner przekazujemy pełną oryginalną gwarancję. Warunek przedłużenia to coroczny przegląd serwisowy.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
          <div className="grid grid-cols-[1.3fr_1fr_1.1fr] bg-slate-900 px-6 py-5 text-lg font-bold text-white">
            <div>Marka</div>
            <div>Gwarancja</div>
            <div>Wymagane przeglądy</div>
          </div>
          {warrantyRows.map((row, index) => (
            <div
              key={row.brand}
              className={`grid grid-cols-[1.3fr_1fr_1.1fr] px-6 py-5 text-lg ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="font-bold text-slate-900">{row.brand}</div>
              <div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-700">
                  {row.warranty}
                </span>
              </div>
              <div className="text-slate-600">{row.reviews}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-slate-500">
          💡 Po pierwszym roku przypomnimy o przeglądzie. Nie tracisz gwarancji.
        </p>
      </div>
    </section>
  );
}
