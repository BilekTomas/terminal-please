const CASES = [
  {
    id: "routine",
    name: "Daniel Horák",
    sprite: 1,
    nationality: "ČESKÁ REPUBLIKA",
    passportNumber: "CZ4589216",
    passportExpiry: "19. 06. 2031",
    ticketName: "DANIEL HORÁK",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 18.4,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-8421",
    line: "Dobrý den, jen tento kufr a příruční taška.",
    interview: "Letím na třídenní pracovní schůzku. Hotel mám rezervovaný u nádraží.",
    observation: "Klidný, odpovědi souhlasí s rezervací.",
    correct: "approve",
    reason: "Doklady, let i zavazadlo jsou v pořádku.",
    riskTab: null
  },
  {
    id: "missing-passport",
    name: "Mia Carter",
    sprite: 2,
    nationality: "SPOJENÉ KRÁLOVSTVÍ",
    passportNumber: "—",
    passportExpiry: "—",
    ticketName: "MIA CARTER",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 14.8,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-1140",
    line: "Pas? Myslela jsem, že mi stačí fotka v telefonu.",
    interview: "Originál jsem nechala v hotelovém sejfu. Let mi ale za hodinu odlétá.",
    observation: "Předkládá pouze fotografii pasu v mobilu.",
    correct: "deny",
    reason: "Bez originálu cestovního dokladu nelze cestující odbavit.",
    missingPassport: true,
    riskTab: "docs"
  },
  {
    id: "expired",
    name: "Henri Dubois",
    sprite: 3,
    nationality: "FRANCIE",
    passportNumber: "24FR77018",
    passportExpiry: "28. 02. 2026",
    ticketName: "HENRI DUBOIS",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 20.1,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-5519",
    line: "Jistě, slečno. Doklady mám připravené.",
    interview: "Vracím se domů. Tento pas používám už mnoho let.",
    observation: "Cestující je klidný. Datum platnosti dokladu je výrazně po termínu.",
    correct: "deny",
    reason: "Pas je expirovaný a není platným cestovním dokladem.",
    highlight: "expiry",
    riskTab: "docs"
  },
  {
    id: "overweight",
    name: "Sofia Romano",
    sprite: 4,
    nationality: "ITÁLIE",
    passportNumber: "YA8842190",
    passportExpiry: "03. 08. 2030",
    ticketName: "SOFIA ROMANO",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 28.7,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-2267",
    line: "Kufr je trochu těžší, ale jsou v něm jen šaty.",
    interview: "Pět kilo navíc? Rozumím, případný poplatek zaplatím kartou.",
    observation: "Doklady souhlasí. Zavazadlo překračuje limit o 5,7 kg.",
    correct: "fee",
    reason: "Kufr má nadváhu 5,7 kg. Je nutné vybrat doplatek.",
    riskTab: "bag"
  },
  {
    id: "name-mismatch",
    name: "Klára Jelínková",
    sprite: 8,
    nationality: "ČESKÁ REPUBLIKA",
    passportNumber: "CZ9004318",
    passportExpiry: "11. 12. 2029",
    ticketName: "KLÁRA NOVOTNÁ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 16.3,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-3910",
    line: "Letenku jsem kupovala ještě před svatbou.",
    interview: "Mám u sebe oddací list, ale systém změnu jména nepřijal.",
    observation: "Jméno na letence nesouhlasí s pasem. Vyžaduje ruční ověření.",
    correct: "alert",
    reason: "Neshodu jména musí před odbavením posoudit supervizor.",
    highlight: "name",
    riskTab: "docs"
  },
  {
    id: "prohibited-item",
    name: "Marco Bellini",
    sprite: 6,
    nationality: "ITÁLIE",
    passportNumber: "IT5519074",
    passportExpiry: "30. 04. 2028",
    ticketName: "MARCO BELLINI",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 21.0,
    bagLimit: 23,
    bagScan: "TLAKOVÁ NÁDOBA + KABELÁŽ",
    bagTag: "PRG-7742",
    line: "To pouzdro? Jen vybavení ke koncertu.",
    interview: "Kufr balil kolega. Přesně nevím, co dal do boční kapsy.",
    observation: "Tvar pouzdra je neobvyklý. Obsah musí nejprve odhalit RTG kontrola.",
    correct: "alert",
    reason: "Podezřelý obsah zavazadla musí prověřit letištní bezpečnost.",
    scanRequired: true,
    riskTab: "bag"
  },
  {
    id: "wrong-flight",
    name: "Adam Kowalski",
    sprite: 7,
    nationality: "POLSKO",
    passportNumber: "PL4032918",
    passportExpiry: "17. 01. 2032",
    ticketName: "ADAM KOWALSKI",
    flight: "LO 524",
    destination: "WARSAW",
    time: "19:10",
    travelClass: "ECONOMY",
    bagWeight: 12.9,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-2905",
    line: "Tohle je fronta do Varšavy, že ano?",
    interview: "Na tabuli jsem zahlédl číslo dvanáct, tak jsem se postavil sem.",
    observation: "Cestující má platnou letenku, ale k jinému letu a jiné přepážce.",
    correct: "deny",
    reason: "Letenka patří k letu LO 524 do Varšavy, nikoli k letu OK 761.",
    highlight: "flight",
    riskTab: "docs"
  },
  {
    id: "medical",
    name: "Lena Weiss",
    sprite: 5,
    nationality: "NĚMECKO",
    passportNumber: "C4L710985",
    passportExpiry: "22. 09. 2029",
    ticketName: "LENA WEISS",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 19.5,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-6201",
    line: "Omlouvám se… špatně se mi dýchá a motá se mi hlava.",
    interview: "Bolest na hrudi začala před pár minutami. Mám u sebe malé dítě.",
    observation: "Cestující je bledá, zadýchává se a opírá se o přepážku.",
    correct: "alert",
    reason: "Příznaky mohou být akutní. Přivolání zdravotní služby má přednost.",
    riskTab: "talk"
  },
  {
    id: "visa",
    name: "Noah Grant",
    sprite: 9,
    nationality: "KANADA",
    passportNumber: "PA776430",
    passportExpiry: "07. 07. 2033",
    ticketName: "NOAH GRANT",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 17.2,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-1102",
    line: "Jsem v Evropě už skoro čtyři měsíce.",
    interview: "Povolených devadesát dní? To jsem si nepohlídal.",
    observation: "Systém hlásí překročení povolené délky pobytu. Nutná kontrola cizinecké policie.",
    correct: "alert",
    reason: "Překročení pobytu vyžaduje před odletem posouzení příslušného orgánu.",
    riskTab: "talk"
  },
  {
    id: "pressure",
    name: "Viktor Sokolov",
    sprite: 10,
    nationality: "GRUZIE",
    passportNumber: "GE2207184",
    passportExpiry: "13. 03. 2030",
    ticketName: "VIKTOR SOKOLOV",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "BUSINESS",
    bagWeight: 22.1,
    bagLimit: 32,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-9984",
    line: "Není třeba nic zdržovat. Tady máte něco za rychlost.",
    interview: "Cestující položí na přepážku obálku s bankovkami a odmítá ji vzít zpět.",
    observation: "Pokus o úplatek. Postup vyžaduje přivolání nadřízeného a bezpečnosti.",
    correct: "alert",
    reason: "Pokus o úplatek se musí okamžitě hlásit nadřízenému.",
    riskTab: "talk"
  },
  {
    id: "backpacker",
    name: "Amélie Laurent",
    sprite: 11,
    nationality: "FRANCIE",
    passportNumber: "19FR66231",
    passportExpiry: "09. 11. 2031",
    ticketName: "AMÉLIE LAURENT",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 22.8,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-4520",
    line: "Stihla jsem limit? Vážila jsem batoh třikrát.",
    interview: "Vracím se domů po cestě po Česku. Nic dalšího neodbavuji.",
    observation: "Doklady souhlasí, zavazadlo je těsně pod limitem.",
    correct: "approve",
    reason: "Vše je v pořádku. Zavazadlo je pod limitem 23 kg.",
    riskTab: null
  },
  {
    id: "business-valid",
    name: "Irena Malá",
    sprite: 4,
    nationality: "ČESKÁ REPUBLIKA",
    passportNumber: "CZ7703142",
    passportExpiry: "16. 05. 2032",
    ticketName: "IRENA MALÁ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "BUSINESS",
    bagWeight: 30.6,
    bagLimit: 32,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-7014",
    line: "Mám business tarif, limit by měl být třicet dva kilo.",
    interview: "Letím přímo na konferenci a zavazadlo jsem balila sama.",
    observation: "Business tarif má zvýšený limit 32 kg. Všechny údaje souhlasí.",
    correct: "approve",
    reason: "Zavazadlo je pod limitem business tarifu a doklady jsou platné.",
    riskTab: null
  },
  {
    id: "damaged-passport",
    name: "Tomasz Nowak",
    sprite: 1,
    nationality: "POLSKO",
    passportNumber: "PL9982014",
    passportExpiry: "08. 04. 2030",
    ticketName: "TOMASZ NOWAK",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 13.7,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-1622",
    line: "Pas mi trochu zmokl, ale údaje jsou přece vidět.",
    interview: "Čip už nejde načíst a stránka s fotografií se odlepuje.",
    observation: "Poškozený doklad nelze strojově ověřit; ochranné prvky jsou narušené.",
    correct: "deny",
    reason: "Výrazně poškozený a nečitelný pas nelze přijmout k odbavení.",
    riskTab: "docs"
  },
  {
    id: "short-validity",
    name: "Layla Haddad",
    sprite: 2,
    nationality: "JORDÁNSKO",
    passportNumber: "JX4401872",
    passportExpiry: "20. 11. 2026",
    ticketName: "LAYLA HADDAD",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 19.0,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-4851",
    line: "Pas je ještě platný, tak by neměl být problém.",
    interview: "Vrátit se mám za dva týdny. Nový pas jsem nestihla vyřídit.",
    observation: "Pas nesplňuje dnešní pravidlo minimální tříměsíční platnosti po návratu.",
    correct: "deny",
    reason: "Platnost pasu je kratší než požadované tři měsíce po návratu.",
    highlight: "expiry",
    riskTab: "docs"
  },
  {
    id: "wrong-date",
    name: "Erik Svensson",
    sprite: 7,
    nationality: "ŠVÉDSKO",
    passportNumber: "SE3034871",
    passportExpiry: "02. 02. 2034",
    ticketName: "ERIK SVENSSON",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45 · 16. 10.",
    travelClass: "ECONOMY",
    bagWeight: 10.5,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-1700",
    line: "Prosím? Dnes není šestnáctého?",
    interview: "Cestující se spletl o jeden den a nemá rezervaci na dnešní let.",
    observation: "Letenka je platná až zítra. Dnešní let je téměř plný.",
    correct: "deny",
    reason: "Letenka platí až na následující den, nikoli na dnešní směnu.",
    riskTab: "docs"
  },
  {
    id: "extra-bag",
    name: "Chloé Martin",
    sprite: 8,
    nationality: "FRANCIE",
    passportNumber: "17FR54093",
    passportExpiry: "01. 06. 2031",
    ticketName: "CHLOÉ MARTIN",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 17.8,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-4409",
    line: "Mám dva kufry, každý je lehký. To se sčítá, ne?",
    interview: "Tarif zahrnuje jeden kus. Druhý kufr nebyl přikoupen.",
    observation: "Hmotnost je v limitu, ale cestující má jeden neuhrazený kus navíc.",
    correct: "fee",
    reason: "Za druhé odbavené zavazadlo je nutné vybrat doplatek.",
    riskTab: "bag"
  },
  {
    id: "sports-gear",
    name: "Jan Keller",
    sprite: 7,
    nationality: "NĚMECKO",
    passportNumber: "C7P602441",
    passportExpiry: "24. 03. 2031",
    ticketName: "JAN KELLER",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 15.2,
    bagLimit: 23,
    bagScan: "SPORTOVNÍ VYBAVENÍ",
    bagTag: "PRG-6612",
    line: "Lyže jsou lehké. Určitě se počítají jako normální kufr.",
    interview: "Sportovní vybavení nemá přikoupené a překračuje běžné rozměry.",
    observation: "Nadrozměrné sportovní vybavení vyžaduje zvláštní odbavení a úhradu.",
    correct: "fee",
    reason: "Je třeba vybrat poplatek za nadrozměrné sportovní vybavení.",
    riskTab: "bag"
  },
  {
    id: "pet-fee",
    name: "Petra Horská",
    sprite: 5,
    nationality: "ČESKÁ REPUBLIKA",
    passportNumber: "CZ1835007",
    passportExpiry: "12. 01. 2033",
    ticketName: "PETRA HORSKÁ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 12.4,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-3815",
    line: "Kočka má čip i evropský pas, jen jsem ji nepřidala k rezervaci.",
    interview: "Doklady zvířete jsou platné a přepravka splňuje rozměry kabiny.",
    observation: "Přeprava zvířete je možná, ale služba nebyla uhrazena.",
    correct: "fee",
    reason: "Doklady zvířete jsou v pořádku, zbývá doplatit přepravu v kabině.",
    riskTab: "talk"
  },
  {
    id: "lithium-battery",
    name: "Oliver Reed",
    sprite: 9,
    nationality: "SPOJENÉ KRÁLOVSTVÍ",
    passportNumber: "561907224",
    passportExpiry: "29. 08. 2030",
    ticketName: "OLIVER REED",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 21.6,
    bagLimit: 23,
    bagScan: "VELKÁ LITHIOVÁ BATERIE",
    bagTag: "PRG-8180",
    line: "V kufru mám jen techniku na natáčení.",
    interview: "Cestující potvrzuje, že v odbaveném kufru nechal velkou náhradní baterii.",
    observation: "RTG musí ověřit baterii, která nesmí zůstat v odbaveném zavazadle.",
    correct: "alert",
    reason: "Nebezpečnou baterii musí před odbavením řešit bezpečnostní pracovník.",
    scanRequired: true,
    riskTab: "bag"
  },
  {
    id: "stolen-passport",
    name: "Nina Petrović",
    sprite: 4,
    nationality: "CHORVATSKO",
    passportNumber: "HR4400219",
    passportExpiry: "18. 10. 2032",
    ticketName: "NINA PETROVIĆ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 20.0,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-3320",
    line: "To musí být chyba systému. Ten pas je můj.",
    interview: "Číslo dokladu je v databázi vedeno jako odcizené před dvěma měsíci.",
    observation: "Fotografie odpovídá, ale hlášení o odcizení vyžaduje ověření policií.",
    correct: "alert",
    reason: "Doklad hlášený jako odcizený musí prověřit cizinecká policie.",
    riskTab: "docs"
  },
  {
    id: "duplicate-pass",
    name: "Leo Bernard",
    sprite: 6,
    nationality: "FRANCIE",
    passportNumber: "21FR88902",
    passportExpiry: "06. 02. 2030",
    ticketName: "LEO BERNARD",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 9.2,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-1904",
    line: "Systém tvrdí, že už jsem odbavený, ale u přepážky jsem poprvé.",
    interview: "Stejná palubní vstupenka byla vydána před deseti minutami jiné osobě.",
    observation: "Možné zneužití rezervace nebo duplicita identity. Sedadlo je již obsazené.",
    correct: "alert",
    reason: "Duplicitní odbavení vyžaduje okamžité ověření supervizorem.",
    riskTab: "docs"
  },
  {
    id: "coercion",
    name: "Sara Mendez",
    sprite: 2,
    nationality: "ŠPANĚLSKO",
    passportNumber: "PAE440918",
    passportExpiry: "27. 12. 2031",
    ticketName: "SARA MENDEZ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 8.4,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-7078",
    line: "Já… nevím, kdo kupoval letenku. Ten muž za mnou má můj telefon.",
    interview: "Cestující šeptem žádá, abyste muže za ní neupozorňovala.",
    observation: "Známky nátlaku a strachu. Použijte diskrétní bezpečnostní postup.",
    correct: "alert",
    reason: "Podezření na nátlak vyžaduje diskrétní přivolání bezpečnostního týmu.",
    riskTab: "talk"
  },
  {
    id: "exact-limit",
    name: "Boris Nikolić",
    sprite: 3,
    nationality: "SRBSKO",
    passportNumber: "SRB319800",
    passportExpiry: "30. 09. 2030",
    ticketName: "BORIS NIKOLIĆ",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 23.0,
    bagLimit: 23,
    bagScan: "BEZ NÁLEZU",
    bagTag: "PRG-5528",
    line: "Přesně dvacet tři. Ani gram navíc.",
    interview: "Cestující má platné dokumenty a jeden standardní kus zavazadla.",
    observation: "Hmotnost přesně odpovídá povolenému limitu.",
    correct: "approve",
    reason: "Přesných 23 kg je stále v limitu. Cestující může být odbaven.",
    riskTab: null
  },
  {
    id: "prepaid-instrument",
    name: "Émile Roux",
    sprite: 6,
    nationality: "FRANCIE",
    passportNumber: "18FR35018",
    passportExpiry: "05. 05. 2032",
    ticketName: "ÉMILE ROUX",
    flight: "OK 761",
    destination: "PARIS",
    time: "18:45",
    travelClass: "ECONOMY",
    bagWeight: 20.4,
    bagLimit: 23,
    bagScan: "HUDEBNÍ NÁSTROJ · UHRAZENO",
    bagTag: "PRG-9093",
    line: "Kytaru mám nahlášenou a speciální přepravu jsem zaplatil.",
    interview: "Rezervace obsahuje uhrazený nadrozměrný hudební nástroj.",
    observation: "Pouzdro je řádně označené a služba je potvrzena v systému.",
    correct: "approve",
    reason: "Speciální přeprava je uhrazena a všechny doklady jsou v pořádku.",
    riskTab: null
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const ui = {
  timer: $("#timer"), score: $("#score"), strikes: $("#strikes"), queue: $("#queuePeople"),
  currentSprite: $("#currentTravelerSprite"), travelerName: $("#travelerName"), travelerLine: $("#travelerLine"),
  passportCard: $("#passportCard"), passportName: $("#passportName"), nationality: $("#nationality"),
  passportNumber: $("#passportNumber"), passportExpiry: $("#passportExpiry"), mrz: $("#mrz"),
  ticketName: $("#ticketName"), ticketFlight: $("#ticketFlight"), ticketDestination: $("#ticketDestination"),
  ticketTime: $("#ticketTime"), ticketClass: $("#ticketClass"), bagWeight: $("#bagWeight"),
  bagLimit: $("#bagLimit"), bagScan: $("#bagScan"), bagTag: $("#bagTag"), scaleWeight: $("#scaleWeight"),
  interviewText: $("#interviewText"), observationText: $("#observationText"), caseNumber: $("#caseNumber"),
  caseTotal: $("#caseTotal"), resultPanel: $("#resultPanel"), resultStamp: $("#resultStamp"),
  resultTitle: $("#resultTitle"), resultReason: $("#resultReason"), nextButton: $("#nextButton"),
  intro: $("#introDialog"), summary: $("#summaryDialog"), startButton: $("#startButton"),
  restartButton: $("#restartButton"), highScoreIntro: $("#highScoreIntro"), soundButton: $("#soundButton"),
  scanButton: $("#scanButton"), scanner: $(".scanner-screen"), monitorStatus: $("#monitorStatus"),
  docsAlert: $("#docsAlert"), bagAlert: $("#bagAlert"), talkAlert: $("#talkAlert")
};

let state = { cases: [], index: 0, score: 0, strikes: 0, correct: 0, seconds: 240, answered: false, running: false, scanDone: false, sound: true, timerId: null, scanTimer: null };

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeMrz(name) {
  return `P<CZE<<${name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "<")}<<<<<<<<<<<<`;
}

function tone(frequency, duration = .08, type = "sine") {
  if (!state.sound) return;
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.055, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
    oscillator.onended = () => context.close();
  } catch (_) {}
}

function startGame() {
  clearInterval(state.timerId);
  clearTimeout(state.scanTimer);
  const anchors = ["approve", "deny", "fee", "alert"].map(action => shuffle(CASES.filter(item => item.correct === action))[0]);
  const anchorIds = new Set(anchors.map(item => item.id));
  const chosen = shuffle([...anchors, ...shuffle(CASES.filter(item => !anchorIds.has(item.id))).slice(0, 4)]);
  state = { ...state, cases: chosen, index: 0, score: 0, strikes: 0, correct: 0, seconds: 240, answered: false, running: true, scanDone: false, timerId: null, scanTimer: null };
  ui.caseTotal.textContent = state.cases.length.toString().padStart(2, "0");
  updateHud();
  renderCase();
  if (ui.intro.open) ui.intro.close();
  if (ui.summary.open) ui.summary.close();
  state.timerId = setInterval(tick, 1000);
  tone(520, .12, "triangle");
}

function tick() {
  if (!state.running) return;
  state.seconds -= 1;
  updateHud();
  if (state.seconds <= 0) finishGame(true);
}

function updateHud() {
  const minutes = Math.floor(Math.max(0, state.seconds) / 60);
  const seconds = Math.max(0, state.seconds) % 60;
  ui.timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  ui.score.textContent = String(Math.max(0, state.score)).padStart(4, "0");
  ui.strikes.textContent = Array.from({ length: 3 }, (_, index) => index < state.strikes ? "●" : "○").join(" ");
}

function renderQueue() {
  ui.queue.innerHTML = "";
  state.cases.slice(state.index + 1, state.index + 5).forEach((traveler, index) => {
    const person = document.createElement("div");
    person.className = `character queue-person sprite-${traveler.sprite}`;
    person.style.zIndex = String(5 - index);
    person.setAttribute("aria-label", `Ve frontě: ${traveler.name}`);
    ui.queue.appendChild(person);
  });
}

function renderCase() {
  const current = state.cases[state.index];
  if (!current) return finishGame(false);
  clearTimeout(state.scanTimer);
  state.answered = false;
  state.scanDone = false;
  ui.caseNumber.textContent = String(state.index + 1).padStart(2, "0");
  ui.currentSprite.className = `character current-traveler sprite-${current.sprite}`;
  void ui.currentSprite.offsetWidth;
  ui.currentSprite.style.animation = "none";
  requestAnimationFrame(() => { ui.currentSprite.style.animation = ""; });
  ui.travelerName.textContent = current.name.toUpperCase();
  ui.travelerLine.textContent = current.line;
  ui.passportCard.classList.toggle("missing", !!current.missingPassport);
  ui.passportName.textContent = current.name.toUpperCase();
  ui.nationality.textContent = current.nationality;
  ui.passportNumber.textContent = current.passportNumber;
  ui.passportExpiry.textContent = current.passportExpiry;
  ui.mrz.textContent = escapeMrz(current.name);
  ui.ticketName.textContent = current.ticketName;
  ui.ticketFlight.textContent = current.flight;
  ui.ticketDestination.textContent = current.destination;
  ui.ticketTime.textContent = current.time;
  ui.ticketClass.textContent = current.travelClass;
  ui.bagWeight.textContent = `${current.bagWeight.toFixed(1).replace(".", ",")} kg`;
  ui.bagLimit.textContent = `${current.bagLimit} kg`;
  ui.bagScan.textContent = "NEPROVEDENO";
  ui.bagTag.textContent = current.bagTag;
  ui.scaleWeight.textContent = `${current.bagWeight.toFixed(1)} kg`;
  ui.interviewText.textContent = `„${current.interview}“`;
  ui.observationText.textContent = current.observation;
  ui.monitorStatus.textContent = "KONTROLA DOKLADŮ";
  ui.resultPanel.className = "result-panel";
  ui.scanner.classList.remove("scanned", "scanning");
  ui.scanButton.disabled = false;
  ui.scanButton.textContent = "SPUSTIT RTG KONTROLU";
  [ui.passportExpiry, ui.passportName, ui.ticketName, ui.ticketFlight, ui.ticketDestination].forEach(node => node.classList.remove("warning-value"));
  if (current.highlight === "expiry") ui.passportExpiry.classList.add("warning-value");
  if (current.highlight === "name") { ui.passportName.classList.add("warning-value"); ui.ticketName.classList.add("warning-value"); }
  if (current.highlight === "flight") { ui.ticketFlight.classList.add("warning-value"); ui.ticketDestination.classList.add("warning-value"); }
  ui.docsAlert.textContent = current.riskTab === "docs" ? "•" : "";
  ui.bagAlert.textContent = current.riskTab === "bag" ? "•" : "";
  ui.talkAlert.textContent = current.riskTab === "talk" ? "•" : "";
  $$(".action").forEach(button => button.disabled = false);
  switchTab("docs");
  renderQueue();
}

function switchTab(tabName) {
  $$(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabName));
  $$(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === tabName));
}

