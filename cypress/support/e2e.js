// cypress/support/e2e.js

const COMMAND_DELAY = 500; // Tempo em milissegundos (0.5 segundos)

Cypress.on('command:enqueued', (obj) => {
  if (COMMAND_DELAY > 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, COMMAND_DELAY);
    });
  }
});