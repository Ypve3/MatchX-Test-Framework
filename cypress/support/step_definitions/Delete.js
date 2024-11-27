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


When("click on file delete button",() => {

    cy.xpath("(//span[@aria-label='delete'])[1]").click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
    cy.wait(3000)
    cy.xpath("(//span[@aria-label='delete'])[1]").click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
    cy.wait(3000)
    cy.xpath("(//span[@aria-label='delete'])[1]").click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
    cy.wait(3000)
    cy.xpath("(//span[@aria-label='delete'])[1]").click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
    cy.wait(3000)
    cy.xpath("(//span[@aria-label='delete'])[1]").click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
    cy.wait(3000)

    cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible").should("contain","Table deleted successfully")
})
Then("File should be deleted",() => {

})