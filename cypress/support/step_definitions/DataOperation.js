/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

// Add error handling function
Cypress.on('fail', (error, runnable) => {
  // Take screenshot on any failure
  cy.screenshot(`failed-${runnable.title.replace(/\s+/g, '-')}`, { capture: 'fullPage' });
  throw error;
});

When("the user selects a file for data operations",() => {
  cy.xpath("//td[@class='ant-table-cell' and text()='people-100']").click()
})

When("the user clicks on the 'Data Operations' tab",() => {
  cy.wait(8000)
  cy.xpath("//div[text()='Data Operations']").click()
})

When("the user selects Sp.char checkboxes",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[48]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[57]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[66]").click()
})

When("the user clicks on 'Remove'", () => {
  cy.xpath("//span[text()='Remove']").click()
})

Then("the User should see data without sp.char in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
  cy.scrollTo('bottom')
})

When("the user clicks on Save.",() => {
  cy.get('.buttons > .ant-btn-primary').click()
  cy.wait(4000)
  cy.get('.ant-message-custom-content > :nth-child(2)', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'Successfully Saved Changes!');
})


When("the user selects a file for data operations - organisation-1000",() => {
  cy.xpath("//td[@class='ant-table-cell' and text()='organizations-1000']").click()
})

When("the user selects leading spaces",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[49]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[67]").click()
})

Then("the User should see data without leading space in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
})

When("the user selects trailing spaces",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[14]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[23]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[32]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[50]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[68]").click()
})

Then("the User should see data without Trailing space in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
})

When("the user selects a file for data operations- User_info",() => {
  cy.get('[data-row-key="1"] > :nth-child(1)').click()
})

When("the user selects dots",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[69]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[78]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[87]").click()
})

Then("the User should see data without dots in data view table",() => {
  cy.wait(5000)
  cy.viewport(1600, 1080)
})

When("the user selects hyphens",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[71]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[80]").click()
})

Then("the User should see data without hyphens in data view table",() => {
  cy.wait(5000)
  cy.viewport(1600, 1080)
})

When("the user selects commas",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[52]").click()
})

Then("the User should see data without commas in data view table",() => {
  cy.wait(4000)
})

