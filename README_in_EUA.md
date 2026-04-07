# 🧪 OrangeHRM Test Automation Suite 🚀

![Cypress Automation Banner](file:///C:/Users/User/.gemini/antigravity/brain/03d00447-51a6-49cf-9e70-3f0d63c0a683/cypress_automation_banner_1775536780008.png)

[![Cypress](https://img.shields.io/badge/-Cypress-6DB33F?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Project%20Finalized-brightgreen?style=for-the-badge)](https://github.com/luizanjos88)

This repository contains a comprehensive End-to-End (E2E) automated testing suite for the **OrangeHRM** platform. The project was developed with a focus on scalability, maintainability, and reliability, following QA Engineering best practices.

---

## 🎯 Project Objective

Validate core user journeys within the OrangeHRM system, ensuring that critical functionalities (Login, User Management, PIM, My Info) operate correctly across various scenarios, minimizing regression risks and increasing code confidence.

## ✨ Technical Highlights

- **🏛️ Page Object Model (POM):** Strict implementation for separation of concerns, ensuring that UI changes don't break tests across the board.
- **🎲 Random Data Generation:** Leverages `@faker-js/faker` and `Chance.js` to create unique users, IDs, and profile data for every execution.
- **📊 Detailed Reporting:** Integrated with **Mochawesome** to generate interactive visual reports that streamline failure analysis.
- **🛡️ Stability Testing:** Configured with `cypress-repeat` to detect *flaky tests* through multiple executions.
- **🛠️ Custom Commands & Utils:** Optimized helper functions for handling complex date pickers and UI elements.

---

## 📂 Ecosystem Structure

```text
├── cypress/
│   ├── e2e/               # Test Specs (BDD-style scenarios)
│   │   ├── admin.spec.cy.js    # Administrator management
│   │   ├── login.spec.cy.js    # Authentication flows
│   │   ├── pimAdd.spec.cy.js   # New employee registration
│   │   └── user.spec.cy.js     # User profile and info
│   ├── pages/             # Page Objects (UI Abstraction)
│   │   ├── loginPage.js        # Login interactions
│   │   ├── pimPage.js          # PIM forms
│   │   └── utils.js            # Global helpers
│   └── reports/           # HTML Reports (Execution snapshots)
├── package.json           # Scripts & Dependencies
└── cypress.config.js      # Engine Configuration
```

---

## 🚀 How to Run

### 1. Clone and Install
```bash
git clone https://github.com/luizanjos88/primeiro-passos-cypress.git
cd primeiro-passos-cypress
npm install
```

### 2. Run Tests (Interactive)
Ideal for development and debugging.
```bash
npx cypress open
```

### 3. Run Tests (Headless Mode + Report)
Ideal for Continuous Integration (CI).
```bash
npx cypress run
npm run report
```

### 4. Check Stability
Runs the tests 5 consecutive times to ensure no intermittency.
```bash
npm run test:repeat
```

---

## 📊 Viewing Results

After running the `npm run report` command, an interactive file will be generated at:
`cypress/reports/mochawesome.html`

---

## 🛠️ Elite Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **Cypress 15** | E2E Testing Framework |
| **Faker.js** | Realistic Data Generation |
| **Chance** | Randomness Helpers |
| **Mochawesome** | Visual Reporting |
| **JavaScript** | Base Language |

---

## 👨‍💻 Author

**Luiz Carlos**
QA Automation Engineer constantly evolving.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luizcarloos)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/luizanjos88)

---
*This project is part of my automated testing portfolio. Feel free to explore and suggest improvements!*