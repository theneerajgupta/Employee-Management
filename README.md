````markdown
# Application-Management — MERN (Local Development)

A collaborative **Application Management** system focused on processing employee applications: multi-step forms, application submission & processing, role-based access for **Employee** and **Admin**, dashboards and insights. This README targets **local-only development**: frontend (Vite + React + TypeScript + TailwindCSS + DaisyUI), backend (Node + Express + Mongoose), database (local MongoDB). Use Postman for API testing.

---

## ✅ Table of Contents
- [ ] Project overview & goals
- [ ] Features
- [ ] Application Modules / Use Cases
- [ ] Tech stack (with short opinion)
- [ ] System architecture (local-only)
- [ ] Installation & setup (step-by-step)
- [ ] Folder structure (recommended)
- [ ] Environment variables & sample `.env`
- [ ] API documentation — *placeholder (instructions)*
- [ ] Usage instructions — *placeholder (instructions)*
- [ ] Contributing — *placeholder (instructions)*
- [ ] Roadmap / Future enhancements — *placeholder (instructions)*
- [ ] License — *placeholder (instructions)*
- [ ] Acknowledgements / Credits — *placeholder (instructions)*

---

# 1. Project overview & goals
- [ ] **Goal:** Build a robust employee-centric application-management web app to create, submit, view and process different types of employee applications (travel, leave, harassment reports, procurement, expenses) with a responsive, componentized UI and role-based access limited to **Employee** and **Admin**.
- [ ] **Primary goals while developing locally:**
  - Fast local iteration with Vite + React + TypeScript
  - Reusable, accessible UI using TailwindCSS + DaisyUI
  - Clean REST API in Express with Mongoose models
  - Local MongoDB during development; option to switch to Atlas later
  - Postman for API testing and sharing team collections

---

# 2. Features
- [ ] Dashboard for insights and quick navigation (aggregates: pending apps, recent submissions, charts)
- [ ] Responsive navigation and layouts
- [ ] User authentication (email/password) with JWT
- [ ] SSO placeholder hooks (OAuth/OIDC) — implemented later if needed
- [ ] Two user roles: **Employee** (submitter) and **Admin** (reviewer/approver)
- [ ] Create / Generate / Submit multi-step forms
- [ ] View, search, filter, and process applications (approve/reject/comment)
- [ ] File uploads (photo, signature, attachments) — local during dev
- [ ] Profile page, themes, and form autofill options
- [ ] Postman-ready API endpoints for testing

---

# 3. Application Modules / Use Cases

These are the **multi-step** application types the system will support. Each application is designed to exercise a wide variety of input controls and UX patterns so the platform can handle virtually every kind of form input you might need. Roles are limited to **Employee** (submitter) and **Admin** (reviewer/approver).

---

### Personal Profile Setup (Employee)
**Purpose:** Capture full employee profile as a multi-part onboarding / profile update flow.
- **Steps:**
  1. **Basic Info** — text inputs (first, middle, last name), date picker (DOB), email, phone (with input mask), radio (gender), select (marital status).
  2. **Address** — repeated address blocks (line1/2/3, city, state, country dropdown, postal code), autocomplete for city/state, validation for postal code.
  3. **Contacts & Emergency** — repeatable contacts list (name, relation, phone), checkbox to mark primary contact.
  4. **Documents** — file upload (photo, signature image, ID proof - multiple files), client-side preview, max file-size validation.
  5. **Review & Submit** — read-only summary, signature-pad confirmation, save-as-draft option.

**Input types covered:** text, email, masked phone, date, radio, select, autocomplete, file uploads (single & multiple), repeatable arrays, signature pad.

---

### Travel Approval Request (Employee → Admin)
**Purpose:** Request travel with cost planning and optional advance payment or reimbursement.
- **Steps:**
  1. **Trip Details** — destination (map picker + autocomplete), purpose (select + free-text), travelers (repeatable employee selector), date range picker (start/end), radio for travel type (domestic/international).
  2. **Budget & Costs** — dynamic line-items (transport, lodging, per diem) with numeric inputs, currency selector, auto-sum calculation, option to request an **advance payment** (toggle).
  3. **Approvals & Itinerary** — search-and-select approver, attach itinerary files, travel policy checkbox, conditional visa section when international chosen.
  4. **Payment Details** — if advance requested: payment method (bank transfer / payroll advance), bank details form (IBAN/Account, bank name), one-time payment scheduling (date picker). Do **not** collect card numbers in dev; use placeholder for gateway integration.
  5. **Review & Submit** — validation summary, estimated total, submit and optionally save as draft.

