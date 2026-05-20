export const cities = [
  { name: "Warszawa Białołęka", count: 68 },
  { name: "Legionowo", count: 54 },
  { name: "Serock", count: 41 },
  { name: "Jachranka", count: 36 },
  { name: "Marki", count: 29 },
  { name: "Jabłonna", count: 24 },
  { name: "Nieporęt", count: 18 },
  { name: "Wieliszew / Skrzeszew", count: 15 },
];

export const packages = [
  {
    tag: "BESTSELLER",
    tagColor: "amber",
    brand: "Rotenso",
    model: "Roni X",
    rating: "A++/A+",
    features: ["Żaluzje 4D", "Wi-Fi", "Grzanie -20°C", "iAIR filtr"],
    powers: [
      { kw: "2.6 kW", price: "3 530 zł" },
      { kw: "3.5 kW", price: "3 600 zł" },
      { kw: "5.1 kW", price: "4 460 zł" },
      { kw: "7.0 kW", price: "5 170 zł" },
    ],
    highlight: "Od 70 cm szerokości — zmieści się wszędzie.",
    category: "standard",
  },
  {
    tag: "CENA / JAKOŚĆ",
    tagColor: "emerald",
    brand: "Sevra",
    model: "AUX Freedom",
    rating: "A++/A+",
    features: ["HEPA filtr", "Wi-Fi", "I Feel", "Samoczyszczenie"],
    powers: [
      { kw: "2.7 kW", price: "3 200 zł" },
      { kw: "3.4 kW", price: "3 300 zł" },
      { kw: "5.1 kW", price: "4 000 zł" },
      { kw: "7.2 kW", price: "4 600 zł" },
    ],
    highlight: "Najlepsza opcja w budżetowej klasie.",
    category: "budget",
  },
  {
    tag: "TOP RATING",
    tagColor: "sky",
    brand: "Gree",
    model: "Pular Matt",
    rating: "A++/A+",
    features: ["Jonizator", "Wi-Fi", "I Feel", "Cicha praca"],
    powers: [
      { kw: "2.5 kW", price: "3 600 zł" },
      { kw: "3.2 kW", price: "3 770 zł" },
      { kw: "4.6 kW", price: "4 650 zł" },
      { kw: "6.2 kW", price: "5 400 zł" },
    ],
    highlight: "Idealny do sypialni — jonizator i niskie zużycie energii.",
    category: "standard",
  },
  {
    tag: "CICHY",
    tagColor: "violet",
    brand: "Haier",
    model: "Revive Plus",
    rating: "A++/A+",
    features: ["19 dB", "Wi-Fi", "I Feel", "Biały / Czarny +200 zł"],
    powers: [
      { kw: "2.7 kW", price: "3 530 zł" },
      { kw: "3.5 kW", price: "3 640 zł" },
      { kw: "4.8 kW", price: "4 370 zł" },
      { kw: "6.2 kW", price: "5 190 zł" },
    ],
    highlight: "Już od 19 dB — słyszysz tylko ciszę.",
    category: "standard",
  },
  {
    tag: "3 KOLORY",
    tagColor: "rose",
    brand: "Gree",
    model: "Fairy",
    rating: "A++/A+",
    features: ["Grzanie -25°C", "Jonizator", "7 biegów", "Antracyt/Srebro/Biel"],
    powers: [
      { kw: "2.7 kW", price: "4 050 zł" },
      { kw: "3.5 kW", price: "4 250 zł" },
      { kw: "5.2 kW", price: "5 730 zł" },
      { kw: "7.1 kW", price: "6 270 zł" },
    ],
    highlight: "Mocne grzanie do -25°C w 3 wersjach kolorystycznych.",
    category: "premium",
  },
  {
    tag: "NOWOŚĆ 2026",
    tagColor: "amber",
    brand: "AUX",
    model: "C Voice",
    rating: "A+++",
    features: ["Sterowanie głosowe", "2430 mikrootworów", "Grzanie -30°C"],
    powers: [
      { kw: "3.5 kW", price: "4 999 zł" },
    ],
    highlight: 'Powiedz "Hello Lisa" — zmień temperaturę głosem.',
    category: "premium",
  },
  {
    tag: "NOWOŚĆ 2026",
    tagColor: "violet",
    brand: "Rotenso",
    model: "Luve 2026",
    rating: "A+++/A++",
    features: ["Dysk zapachowy", "DuoFlow żaluzja", "Lustrzany panel"],
    powers: [
      { kw: "2.7 kW", price: "4 530 zł" },
      { kw: "3.6 kW", price: "4 750 zł" },
      { kw: "5.3 kW", price: "5 870 zł" },
    ],
    highlight: "Aromaterapia wbudowana w klimatyzator.",
    category: "premium",
  },
  {
    tag: "DESIGN",
    tagColor: "pink",
    brand: "Gree",
    model: "Clivia Color G-Ai",
    rating: "A+++/A++",
    features: ["Sztuczna inteligencja", "5 kolorów", "LED UV"],
    powers: [
      { kw: "2.7 kW", price: "4 800 zł" },
      { kw: "3.5 kW", price: "4 900 zł" },
      { kw: "5.3 kW", price: "6 350 zł" },
      { kw: "7.1 kW", price: "6 750 zł" },
    ],
    highlight: "AI optymalizuje zużycie prądu. 5 eleganckich kolorów.",
    category: "style",
  },
  {
    tag: "EXCLUSIVE",
    tagColor: "slate",
    brand: "LG",
    model: "Artcool Gallery LCD",
    rating: "A++/A+",
    features: ['27" LCD', "LG ThinQ", "Personalizacja ekranu"],
    powers: [
      { kw: "2.5 kW", price: "10 500 zł" },
      { kw: "3.5 kW", price: "13 000 zł" },
    ],
    highlight: "Wyświetlaj zdjęcia na ekranie klimatyzatora.",
    category: "style",
  },
  {
    tag: "SERWEROWNIA",
    tagColor: "red",
    brand: "Haier",
    model: "Quartz Plus",
    rating: "A++/A+",
    features: ["UV-C Plus", "Grzałka tacy", "Praca 24/7", "10.5 kW"],
    powers: [
      { kw: "10.5 kW", price: "7 777 zł" },
    ],
    highlight: "Stabilna temperatura 24/7 — serwerownie, hale, magazyny.",
    category: "commercial",
  },
];

