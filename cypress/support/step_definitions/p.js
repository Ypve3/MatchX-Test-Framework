/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});


When("User logs in via API",() => {

    cy.visit("https://promptx-frontend.ve3global.com/public")
})


When("User navigates to the dashboard", () => {

})

Then("The user should be logged in successfully" ,() => {

})