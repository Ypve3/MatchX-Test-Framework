/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";



const url = "https://matchx.ve3.world/";

beforeEach(() => {
    cy.visit(url);
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearCookies();
});

Given("I am on Application's Homepage", () => {
    
    cy.url().should('eq', url);
});

When("I enter login details",() => {
 cy.get('#login_email').type('yash.pardeshi@ve3.global')
 cy.get('#login_password').type("Rekha@1306")
})

Then("Login should be confirmed.",() => {
    cy.get('.ant-btn').first().click()
})