export const steps = [
  {
    n: "01",
    title: "Zostaw kontakt",
    desc: "Wypełnij formularz lub zadzwoń. Odbieramy zgłoszenie w godzinach pracy i ustalamy, czego dokładnie potrzebujesz.",
  },
  {
    n: "02",
    title: "Wideokonsultacja 15 min",
    desc: "WhatsApp / FaceTime / Messenger. Pokazujesz wnętrze, okno i miejsce jednostki zewnętrznej, a my podajemy wiążącą cenę.",
  },
  {
    n: "03",
    title: "Termin montażu",
    desc: "Ustalamy konkretny dzień i godzinę. Pracujemy szybko i czysto — standardowy split montujemy zwykle w 2–3 godziny.",
  },
  {
    n: "04",
    title: "Uruchomienie",
    desc: "Próba szczelności, próżnia, test, krótki instruktaż obsługi i komplet dokumentów gwarancyjnych.",
  },
];

export const buyerGuide = [
  {
    title: "Nie kupuj samego urządzenia stacjonarnie lub online",
    desc: "Przy zakupie klimatyzatora z montażem możesz skorzystać z 8% VAT w budownictwie mieszkaniowym. Sam sprzęt to zwykle 23% VAT i trudniejsza obsługa gwarancji.",
  },
  {
    title: "Zgoda wspólnoty lub spółdzielni?",
    desc: "W bloku, jeśli montaż ma być w części wspólnej, potrzebna jest zgoda na jednostkę zewnętrzną, przewiert i odprowadzenie skroplin. Pomagamy przygotować opis techniczny do zarządcy oraz doradzamy, jak rozwiązać ten problem bez tego.",
  },
  {
    title: "Zapytaj, czy montaż robi firma z F-GAZ i instalator z F-GAZ",
    desc: "To ważne dla legalnego uruchomienia, szczelności układu i gwarancji producenta — oba warunki muszą być spełnione. Od nas dostajesz dokumentację i kartę gwarancyjną lub rejestrację urządzenia w systemie producenta.",
  },
  {
    title: "Porównuj cenę całości, nie tylko cenę klimatyzatora",
    desc: "Na końcową cenę wpływają długość instalacji, skropliny, dostęp do agregatu, przewierty i ewentualna pompka. U nas zakres podajemy przed montażem.",
  },
  {
    title: "Jeśli chcesz grzać zimą, wybierz model pod ogrzewanie",
    desc: "W 2025/2026 klienci coraz częściej kupują klimatyzację jako pompę ciepła powietrze-powietrze. Liczy się SCOP, pakiet zimowy i zakres pracy w mrozie.",
  },
  {
    title: "Nie odkładaj terminu na pierwszą falę upałów",
    desc: "Najkrótsze terminy są przed sezonem. W czerwcu i lipcu dostępność ekip oraz popularnych modeli potrafi szybko się kurczyć.",
  },
];