function scanBag() {
  if (!state.running || state.answered) return;
  const current = state.cases[state.index];
  const scannedCase = state.index;
  state.scanDone = false;
  ui.scanner.classList.remove("scanned");
  ui.scanner.classList.add("scanning");
  ui.bagScan.textContent = "SKENUJI…";
  ui.scanButton.textContent = "VŽŽUUM… KONTROLUJI";
  ui.scanButton.disabled = true;
  ui.monitorStatus.textContent = "RTG · VŽŽUUM";
  tone(210, .34, "sawtooth");
  setTimeout(() => tone(720, .18, "triangle"), 260);
  state.scanTimer = setTimeout(() => {
    if (!state.running || state.index !== scannedCase) return;
    state.scanDone = true;
    ui.scanner.classList.remove("scanning");
    ui.scanner.classList.add("scanned");
    ui.bagScan.textContent = current.bagScan;
    ui.scanButton.textContent = "RTG KONTROLA DOKONČENA";
    const hasFinding = current.bagScan !== "BEZ NÁLEZU";
    ui.monitorStatus.textContent = hasFinding ? "RTG NÁLEZ · PROVĚŘTE" : "ZAVAZADLO V POŘÁDKU";
    tone(hasFinding ? 180 : 640, .16, "square");
  }, 680);
}

