/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

When("the user clicks on the Quality button",() => {

    cy.get('a[href="/quality"]').click();
})


When("the user clicks on the dataset from Quality table.",() => {
   
   
    cy.xpath("//td[@class='ant-table-cell' and text()='User_Info']").click()
    cy.wait(8000)

})

When("clicks on Missing values",() => {

    cy.xpath("//span[contains(text(), 'Missing Values')]").click()
    cy.wait(5000)

})

Then("User should see all highlighted values",() => {

    cy.screenshot("MissingValues_Highlights")
    //cy.xpath("(//td[@class='ant-table-cell highlight'])[1]").type("India")
    
})

When("user starts filling data in highlighted cell.",() => {

    cy.xpath("(//td[@class='ant-table-cell highlight'])[1]").type("India")

})

Then("highlighted cell should be gone.",() => {
   
    cy.wait(6000)
    cy.screenshot("NoHighlight")
   
})

Then("Quality Score values should be changed.",() => {
    console.log("yet to be implemented")
})

When("clicks on Duplicate values",() => {
 
    cy.xpath("//span[contains(text(),'Duplicates')]").click()
})

Then("User should see all Duplicate highlighted values",() => {

    cy.wait(7000)
    cy.screenshot("DuplicatesHighlightes")
    
})

When("user starts click on remove button",() => {
   cy.xpath("//span[text()='Remove & Save']").click()
   cy.wait(10000)
});

Then("Remove values should be removed", () => {
    cy.get('.ant-message-custom-content > :nth-child(2)')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'Table values remove and saved successfully')
      .then(() => {
        cy.log("Assertion passed: Values removed and message displayed successfully.");
      });
  });
  
  
  
  // Global error handler for screenshots
  Cypress.on('fail', (error, runnable) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const screenshotName = `Removed_Values-Failure-${timestamp}`;
  
    cy.screenshot(screenshotName); // Capture screenshot on assertion failure
    throw error; // Rethrow the error to fail the test
  });
  

When("clicks on Whitespaces values",() => {
    
    cy.xpath("//span[contains(text(),'Whitespaces')]").click()
})

Then("User should see all Whitespace values highlighted values",() => {

    cy.wait(10000)
    cy.screenshot("WTHighlights")
})

Then("Whitespaces values should be removed",() => {

    Then("Remove values should be removed", () => {
        const getCurrentDate = () => {
          const now = new Date();
          const formattedDate = now.toISOString().replace(/[:.]/g, "-"); // Format date to avoid invalid characters in file name
          return formattedDate;
        };
      
        cy.get('.ant-message-custom-content > :nth-child(2)')
          .should('exist')
          .and('be.visible')
          .and('contain.text', 'Table values remove and saved successfully')
          .then(() => {
            cy.log("Assertion passed: Values removed and message displayed successfully.");
          });
      });
      
      // Global error handler for screenshots
      Cypress.on('fail', (error, runnable) => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const screenshotName = `Whitespace_removed-${timestamp}`;
      
        cy.screenshot(screenshotName); // Capture screenshot on assertion failure
        throw error; // Rethrow the error to fail the test
      });
    
})

When("clicks on Rule violation values",() => {

    cy.xpath("//span[contains(text(),'Mismatched Values')]").click()
})

Then("User should see all Rule violated values highlighted values",() => {
    
    cy.wait(10000)
    cy.screenshot("RuleVHighlight")
})
