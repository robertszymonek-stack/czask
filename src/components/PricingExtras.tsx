import { pricingExtras, pricingMultisplit } from "../data";
import Icon from "./Icon";

export default function PricingExtras() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Cennik usług
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Przejrzyste ceny, bez niespodzianek
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Montaż pierwszej jednostki split jest wliczony w cenę klimatyzatora.
            Poniżej — usługi dodatkowe i multisplit. Ceny brutto dla osób
            prywatnych (VAT 8%).
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Usługi dodatkowe */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
            <div className="bg-slate-900 px-6 py-5">
              <h3 className="text-xl font-bold text-white">
                🔧 Usługi dodatkowe
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Doliczane tylko gdy potrzebne — zawsze wyceniane przed montażem
              </p>
            </div>
            {pricingExtras.map((row, i) => (
              <div
                key={row.service}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="text-base text-slate-800">{row.service}</span>
                <span className="whitespace-nowrap text-base font-bold text-slate-900">
                  {row.price}
                </span>
              </div>
            ))}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
              <p className="text-sm text-slate-500">
                Ceny brutto (VAT 8%) dla osób prywatnych. Dla firm +23% VAT netto.
              </p>
            </div>
          </div>

          {/* MultiSplit + kluczowe zasady */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
              <div className="bg-slate-900 px-6 py-5">
                <h3 className="text-xl font-bold text-white">
                  🏠 Montaż MultiSplit
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Systemy wielogałęziowe — cały dom z jednego agregatu
                </p>
              </div>
              {pricingMultisplit.map((row, i) => (
                <div
                  key={row.rooms}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <span className="text-base text-slate-800">{row.rooms}</span>
                  <span className="whitespace-nowrap text-base font-bold text-slate-900">
                    od {row.price}
                  </span>
                </div>
              ))}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-sm text-slate-500">
                  Ceny brutto (VAT 8%). Dokładna wycena po wideokonsultacji.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Icon name="check" className="h-5 w-5 text-emerald-500" />
                Co zawiera montaż podstawowy
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Przewiert, montaż, okablowanie</li>
                <li>✔ Do 3 m instalacji chłodniczej</li>
                <li>✔ Próba szczelności + uruchomienie</li>
                <li>✔ Szkolenie z obsługi + freon startowy</li>
                <li>✔ Dojazd do 30 km od Serocka gratis</li>
                <li>✔ Gwarancja 24 mies. na instalację</li>
              </ul>
            </div>

            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
            >
              Zapytaj o wycenę dla siebie
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