function decide(action) {
  if (!state.running || state.answered) return;
  const current = state.cases[state.index];
  state.answered = true;
  const correct = action === current.correct;
  if (correct) {
    const speedBonus = Math.min(40, Math.max(0, state.seconds - 80));
    state.score += 100 + speedBonus;
    state.correct += 1;
    ui.resultStamp.textContent = "SPRÁVNĚ";
    ui.resultTitle.textContent = "+100 bodů · Dobré rozhodnutí";
    ui.resultPanel.className = "result-panel show";
    ui.monitorStatus.textContent = "ROZHODNUTÍ POTVRZENO";
    tone(720, .14, "triangle");
    setTimeout(() => tone(920, .1, "triangle"), 100);
  } else {
    state.strikes += 1;
    state.score = Math.max(0, state.score - 50);
    ui.resultStamp.textContent = "CHYBA";
    ui.resultTitle.textContent = `Správně bylo: ${actionLabel(current.correct)}`;
    ui.resultPanel.className = "result-panel show wrong";
    ui.monitorStatus.textContent = "CHYBNÉ ROZHODNUTÍ";
    tone(145, .28, "sawtooth");
  }
  ui.resultReason.textContent = current.reason;
  $$(".action").forEach(button => button.disabled = true);
  updateHud();
  if (state.strikes >= 3) ui.nextButton.textContent = "UKONČIT SMĚNU";
  else if (state.index === state.cases.length - 1) ui.nextButton.textContent = "UZAVŘÍT LET";
  else ui.nextButton.innerHTML = "DALŠÍ CESTUJÍCÍ <kbd>Enter</kbd>";
  requestAnimationFrame(() => ui.nextButton.focus({ preventScroll: true }));
}

