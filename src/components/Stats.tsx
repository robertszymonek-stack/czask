import { stats } from "../data";

export default function Stats() {
  return (
    <section className="relative -mt-8 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-black/20 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 text-center sm:p-8">
              <div className="bg-gradient-to-br from-sky-300 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {s.n}
              </div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
