/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", (err, runnable) => {
  console.error("Uncaught Error:", err);
  return false;
});
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("formatSize is not defined")) {
    // Define a fallback function
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


When("User is on ingestion page", () => {

    cy.get('a[href="/ingestion"]').click()
})

When("User Clicks on Delete Option", () => {
cy.xpath("(//span[@aria-label='delete'])[1]").click()
cy.xpath("//span[text()='OK']").click()
cy.wait(4000)
cy.xpath("(//span[@aria-label='delete'])[1]").click({ multiple: true })
cy.xpath("//span[text()='OK']").click()
cy.wait(2000)
})

Then("File should be Deleted", () => {

    cy.get('.ant-message-custom-content > :nth-child(2)')
    .should("be.visible")
    .should("contain", "Table deleted successfully");

})