function actionLabel(action) {
  return ({ approve: "ODBAVIT", deny: "ZAMÍTNOUT", fee: "DOPLATEK", alert: "PŘIVOLAT POMOC" })[action];
}

function nextCase() {
  if (!state.answered) return;
  if (state.strikes >= 3) return finishGame(false);
  state.index += 1;
  if (state.index >= state.cases.length) return finishGame(false);
  renderCase();
}

function finishGame(timedOut) {
  state.running = false;
  clearInterval(state.timerId);
  const completed = state.index >= state.cases.length - 1 && state.answered && state.strikes < 3 && !timedOut;
  const timeBonus = completed ? state.seconds * 2 : 0;
  state.score += timeBonus;
  const highScore = Math.max(Number(localStorage.getItem("terminal-please-highscore") || 0), state.score);
  localStorage.setItem("terminal-please-highscore", String(highScore));
  $("#summaryScore").textContent = String(state.score).padStart(4, "0");
  $("#correctSummary").textContent = `${state.correct} / ${state.cases.length}`;
  $("#mistakeSummary").textContent = String(state.strikes);
  $("#timeBonusSummary").textContent = `+${timeBonus}`;
  if (timedOut) {
    $("#summaryLabel").textContent = "ČAS VYPRŠEL";
    $("#summaryTitle").textContent = "PŘEPÁŽKA UZAVŘENA";
    $("#summaryText").textContent = "Let se uzavřel dřív, než jste stihli odbavit celou frontu. Rychlost je důležitá, přesnost ještě víc.";
  } else if (state.strikes >= 3) {
    $("#summaryLabel").textContent = "TŘI CHYBY";
    $("#summaryTitle").textContent = "STŘÍDÁ VÁS SUPERVIZOR";
    $("#summaryText").textContent = "Směna skončila předčasně. Příště kontrolujte všechny záložky a porovnávejte jména, data i číslo letu.";
  } else {
    $("#summaryLabel").textContent = "SMĚNA DOKONČENA";
    $("#summaryTitle").textContent = state.correct === state.cases.length ? "BEZCHYBNÝ ODLET" : "LET UZAVŘEN";
    $("#summaryText").textContent = state.correct === state.cases.length ? "Výborná práce. Všichni cestující byli vyřešeni správně a let může bezpečně odletět." : "Let je uzavřen. Většina cestujících je odbavena, ale v hlášení zůstaly chyby k prověření.";
  }
  ui.summary.showModal();
  tone(completed ? 620 : 170, .3, completed ? "triangle" : "sawtooth");
}

