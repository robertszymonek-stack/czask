import { useState } from "react";
import { faq } from "../data";
import Icon from "./Icon";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-3.5">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-slate-50/70 transition ${
                  isOpen
                    ? "border-sky-300 bg-white shadow-lg shadow-sky-100/40"
                    : "border-slate-200 hover:border-sky-200 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[78px] w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-lg font-bold leading-snug text-slate-900 sm:text-[1.15rem]">
                    {item.q}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-sky-600">
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      className="h-5 w-5"
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-6 pb-6 pt-5 sm:px-7">
                    <p className="text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
