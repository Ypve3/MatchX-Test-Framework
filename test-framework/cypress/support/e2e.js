// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// cypress/support/e2e.ts or cypress/support/index.ts
Cypress.on('fail', (error, runnable) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Format date
    const screenshotName = `Failure-${timestamp}`;
  
    // Log the screenshot action
    cy.log(`Test failed. Capturing screenshot: ${screenshotName}`);
  
    // Capture screenshot
    cy.screenshot(screenshotName);
  
    // Rethrow the error to fail the test
    throw error; // Rethrow error to keep the test failure behavior
  });
  