function showIntro() {
  ui.highScoreIntro.textContent = String(Number(localStorage.getItem("terminal-please-highscore") || 0)).padStart(4, "0");
  ui.intro.showModal();
}

$$('.tab').forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
$$('.action').forEach(button => button.addEventListener('click', () => decide(button.dataset.action)));
ui.scanButton.addEventListener('click', scanBag);
ui.nextButton.addEventListener('click', nextCase);
ui.startButton.addEventListener('click', startGame);
ui.restartButton.addEventListener('click', startGame);
ui.soundButton.addEventListener('click', () => {
  state.sound = !state.sound;
  ui.soundButton.classList.toggle('muted', !state.sound);
  ui.soundButton.setAttribute('aria-label', state.sound ? 'Vypnout zvuk' : 'Zapnout zvuk');
  if (state.sound) tone(520, .08, 'triangle');
});

window.addEventListener('keydown', event => {
  if (ui.intro.open || ui.summary.open) return;
  const map = { '1': 'approve', '2': 'deny', '3': 'fee', '4': 'alert' };
  if (map[event.key]) decide(map[event.key]);
  if (event.key === 'Enter') nextCase();
});

window.addEventListener('DOMContentLoaded', showIntro);

function registerGameTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = (tool) => {
    try { void Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {}
  };
  register({
    name: 'read_checkin_shift',
    title: 'Zkontrolovat stav směny',
    description: 'Vrátí aktuální čas, skóre, počet chyb a veřejné údaje právě řešeného případu.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      const current = state.running ? state.cases[state.index] : null;
      return {
        running: state.running,
        caseNumber: current ? state.index + 1 : null,
        totalCases: state.cases.length,
        traveler: current ? current.name : null,
        score: state.score,
        strikes: state.strikes,
        secondsRemaining: state.seconds,
        answered: state.answered
      };
    }
  });
  register({
    name: 'start_checkin_shift',
    title: 'Zahájit směnu',
    description: 'Spustí novou čtyřminutovou směnu a zobrazí prvního cestujícího.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      startGame();
      return { started: true, totalCases: state.cases.length, secondsRemaining: state.seconds };
    }
  });
  register({
    name: 'decide_checkin_case',
    title: 'Rozhodnout check-in případ',
    description: 'Provede stejné rozhodnutí jako viditelná tlačítka Odbavit, Zamítnout, Doplatek nebo Přivolat pomoc.',
    inputSchema: {
      type: 'object',
      properties: { action: { type: 'string', enum: ['approve', 'deny', 'fee', 'alert'] } },
      required: ['action'],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!state.running) throw new Error('Směna není spuštěná.');
      if (state.answered) throw new Error('Případ už byl rozhodnut.');
      if (!input || !['approve', 'deny', 'fee', 'alert'].includes(input.action)) throw new Error('Neplatná akce.');
      const before = state.score;
      decide(input.action);
      return { accepted: true, scoreChange: state.score - before, score: state.score, strikes: state.strikes };
    }
  });
}

registerGameTools();