export const benefits = [
  {
    title: "Chłodzi latem, grzeje zimą",
    desc: "Nowoczesny klimatyzator to pompa ciepła. Dogrzewa w okresach przejściowych, a przy dobrym doborze — ogrzewa cały sezon.",
  },
  {
    title: "Czyste powietrze i mniej alergenów",
    desc: "Filtry HEPA, jonizatory, UV-C — nowoczesne urządzenia redukują wilgoć, alergeny i drobnoustroje.",
  },
  {
    title: "5 do 7 lat gwarancji",
    desc: "Gree: 7 lat gwarancji. Rotenso, Haier, LG, AUX, Mitsubishi, Kaisai: 5 lat. Jako autoryzowany partner — pełna gwarancja producenta.",
  },
  {
    title: "Montaż w 2–3 godziny",
    desc: "Szybko, czysto i profesjonalnie. Zabezpieczamy miejsce pracy, sprzątamy po sobie. Zostawiamy tylko klimatyzator i ciszę.",
  },
  {
    title: "Najlepsza cena w regionie",
    desc: "Gwarancja dobrej ceny — jeśli znajdziesz tańszą ofertę u sprawdzonej autoryzowanej firmy, wyrównamy różnicę.",
  },
  {
    title: "Pełna opieka serwisowa",
    desc: "Przeglądy okresowe, czyszczenie filtrów, odgrzybianie, diagnostyka. Dbamy o urządzenie przez cały okres użytkowania.",
  },
];

export const testimonials = [
  {
    name: "Katarzyna M.",
    city: "Legionowo",
    text: "Klimatyzacja zamontowana w salonie w 2 godziny. Panowie posprzątali po sobie, wytłumaczyli jak obsługiwać. Gorąco polecam!",
    rating: 5,
  },
  {
    name: "Tomasz W.",
    city: "Warszawa Białołęka",
    text: "Szukałem klimatyzacji, która będzie też grzać zimą. Robogaz dobrał mi Gree Fairy — rewelacja. Działa bez problemu przy -15°C.",
    rating: 5,
  },
  {
    name: "Anna i Piotr K.",
    city: "Serock",
    text: "Multisplit w 3 pokojach. Ekipa profesjonalna, wszystko zgodnie z projektem. Cena uczciwa, sprzęt najlepszej jakości.",
    rating: 5,
  },
  {
    name: "Marek D.",
    city: "Jabłonna",
    text: "Serwis klimatyzacji — szybki termin, fachowa robota. Panowie wyczyścili i odgrzybili urządzenie. Polecam każdemu!",
    rating: 5,
  },
];

