import Icon from "./Icon";

const brands = [
  { name: "Rotenso", warranty: "5 lat" },
  { name: "Haier", warranty: "5 lat" },
  { name: "Gree", warranty: "7 lat" },
  { name: "LG", warranty: "5 lat" },
  { name: "Kaisai", warranty: "5 lat" },
  { name: "Mitsubishi", warranty: "5 lat" },
  { name: "AUX", warranty: "5 lat" },
];

export default function Brands() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Autoryzowany partner
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Marki, które montujemy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Jako autoryzowany partner zapewniamy gwarancję producenta na
            urządzenia i montaż.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:border-orange-300 hover:shadow-md"
            >
              <span className="text-lg font-bold text-slate-900">{b.name}</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-orange-600">
                <Icon name="shield" className="h-3.5 w-3.5" />
                Gwarancja {b.warranty}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-4 text-center">
          <Icon name="award" className="h-5 w-5 text-orange-600" />
          <p className="text-sm font-medium text-orange-900">
            <strong>Gwarancja dobrej ceny!</strong> Znajdziesz tańszą ofertę u
            sprawdzonej autoryzowanej firmy? Wyrównamy różnicę.
          </p>
        </div>
      </div>
    </section>
  );
}