**Input types covered:** map picker, autocomplete, date-range, numeric inputs, currency, repeatable line items, toggles, conditional fields, file uploads, search/select, bank-detail forms.

---

### Workplace Harassment Complaint (Employee → Admin)
**Purpose:** Secure, detailed incident reporting with evidence and optional anonymity.
- **Steps:**
  1. **Incident Details** — rich-text editor for narrative (WYSIWYG), date & time picker for incident, select dropdowns (type, severity, department).
  2. **Involved Parties** — search-and-select employees (multiple), anonymous toggle (if enabled, hide reporter identity fields and mark in metadata).
  3. **Evidence** — multiple file uploads (images, PDFs, audio/video), optional transcript or notes field, ability to redact sensitive text before upload.
  4. **Witnesses & Statements** — repeatable witness entries (name, contact, statement as text or file), consent checkboxes.
  5. **Review & Submit** — admin-only escalation checkbox, confidentiality acknowledgment, save-as-draft and submit options.

**Input types covered:** rich text, file uploads (large & varied types), audio/video uploads, conditional anonymity handling, repeatable sections, long-text inputs.

---

### Leave Request & Salary Advance (Employee → Admin)
**Purpose:** Combined leave application and optional salary advance/payment request.
- **Steps:**
  1. **Leave Details** — leave type (select), single date or date-range picker, recurrence (if repeating leave), reason (text area).
  2. **Coverage** — delegate selection (search employee), checklist for handover tasks (checkbox list), calendar integration preview.
  3. **Salary Advance (optional)** — toggle to request advance; if enabled: numeric input for amount, currency selector, payoff schedule (number of installments), simple interest/fee calculator shown live.
  4. **Attachments** — medical certificate upload (conditional if sick leave), approval notes.
  5. **Review & Submit** — show calculated repayment schedule, submit for approval.

**Input types covered:** date, date-range, recurring rules, checkboxes, search/select, numeric & currency inputs, simple finance calculations, conditional file uploads.

---

### Equipment Purchase / Vendor Engagement Request (Employee → Admin)
**Purpose:** Request procurement of equipment or services with vendor selection and payment terms.
- **Steps:**
  1. **Request Details** — item/service description (text), quantity (number), unit price (number + currency), reason (text area), priority (select).
  2. **Vendor & Quotes** — vendor autocomplete/search, upload vendor quote(s) (file), multiple quote entries (repeatable), evaluation matrix (radio/select for preferred quote).
  3. **Budget Approval** — cost summary (auto-calc), funding source selector (cost center drop-down), attachments (compliance certificates).
  4. **Payment Terms** — payment method (one-time or staged), stage definitions (repeatable: percent/amount + due date), tax/VAT inputs, final estimated total including taxes.
  5. **Review & Submit** — admin budget check, approval workflow trigger, ability to mark as urgent.

**Input types covered:** numeric, currency, repeatable quote entries, file uploads, multi-selects, staged payment schedules, tax calculations.

---

### Expense Reimbursement (Employee → Admin)
**Purpose:** Submit past expenses for reimbursement with receipts and category tagging.
- **Steps:**
  1. **Expense Summary** — repeatable expense rows (date, category select, merchant text, amount numeric, currency), auto-sum totals.
  2. **Receipts & Proof** — attach receipt images/PDFs per line-item, optional OCR-assisted filename parsing (future feature).
  3. **Policy Compliance** — checkboxes for policy confirmations, conditional flags if amount > policy limit (auto-flag for admin review).
  4. **Payment Preference** — bank account selection or payroll credit (select saved bank accounts), confirm payout currency and conversion notes.
  5. **Review & Submit** — total reimbursement calculation, submit.

**Input types covered:** repeatable tables, per-row file uploads, numeric/currency, conditional flags, policy validation rules, payout preference forms.

---

## Cross-form UX & Functional Requirements
- **Multi-step UX:** each application must have a progress indicator, save-as-draft, client-side validation and server-side validation on submit.
- **Conditional fields:** show/hide fields based on earlier answers (e.g., visa fields only for international travel).
- **Repeatable sections:** support arrays of items (travellers, expenses, quotes, witnesses).
- **Attachments:** support single & multiple files, preview, size/type validation, server-side virus-scan placeholder.
- **Calculations:** inline arithmetic (sums, taxes, repayment schedules) and currency handling.
- **Security & Privacy:** sensitive forms (harassment) support anonymity and restricted visibility; audit logs for edits and submissions.
- **Integration points (placeholders):** payment gateway hooks, OCR for receipts, calendar sync, map provider for geolocation.
- **Schema & Versioning:** store form schema versions so older submissions remain valid when forms evolve.

---

# 4. Tech Stack (and opinion)