export const faq = [
  {
    q: "Co dokładnie wchodzi w cenę z montażem? Bez ukrytych kosztów?",
    a: "W standardowej cenie masz urządzenie, montaż jednostki wewnętrznej i zewnętrznej, 1 przewiert, do 3 m instalacji chłodniczej, maskownice, odprowadzenie skroplin, podłączenie elektryczne, próbę szczelności, próżnię, pierwsze uruchomienie i instruktaż. Nie doliczamy opłat za dokumentację, uruchomienie czy sprzątanie po montażu.",
  },
  {
    q: "Lepiej kupić klimatyzator sam, a potem zamówić montaż?",
    a: "Zwykle nie. Kupując sprzęt razem z montażem dostajesz 8% VAT zamiast 23% w budynkach mieszkalnych, pełną odpowiedzialność jednego wykonawcy oraz łatwiejszą obsługę gwarancyjną. Dodatkowo pomagamy dobrać model, który faktycznie pasuje do Twojego wnętrza i sposobu użytkowania.",
  },
  {
    q: "Ile prądu zużywa klimatyzator? Czy rachunki nie zabiją?",
    a: "Nowoczesne klimatyzatory inwerterowe są energooszczędne. Przy prawidłowym doborze mocy i normalnym użytkowaniu koszt chłodzenia jednego pomieszczenia jest zwykle niższy, niż większość klientów się spodziewa. Kluczowe jest to, by urządzenie nie było ani za słabe, ani przewymiarowane — dlatego dobieramy je precyzyjnie.",
  },
  {
    q: "Czy klimatyzacja hałasuje?",
    a: "Dobre urządzenia pracują bardzo cicho — wiele modeli schodzi nawet do 19 dB, czyli poziomu porównywalnego z szeptem. Do sypialni i pokojów dziecięcych dobieramy szczególnie ciche jednostki, a agregat zewnętrzny ustawiamy tak, by ograniczyć hałas dla domowników i sąsiadów.",
  },
  {
    q: "Czy klimatyzacja jest zdrowa? Mam dzieci/alergię.",
    a: "Tak, pod warunkiem że jest dobrze dobrana i regularnie serwisowana. Nowoczesne klimatyzatory mają filtry, jonizatory, czasem także UV-C lub HEPA, które pomagają ograniczać pyłki, kurz i nadmiar wilgoci. Regularny przegląd i czyszczenie sprawiają, że urządzenie poprawia komfort oddychania zamiast go pogarszać.",
  },
  {
    q: "Czy mogę skorzystać z 8% VAT?",
    a: "Tak — jeśli kupujesz urządzenie z montażem do budynku mieszkalnego objętego limitami powierzchni, obowiązuje preferencyjna stawka 8% VAT. W lokalach niemieszkalnych stosuje się 23% VAT. Jeśli nie masz pewności, sprawdzimy to przed wyceną.",
  },
  {
    q: "Jak długo trwa montaż? Czy będzie bałagan?",
    a: "Standardowy montaż splitu trwa zwykle 2–3 godziny. Zabezpieczamy podłogi i meble, używamy odkurzaczy przy wierceniu, a po skończonej pracy odkurzamy i zostawiamy porządek. Dłużej trwa tylko montaż niestandardowy, np. przy długich trasach lub pracach w zabudowie.",
  },
  {
    q: "Mieszkanie deweloperskie / blok / wspólnota – ogarniecie?",
    a: "Tak. Robimy montaże w blokach, mieszkaniach deweloperskich i domach. Pomagamy w dokumentach do wspólnoty lub zarządcy, doradzamy miejsce montażu jednostki zewnętrznej i realizujemy też montaże dwuetapowe — np. część instalacji przed wykończeniem, a resztę po odbiorze mieszkania.",
  },
  {
    q: "Czy klimatyzacja może ogrzewać dom zimą?",
    a: "Tak — wiele modeli działa jak pompa ciepła powietrze-powietrze. Świetnie sprawdzają się do dogrzewania wiosną i jesienią, a wybrane urządzenia mogą skutecznie grzać nawet przy dużych mrozach. Jeśli zależy Ci głównie na ogrzewaniu, dobierzemy model o mocnym grzaniu i odpowiednim pakiecie zimowym.",
  },
  {
    q: "Kiedy najlepiej zamówić montaż klimatyzacji?",
    a: "Najwygodniej przed sezonem upałów — wczesną wiosną albo jesienią. Wtedy łatwiej o szybki termin i dostępność popularnych modeli. W maju, czerwcu i lipcu czas oczekiwania zwykle rośnie, bo wiele osób decyduje się dopiero po pierwszej fali gorąca.",
  },
  {
    q: "Czy mogę zamontować klimatyzator samodzielnie?",
    a: "Przy standardowych klimatyzatorach split montaż i uruchomienie powinien wykonać instalator z uprawnieniami F-GAZ. To ważne dla szczelności układu, gwarancji producenta i bezpieczeństwa. Samodzielny montaż może skończyć się utratą gwarancji i problemem przy serwisie.",
  },
  {
    q: "Czy R32 nadal ma sens w 2026 roku?",
    a: "Tak — większość aktualnie sprzedawanych klimatyzatorów split nadal pracuje na R32 i jest normalnie serwisowana. Przy wyborze urządzenia patrzymy nie tylko na czynnik, ale też na klasę energetyczną, SCOP, hałas, dostępność części, gwarancję i realne warunki montażu.",
  },
];

