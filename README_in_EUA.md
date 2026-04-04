# Cypress E2E Testing for OrangeHRM

This project is an automated End-to-End (E2E) testing framework designed for the **OrangeHRM** application, focusing specifically on user authentication, dashboard navigation, and admin module functionalities (such as user management).

Built with **Cypress**, this repository leverages modern software testing patterns, including the **Page Object Model (POM)** for improved code maintainability and reusability, and utilizes mock data generators to ensure robust test coverage.

## 🚀 Key Features

- **Page Object Model (POM):** Clean separation between test logic and element locators within the `cypress/pages` directory.
- **Dynamic Data Generation:** Integration of `@faker-js/faker` and `chance` libraries to create varied, realistic test data dynamically (e.g., generating distinct usernames and passwords).
- **Automated Reporting:** Includes Mochawesome report generator to output beautiful, easy-to-read HTML testing reports.
- **Repeat Testing:** Leverages `cypress-repeat` allowing you to re-run test suites multiple times automatically to check for test flakiness.

## 🛠️ Technology Stack

- **[Cypress](https://www.cypress.io/):** Next-generation front-end testing tool built for the modern web.
- **[Chance.js](https://chancejs.com/):** Random generator helper for Javascript.
- **[Faker JS](https://fakerjs.dev/):** Generate massive amounts of fake (but realistic) data for testing.
- **[Mochawesome](https://github.com/adamgruber/mochawesome):** Custom HTML reporter for Cypress.

## 📂 Project Structure

```text
├── cypress/
│   ├── e2e/               # Test specification files (*.spec.cy.js)
│   │   ├── admin.spec.cy.js
│   │   ├── login.spec.cy.js
│   │   └── user.spec.cy.js
│   ├── pages/             # Page Object Model classes
│   │   ├── adminPage.js
│   │   ├── dashboardPage.js
│   │   └── ...
│   └── reports/           # Generated Test Reports
├── package.json           # Node.js dependencies and custom npm scripts
└── cypress.config.js      # Main Cypress configuration file
```

## ⚙️ Prerequisites

To run this project, make sure you have the following installed on your machine:
- **[Node.js](https://nodejs.org/en)** (version 14 or higher recommended)
- **NPM** (which comes with Node.js)

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd primeiro-passos-cypress
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

## ▶️ Running Tests

### Open the Cypress UI (Interactive Mode)
To run tests using the interactive Cypress Test Runner:
```bash
npx cypress open
```

### Run Tests in Headless Mode
To execute the tests in the background (headless mode) without opening a browser GUI:
```bash
npx cypress run
```

### Run Flaky Test Checks (Multiple Executions)
If you wish to run your tests multiple times in a row to catch flaky tests:
```bash
npm run test:repeat
```

## 📊 Generating Reports

We use Mochawesome for test run reports. After running your tests in headless mode (`npx cypress run`), you can merge the resulting JSON outputs and generate a detailed HTML report:

```bash
npm run report
```
This command merges all JSON files located in `cypress/reports/` and builds an interactive HTML file that you can open in your browser to view the test execution results.

## 👨‍💻 Author
**Luiz Carlos**