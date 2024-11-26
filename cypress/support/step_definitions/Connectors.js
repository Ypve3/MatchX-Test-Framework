/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});


When("User clicks on connectors Operations",() => {

    cy.wait(3000)
    cy.xpath("//span[text()='Data Ingestion']").click();
    cy.get('a[href="/connectorslist"]').click();

})

When("Click on Add Connectors Page" , () => {

    cy.xpath("//span[text()=' Add New Connection']").click();

})

When("select S3",() => {

 cy.xpath("//div[text()='Amazon S3']").click()

})

When("Enter valid Credentials",() => {

    cy.get('#connectorName').type("CypressTest1")
    cy.get('#AWSAccessKey').type("qwdcdc")
    cy.get('#AWSSecretKey').type("A12edec3")

})

When("click on Validate connection",() => {

    cy.xpath("//span[text()='Create Connection']").click()
})

Then("Connectors should be seen in listing Page", () => {
    // Assert that the table exists
    cy.xpath('//div[contains(@class, "ant-table-content")]').should('exist');
  
    // Find the "User" column header
    cy.xpath('//th[contains(@class, "ant-table-cell") and text()="User"]').should('be.visible');
  
    // Find the "Connector Name" column header
    cy.xpath('//th[contains(@class, "ant-table-cell") and text()="Connector Name"]').should('be.visible');
  
    // Validate "Yash Pardeshi" is under the "User" column
    cy.xpath('//th[text()="User"]/ancestor::table')
      .find('tr')
      .contains('td', 'Yash Pardeshi')
      .should('be.visible');
  
    // Validate the connector name is under the "Connector Name" column
    cy.xpath('//th[text()="Connector Name"]/ancestor::table')
      .find('tr')
      .contains('td', 'CypressTest1') // Replace 'connector name' with the actual name
      .should('be.visible');
  });
  