**Frontend**
- React (library)  
- Vite (dev tooling & bundler)  
- TypeScript (type safety)  
- TailwindCSS (utility-first styling)  
- **DaisyUI** (component layer on top of Tailwind; speeds UI building)

**Backend**
- Node.js + Express  
- Mongoose (MongoDB ODM) recommended

**Database**
- MongoDB (local during dev; option: MongoDB Atlas later)

**Tools**
- Postman (API testing)  
- ESLint + Prettier (code quality)  
- Optional: concurrently / nodemon for dev scripts

**Opinion (short):** This stack is well-suited to your requirements. Vite + React + TS gives fast DX and type-safety; Tailwind + DaisyUI accelerates UI building while staying customizable. MongoDB fits flexible form data. For local dev, this combo is lightweight and fast. No Redis or Docker required for local-only testing.

---

# 5. System architecture (local-only)

**Local flow**
1. `client` runs on `http://localhost:5173` (Vite dev server).  
2. `server` runs on `http://localhost:5000` (Express).  
3. Client calls server endpoints (e.g. `http://localhost:5000/api/auth/login`).  
4. Server reads/writes data to local MongoDB instance (mongodb://localhost:27017/...).

---

# 6. Installation & Setup (step-by-step)

> Assumes: Node (v16+ recommended), npm or yarn, and MongoDB (local) installed.

## A. Repo structure (root contains `client/` and `server/`)

```bash
# clone the repo
git clone <your-repo-url>
cd <your-repo-folder>
````

## B. Install & run backend (server)

```bash
# open a terminal for server
cd server

# install dependencies
npm install

# dev script (example)
# - uses nodemon to watch files and restart
npm run dev

# Example package.json scripts (server)
# "scripts": {
#   "dev": "nodemon src/index.ts",
#   "build": "tsc",
#   "start": "node dist/index.js"
# }
```

Backend default: `http://localhost:5000` (adjustable via PORT env var)

## C. Install & run frontend (client)

```bash
# open another terminal for frontend
cd client

# install deps
npm install

# dev server (Vite)
npm run dev

# Example package.json scripts (client)
# "scripts": {
#   "dev": "vite",
#   "build": "vite build",
#   "preview": "vite preview"
# }
```

Frontend default: `http://localhost:5173` (Vite will show the exact URL)

## D. Run both at once (root-level helper)

Install `concurrently` in root or use an npm workspace script:

```json
# root/package.json scripts example
"scripts": {
  "dev": "concurrently \"npm run dev --prefix server\" \"npm run dev --prefix client\""
}
```

Then run from root:

```bash
npm run dev
```

## E. MongoDB local

**Option 1 — Local MongoDB**

* Install MongoDB Community edition for your OS.
* Start the daemon:

```bash
# macOS (brew)
brew services start mongodb-community

# Linux/Windows
# run `mongod` or use the OS-specific service start
mongod --config /usr/local/etc/mongod.conf
```

**Option 2 — MongoDB Atlas (optional later)**

* Create cluster, get connection string, plug into `.env.MONGO_URI`.

---

# 7. Folder structure (recommended)

```
/ (root)
│
├─ client/                     # Frontend (React + Vite + TypeScript)
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ routes/
│  │  ├─ services/             # API fetch wrappers
│  │  ├─ styles/
│  │  └─ main.tsx
│  └─ package.json
│
├─ server/                     # Backend (Express + TypeScript/JS)
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/               # Mongoose schemas: User, Application, Attachment, etc.
│  │  ├─ routes/
│  │  ├─ middleware/           # auth, role-check, error-handler
│  │  ├─ utils/                # helpers, validators
│  │  └─ index.ts
│  └─ package.json
│
├─ .env.example
├─ README.md
└─ package.json (optional root)
```

**Mongoose models to create**

* `User` (roles: employee, admin)
* `Application` (type, formData, status, assignedTo, history)
* `Attachment` (filename, path, mimetype, uploadedBy)
* `Audit` or `Comment` (optional)

---

# 8. Environment variables & sample `.env`

Create `.env` files in the `server/` directory (do **not** commit `.env` to git).

`server/.env` (example)

```env
# Server
PORT=5000
NODE_ENV=development

# Mongo
MONGO_URI=mongodb://localhost:27017/app-management

# Auth
JWT_SECRET=somelongrandomsecretkey
JWT_EXPIRES_IN=7d

# File uploads
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880 # 5MB

# Frontend
CLIENT_URL=http://localhost:5173
```

`client/.env` (Vite uses `VITE_` prefix)

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_TITLE="Application Management"
```

**Notes**

* Replace `JWT_SECRET` with a securely generated secret.
* For local file uploads, `UPLOAD_DIR` can be a relative path under `server/`.
* Keep sensitive secrets out of source control.

---

# 9. API documentation — *placeholder (instructions)*

> **What to add here:** Provide a concise API reference or link to your Postman collection. For each major endpoint include method, URL, auth requirement, request body example, and sample response.
>
> **Suggested structure to add:**
>
> * Authentication
>
>   * `POST /api/auth/register` — body: `{ name, email, password }`
>   * `POST /api/auth/login` — returns `{ token }`
> * Users
>
>   * `GET /api/users/:id` — admin-only
>   * `PUT /api/users/:id`
> * Applications
>
>   * `POST /api/applications` — create multi-step application
>   * `GET /api/applications` — filter & pagination
>   * `GET /api/applications/:id`
>   * `PATCH /api/applications/:id/status` — approve/reject
> * Attachments
>
>   * `POST /api/uploads` — multipart/form-data
>
> Optionally paste your exported Postman collection link or include JSON under `/docs/postman_collection.json`.

---

# 10. Usage instructions — *placeholder (instructions)*

> **What to add here:** End-user steps and admin workflows.
>
> **Examples to include later:**
>
> * How to create an account (employee flow)
> * How admins approve/reject applications
> * How to upload attachments and view logs
> * Dashboard chart interactions (filters, date range)
> * How to switch themes or edit profile
>
> Include screenshots or short GIFs for key workflows if possible.

---

# 11. Contributing — *placeholder (instructions)*

> **What to add here:** Team workflow & code standards.
>
> **Suggested items:**
>
> * Branching strategy (e.g., `main`, `develop`, `feature/*`)
> * PR template and required checks (lint, tests)
> * Commit message convention (Conventional Commits)
> * Styling rules (ESLint + Prettier configs)
> * How to run tests and add new ones
> * Who reviews PRs and how to request reviews

---

# 12. Roadmap / Future enhancements — *placeholder (instructions)*

> **What to add here:** Short-term and long-term tasks.
>
> **Examples to include:**
>
> * Add SSO (Google/SSO via OAuth2) and integrate role sync
> * Notifications (email/SMS) for approvers
> * Analytics & export (CSV/XLS)
> * Multi-tenant support
> * Audit trail & advanced access controls
> * Move to cloud hosting + CI/CD pipelines when ready

---

# 13. License — *placeholder (instructions)*

> **What to add here:** Choose a license for the repo.
>
> **Examples:** MIT, Apache-2.0, GPL-3.0.
>
> * Add a short line: `This project is licensed under the MIT License - see the LICENSE file for details.`
> * Include a `LICENSE` file at repo root.

---

# 14. Acknowledgements / Credits — *placeholder (instructions)*

> **What to add here:** Give credit to libraries, contributors, design assets.
>
> **Examples to include:**
>
> * UI inspirations / component libraries (DaisyUI, Tailwind)
> * Third-party icons or assets
> * Team contributors & roles
> * Links to any external APIs or references used

---

# Additional notes & best practices

## Authentication & Security

* Use **JWT** for API auth (stateless) during development. Store token in memory or secure http-only cookie in future.
* Protect routes with middleware checking token & role.
* Validate inputs on server side with a library (e.g., Joi, Zod).
* Hash passwords using bcrypt.

## File uploads

* Accept multipart/form-data on server with `multer`.
* Save files locally under `server/uploads` during dev (ensure this path is in `.gitignore`).
* Validate file types & sizes server-side.

## Forms & UI

* Build multi-step forms as controlled components with local state or a centralized form context.
* Use DaisyUI components as primitives — customize via Tailwind config where needed.
* Keep accessible semantics (labels, aria- attributes).

## Dev productivity

* Use `nodemon` for auto-restart on server changes.
* Use `concurrently` or an npm workspace to run both client & server easily.
* Add ESLint + Prettier configs at repo root to maintain style consistency.

---

# Quick-start cheat sheet

```bash
# Clone
git clone <repo-url>
cd <repo-folder>

# Server -> in one terminal
cd server
npm install
cp .env.example .env    # edit .env
npm run dev

# Client -> in another terminal
cd client
npm install
npm run dev
```

Visit the frontend (Vite dev server). Use Postman to test API endpoints at `http://localhost:5000/api/...`.

---

If you want, I can now:

* generate a ready-to-paste `.env.example` file,
* add minimal starter Mongoose model templates for `User` and `Application`,
* create `package.json` / `tsconfig.json` / `vite.config.ts` templates for client/server,
* or update the README to include CI/dev scripts.

Which of those should I produce next?

```

::contentReference[oaicite:0]{index=0}
```
