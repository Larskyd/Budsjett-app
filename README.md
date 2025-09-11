# Budsjett App

En moderne React-applikasjon for personlig budsjettplanlegging, spesielt tilpasset studenter.

## Funksjoner
### Inntektshåndtering
- Automatisk beregning av månedlig støtte fra Lånekassen 
- Legg til ekstra inntekt (jobb, stipend, etc.)
- Mulighet for ekstra lån/støtte

### Utgift
- Forhåndsdefinerte kategorier: Leie, Mat, Fritid, Transport

### Sanntidsberegning
- Totale inntekter, utgifter og overskudd oppdateres automatisk

### Visualisering
- Interaktivt kakediagram som viser utgiftsfordeling (Recharts)

---

## Teknologier
- **React 18** – Frontend-rammeverk  
- **Custom Hooks** – State management (`useBudsjett`)  
- **Recharts** – Data-visualisering  
- **CSS3** – Styling og layout  
- **Vite** – Build tool og development server  

---

## Prosjektstruktur
src/
├── components/

│ ├── Layout/

│ │   ├── Header/

│ │   └── Footer/

│ └── Budsjett/

│   ├── BudsjettDashboard/

│   ├── IntektSeksjon/

│   ├── UtgiftSeksjon/

│   ├── BudsjettOppsummering/

│   └── BudsjettGraf/

├── hooks/

│   └── useBudsjett.js

├── utils/

│   ├── formatters.js

│   └── Constants.js

└── App.jsx

## Installasjon
```bash
# Klon repository
git clone (https://github.com/Larskyd/Budsjett-app.git)

# Naviger til prosjektmappe
cd budsjett-app

# Installer dependencies
npm install

# Start development server
npm run dev
