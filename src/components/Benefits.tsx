import { benefits } from "../data";

export default function Benefits() {
  return (
    <section id="dlaczego-my" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Dlaczego klimatyzacja
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Klimatyzacja to nie luksus.
            <span className="block text-orange-600">To standard nowoczesnego domu.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg shadow-orange-200">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
