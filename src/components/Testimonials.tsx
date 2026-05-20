import { testimonials } from "../data";
import Icon from "./Icon";

export default function Testimonials() {
  return (
    <section id="opinie" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Opinie
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Co mówią nasi klienci
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ocena 5/5 w wizytówce Google. Prawdziwe opinie od prawdziwych ludzi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon
                name="quote"
                className="absolute right-6 top-6 h-10 w-10 text-sky-100"
              />
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icon key={j} name="star" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="relative mt-4 text-slate-700">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
