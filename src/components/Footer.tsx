import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 text-white">
                <Icon name="snowflake" className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold text-white">
                Czas<span className="text-sky-400">Klimy</span>
                <span className="text-white/50">.pl</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Autoryzowany montaż i serwis klimatyzacji marek Rotenso, Haier,
              Gree, LG, Kaisai, Mitsubishi i AUX. Siedziba w Jachrance,
              działamy w Legionowie, Serocku, Markach, Jabłonnie i Warszawie
              Białołęce. Wykonawca: Robogaz Sp. z o.o.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Klimatyzacja</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#cennik" className="hover:text-white">
                  Cennik z montażem
                </a>
              </li>
              <li>
                <a href="#dlaczego-my" className="hover:text-white">
                  Dlaczego klimatyzacja
                </a>
              </li>
              <li>
                <a href="#proces" className="hover:text-white">
                  Jak to działa
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white">
                  Formularz kontaktowy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+48788304845" className="hover:text-white">
                  +48 788 304 845
                </a>
              </li>
              <li>Jachranka 45, k. Serocka</li>
              <li>pn–pt 7:00–17:00</li>
              <li>sob 8:00–13:00</li>
            </ul>
            <div className="mt-4 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4" />
              ))}
              <span className="ml-1 text-xs text-white/50">Google 5/5</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CzasKlimy.pl — Wykonawca: RoboGaz Sp. z o.o., Jachranka 45, Serock</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-white">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
