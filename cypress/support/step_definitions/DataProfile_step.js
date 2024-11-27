/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";


When("Recieved File Uploaded Message",() => {
  
    cy.get(".ant-upload-text").attachFile("organizations-1000.csv", {
        subjectType: "drag-n-drop",
      });
        cy.wait(3000);
        cy.get(".ant-message-notice-content")
          .should("be.visible")
          .should("contain", "Table organizations-1000 Created Successfully!")
        
})

When("Click on Data Profiling Option",() => {

    cy.get('a[href="/profiling"]').click();
})


Then("Recently Uploaded File Should be present in Profiling Section",() =>{
    cy.get("tr:contains('organizations-1000')").should('exist');  
})


When("User is on profile Page",() =>{
  cy.get('a[href="/profiling"]').click()
})


When("User select a file from profile dataset list",() =>{

  cy.xpath("//td[text()='Duplicates1']").click()
})

Then("User should get Character Summary of File",() => {

  cy.wait(4000)
  cy.screenshot("Char_Profiling")
})

When("User Select particular column Number.",() => {
  cy.wait(3500)
  cy.xpath("//td[@class='ant-table-cell' and text()='1']").first().click();
});

Then("Values with count should be shown.", () => {
  cy.wait(5000); // Wait for potential loading time

  // Check for the existence of the header
  cy.get('tr > :nth-child(2) > span')
    .should('exist')
    .then(() => {
      cy.log("Header 'Leading Spaces Count' is displayed.");
    });
   
    
  // Confirm that the count in the corresponding row matches '1'
  cy.xpath("//tr[contains(@class, 'ant-table-row')]//td[contains(text(), '1')]")
    .should('exist')
    .then(() => {
      cy.log("Count of '1' is found in the table row.");
    });

  // Check for the specific element and take a screenshot
  cy.get('[style="display: flex; gap: 40px; justify-content: center;"] > :nth-child(2)', { timeout: 5000 })
    .should('exist') // Ensure the element exists
    .then(() => {
      cy.log("Element for displaying values exists.");
    })
    cy.screenshot("sp_trailing_value", { capture: 'viewport', force: true })
    .then(() => {
      cy.log("Screenshot captured for the displayed values.");
    });
});




When("Clicks on Graphical option",() => {
 cy.get('#rc-tabs-0-tab-2').click()
})

Then("User should get Graphical Summary of File",() => {
  cy.wait(6000)
  cy.get('[width="450"]', { timeout: 5000 })
  .should('exist') // Ensure the element exists
  .screenshot("Graphs", { capture: 'viewport', force: true });
})
