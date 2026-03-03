# Redi Frontend — MVP Demo

Web interface for Redi's MVP. Built with Next.js and shadcn/ui components, it covers the full app flow: user registration, savings deposit, installment purchases, and merchant panel.

---

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS
- **Components:** shadcn/ui
- **Package manager:** npm

---

## Project structure

```
├── app/                  # Routes and main layout (Next.js App Router)
├── components/
│   ├── redi/             # App-specific components
│   │   ├── screen-router.tsx       # Main screen router
│   │   ├── user-dashboard.tsx      # User dashboard
│   │   ├── user-register.tsx       # Registration
│   │   ├── user-deposit.tsx        # Reserve deposit
│   │   ├── user-payments.tsx       # Payments and installments
│   │   ├── user-profile.tsx        # User profile
│   │   ├── user-withdraw.tsx       # Withdrawal
│   │   ├── user-welcome.tsx        # Welcome screen
│   │   ├── role-selector.tsx       # Role selector (user / merchant)
│   │   └── profile-avatar.tsx      # Profile avatar
│   └── ui/               # shadcn/ui base components
├── context/
│   └── app-context.tsx   # Global app state
├── hooks/                # Custom hooks
├── lib/
│   ├── translations.ts   # Texts and translations
│   └── utils.ts          # General utilities
├── public/               # Static assets and images
├── styles/
│   └── globals.css       # Global styles
└── .gitignore
```

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/redi-latam/redi-front.git
cd redi-front
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment variables

No environment variables are required to run the demo.

---

## Git workflow

We work with feature branches. Do not push directly to `main`.

```bash
# Create a new branch
git checkout -b feat/feature-name

# Push your branch
git push origin feat/feature-name

# Open a Pull Request on GitHub targeting main
```

Every branch requires at least one review before merging into `main`.

### Commit convention

```
feat: new feature
fix: bug fix
chore: maintenance tasks
refactor: code changes with no functional impact
docs: documentation changes
```

---

## Live demo

🔗 [View demo on Vercel](https://redi-front.vercel.app/)
---

## About

Built during **Impacta Bootcamp**, organized by Blockchain Acceleration Foundation, Stellar Development Foundation, and Trustless Work.

📧 Contact: redi.latam@gmail.com  
🐙 Organization: [github.com/redi-latam](https://github.com/redi-latam)
