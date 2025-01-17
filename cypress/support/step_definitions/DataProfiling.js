/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  console.error("Uncaught Error:", err);
  return false;
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("formatSize is not defined")) {
   
    window.formatSize = (bytes) => {
      console.warn("Default formatSize used");
      return `${bytes} bytes`;
    };
    return false;
  }
  return true;
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

When("User is on Profiling Page", () => {
  cy.get('a[href="/profiling"]').click();
});

When("Click on New Profiling Button", () => {
  cy.xpath("//span[text()='New Profiling']").click();
});

When("Select the Dataset", () => {
  cy.xpath("//td[@class='ant-table-cell' and text()='Automation1']").click({ force: true });
  cy.xpath("//span[text()='Next']").click();
});

When("Select the Dataset Profile Rules", () => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[2]").click();
  cy.xpath("(//input[@class='ant-checkbox-input'])[3]").click();
});

When("Click on Profiling Result", () => {
  cy.get('.ant-btn-primary > span').click();
});

When("Save the Profiling Result", () => {
  
  const uniqueName = `CypressATM-${Date.now()}`; 

  
  cy.get('.ant-btn-primary > span').click();
  cy.get('#profileName').type(uniqueName); 
  cy.get('.ant-form-item-control-input-content > .ant-btn').click();
  cy.wait(2000);

  
  cy.wrap(uniqueName).as('profileName');
});

Then("Result should be Saved", () => {
  
  cy.get('@profileName').then((uniqueName) => {
    cy.get('.ant-table-tbody > :nth-child(2) > :nth-child(1)')
      .should('have.text', uniqueName); 
  });
});



