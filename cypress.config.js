const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
      timestamp: false, //'mmddyyyy_HHMMss'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});