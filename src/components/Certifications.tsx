import { certificates } from "../data";
import Icon from "./Icon";

export default function Certifications() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl shadow-slate-900/20">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
                Uprawnienia i certyfikaty
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Działamy w pełni legalnie
              </h2>
            </div>
            {certificates.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-amber-300">
                  <Icon name={item.icon} className="h-8 w-8" />
                </div>
                <div className="mt-4 text-2xl font-bold">{item.title}</div>
                <div className="text-sm text-white/60">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
