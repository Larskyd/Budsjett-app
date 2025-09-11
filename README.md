Budsjett Applikasjon
En moderne React-applikasjon for personlig budsjettplanlegging, spesielt tilpasset studenter

Inntektshåndtering: 
Automatisk beregning av månedlig støtte fra Lånekassen med mulighet for ekstra inntekt
Utgiftssporing: Forhåndsdefinerte utgiftskategorier (Leie, Mat, Fritid, Transport)
Sanntidsberegning: Automatisk oppdatering av totale inntekter, utgifter og overskudd
Visuell fremstilling: Interaktivt kakediagram som viser utgiftsfordeling

Teknologier:
React 18 rammeverk
Custom Hooks
Recharts for data-visualisering
CSS3 for styling og layout
Vite build tool og development server

Prosjektstruktur
src/
├── components/
│   ├── Layout/
│   │   ├── Header/
│   │   └── Footer/
│   └── Budsjett/
│       ├── BudsjettDashboard/
│       ├── IntektSeksjon/
│       ├── UtgiftSeksjon/
│       ├── BudsjettOppsummering/
│       └── BudsjettGraf/
├── hooks/
│   └── useBudsjett.js
├── utils/
│   ├── formatters.js
│   └── Constants.js
└── App.jsx

Komponenter
BudsjettDashboard
Hovedkomponent som over ser alle andre komponenter og håndterer state.

IntektSeksjon
Fast månedlig støtte fra Lånekassen (15,169 kr)
Input for ekstra inntekt (jobb, stipend, etc.)
Checkbox for ekstra lån/støtte (4,572 kr)

UtgiftSeksjon
Fire forhåndsdefinerte utgiftskategorier
Dynamisk tillegging av nye utgiftskategorier
To-kolonne layout: faste utgifter til venstre, nye utgifter til høyre

BudsjettOppsummering
Viser totale inntekter, utgifter og beregnet overskudd med fargekoding.

BudsjettGraf
Interaktivt kakediagram som visualiserer utgiftsfordeling basert på Recharts.

Installation

git clone <repository-url>

# Naviger til prosjektmappe
cd budsjett-app

# Installer dependencies
npm install

# Start development server
npm run dev
Bruk

Sett inntekter: Legg inn ekstra inntekt og velg om du har ekstra lån
Legg til utgifter: Fyll inn beløp for de forhåndsdefinerte kategoriene
Tilpass utgifter: Legg til egne utgiftskategorier ved behov
Se resultater: Overskudd/underskudd beregnes automatisk og vises visuelt

Utviklerfunksjoner
Custom Hook: useBudsjett
Håndterer all state logic for budsjettet:

State management for inntekter og utgifter
Automatiske beregninger
Data formatering for grafer

Formattering
Bruker formatKr() utility for konsistent visning av kronebeløp.
Responsiv Design
CSS Grid og Flexbox for optimal layout på alle skjermstørrelser.
Fremtidige forbedringer