export const stats = [
  { n: "5/5", label: "ocena Google" },
  { n: "20+", label: "lat doświadczenia" },
  { n: "2–3h", label: "czas montażu" },
  { n: "7 lat", label: "gwarancji na Gree" },
];



export const powerFactors = [
  {
    title: "Metraż + wysokość",
    desc: "25 m² ≠ 35 m². Liczymy kubaturę, a nie tylko powierzchnię.",
    icon: "ruler",
  },
  {
    title: "Nasłonecznienie",
    desc: "Duże okna na południe? +20–30% mocy. Północna sypialnia? Mniejsza jednostka.",
    icon: "sun",
  },
  {
    title: "Izolacja + okna",
    desc: "Stary blok czy nowy dom? Różnica nawet 1–1,5 kW w tej samej powierzchni.",
    icon: "brick",
  },
];

export const painPoints = [
  {
    title: '"Nie chcę czekać 2 tygodnie na oględziny"',
    desc: "Zamiast wizyty audytora robimy 15-minutową wideokonsultację (WhatsApp / FaceTime / Messenger). Wystarczy pokazać telefonem ścianę i okno — wycenę dostaniesz tego samego dnia.",
    icon: "hourglass",
  },
  {
    title: '"Mam mieszkanie deweloperskie – inni odmawiają"',
    desc: "Realizujemy montaże dwuetapowe. Pierwszy etap przed wykończeniem (rury w ścianach), drugi po malowaniu. Instalację nabijamy azotem technicznym pod wysokim ciśnieniem — chroni przed wilgocią i od razu wykryje uszkodzenie przez inną ekipę.",
    icon: "crane",
  },
  {
    title: '"Boję się bałaganu w nowym mieszkaniu"',
    desc: "Zabezpieczamy podłogi i meble folią. Wiertnice mają podpięte odkurzacze przemysłowe — pyłu praktycznie nie ma. Po skończonej pracy odkurzamy i zostawiamy stan sprzed montażu.",
    icon: "broom",
  },
  {
    title: '"Na końcu doliczą mi 1000 zł za metr"',
    desc: "Nie. Cennik podajemy od razu po wideokonsultacji — wiążący i ostateczny. W cenie standardowo: do 3 m instalacji, otwór 65 mm, wsporniki, maskownice, próżnia, próba szczelności. Bez doliczania za wkrętarkę.",
    icon: "receipt-off",
  },
  {
    title: '"Wspólnota nie pozwala na klimę na elewacji"',
    desc: "Pomagamy z dokumentami do wspólnoty/zarządcy. Doradzimy estetyczne maskownice w kolorze elewacji albo przeniesienie agregatu na dach — tam, gdzie to technicznie możliwe.",
    icon: "building-front",
  },
  {
    title: '"Co jak się popsuje? Czy muszę sam się o to martwić?"',
    desc: "Nie. Bierzemy całość na siebie: sprzęt, montaż, uruchomienie i dokumentację. Awaria? My kontaktujemy się z producentem w Twoim imieniu. Jeden wykonawca — jedna odpowiedzialność.",
    icon: "handshake",
  },
];

