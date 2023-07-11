import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://quotes.test.uinsure.co.uk',
        specPattern: 'cypress/integration/specs/*.cy.ts',
        testIsolation: false,
    },
    defaultCommandTimeout: 25000,
    viewportWidth: 1280,
    viewportHeight: 1024,
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
});
