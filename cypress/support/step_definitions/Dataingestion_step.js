/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

When("I Click on Upload file Button", () => {
  cy.wait(3000)
  cy.xpath("//span[text()='Data Ingestion']").click();
  cy.get('a[href="/ingestion"]').click();
  cy.get('.ant-btn-primary > :nth-child(2)').click();
});

When("Select CSV File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("Duplicates1.csv", {
    subjectType: "drag-n-drop",
  });
});
 
Then("Table customers-10000 Created Successfully!", () => {
  cy.wait(4000);
  cy.get(".ant-message-notice-content")
    .should("be.visible")
    .should("contain", "Table Duplicates1 Created Successfully!");
});

When("Select CSV File TO Upload - People 100",() => {

  cy.get(".ant-upload-text").attachFile("people-100.csv", {
    subjectType: "drag-n-drop",
  });

})

Then("Table People-100 Created Successfully!", () => {
  cy.wait(4000);
 
});

When("Select CSV File TO Upload - User_info",() => {

  cy.get(".ant-upload-text").attachFile("User.csv", {
    subjectType: "drag-n-drop",
  });

})

Then("Table User_info Created Successfully!", () => {
  cy.wait(4000);
  
});


Then("The table customers-10000 already exists in the database! Message Should be recieved", () => {
  cy.wait(2000);
  cy.get('.ant-message-notice-content')
    .should("be.visible")
    .should("contain", "The table Duplicates1 already exists in the database!");
});

When("Select xml File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("e.xml", {
    subjectType: "drag-n-drop",
  });
  cy.wait(500)
});

Then("Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.", () => {
   
  cy.get('.ant-message-custom-content > :nth-child(2)', { timeout: 10000 })
  .should('exist')
  .and('be.visible')
  .and('contain.text', 'Unsupported file type. Only .csv or .xlsx allowed.');
});

When("Select CSV More than 25MB File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("29mb.csv", {
    subjectType: "drag-n-drop",
  });
});

Then("Error Message Should be Displayed - File size exceeds the limit of 5MB.", () => {
  cy.wait(500)
  cy.get('.ant-message-notice-content')
    .should("be.visible")
    .should("contain", "File size exceeds the 25MB limit.");
});

When("Select pdf File", () => {
  cy.get(".ant-upload-text").attachFile("p.pdf", {
    subjectType: "drag-n-drop",
  });
  cy.wait(500)
});

When("Select JPG File", () => {
  cy.get(".ant-upload-text").attachFile("p.jpg", {
    subjectType: "drag-n-drop",
  });
});

When("Select PNG File", () => {
  cy.get(".ant-upload-text").attachFile("j.png", {
    subjectType: "drag-n-drop",
  });
});

When("Select MP3 File", () => {
  cy.get(".ant-upload-text").attachFile("f.mp3", {
    subjectType: "drag-n-drop",
  });
});

When("Select JSON File", () => {
  cy.get(".ant-upload-text").attachFile("j.json", {
    subjectType: "drag-n-drop",
  });
});


When("User click on Logs button",() => {

  cy.get('a[href="/logs"]').click();

})

Then("User should be able see all data ingestion log",() => {


  cy.screenshot("Logs")
})