export const certificates = [
  {
    title: "F-GAZ",
    subtitle: "Czynniki chłodnicze",
    icon: "file-badge",
  },
  {
    title: "SEP",
    subtitle: "Elektroenergetyczne",
    icon: "bolt-badge",
  },
  {
    title: "Autoryzacje",
    subtitle: "7 producentów",
    icon: "trophy-badge",
  },
  {
    title: "FV 8% / 23%",
    subtitle: "Pełna dokumentacja",
    icon: "clipboard-badge",
  },
];

export const warrantyRows = [
  { brand: "Gree", warranty: "do 7 lat", reviews: "1 przegląd / rok" },
  { brand: "Rotenso", warranty: "5 lat", reviews: "1 przegląd / rok" },
  { brand: "Haier", warranty: "5 lat", reviews: "1 przegląd / rok" },
  { brand: "Kaisai", warranty: "5 lat", reviews: "1 przegląd / rok" },
  { brand: "AUX", warranty: "5 lat (sprężarka 10)", reviews: "1 przegląd / rok" },
  { brand: "LG", warranty: "5 lat", reviews: "1 przegląd / rok" },
  { brand: "Mitsubishi", warranty: "5 lat", reviews: "1 przegląd / rok" },
];

export const includedInPrice = [
  "Jednostka wewnętrzna + zewnętrzna",
  "Montaż na uchwytach ściennych",
  "Przewiert 65 mm przez ścianę (do 60 cm)",
  "Do 3 m izolowanej instalacji chłodniczej",
  "Wsporniki + maskownice",
  "Grawitacyjne odprowadzenie skroplin",
  "Podłączenie elektryczne",
  "Próżnia + próba szczelności",
  "Pierwsze uruchomienie + instruktaż",
  "Pełna dokumentacja + karta gwarancyjna",
];

export const notExtraCharged = [
  'Dopłat „za każdy metr instalacji"',
  "Dojazdu do 30 km od Serocka",
  'Płatnych „oględzin technicznych"',
  "Opłat za uruchomienie urządzenia",
  "Kosztów dokumentacji gwarancyjnej",
  "Drobnych materiałów montażowych",
  "Sprzątania po montażu",
];

export const pricingExtras = [
  { service: "Dodatkowy metr instalacji chłodniczej", price: "140 zł" },
  { service: "Dodatkowy metr koryta / maskownic", price: "43 zł" },
  { service: "Dodatkowy przewiert przez ścianę", price: "130 zł" },
  { service: "Bruzdowanie (za metr bieżący)", price: "237 zł" },
  { service: "Pompka skroplin", price: "540 zł" },
  { service: "Montaż drugiej i kolejnej jednostki split", price: "1 188 zł" },
  { service: "Dojazd powyżej 30 km od Serocka", price: "5,40 zł/km" },
];

export const pricingMultisplit = [
  { rooms: "2 pomieszczenia", price: "2 808 zł" },
  { rooms: "3 pomieszczenia", price: "3 780 zł" },
  { rooms: "4 pomieszczenia", price: "4 752 zł" },
];
