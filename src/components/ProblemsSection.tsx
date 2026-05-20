import { painPoints } from "../data";
import Icon from "./Icon";

export default function ProblemsSection() {
  return (
    <section id="dlaczego-my" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Znamy Twoje problemy... <span className="text-sky-600">i nie tworzymy nowych</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon name={item.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">
                    → {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
