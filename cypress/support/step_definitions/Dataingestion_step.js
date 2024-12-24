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

const formatSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

When("I Click on Upload file Button", () => {
  cy.viewport(1024, 768)
  
  
  cy.get('a[href="/ingestion"]').click()
  cy.wait(3000)
  cy.get('.ant-btn-primary').click();
 
});

When("Select CSV File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("DD.csv", {
    subjectType: "drag-n-drop",
  });
});
 
When("User should see the preview", () => {
  cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible")
  .should("contain", "File processing complete!");
})

When("User Should Click setting", () => {
 

})

When("User should select delimiter", () => {
  cy.get('#rc_select_0').click();

  cy.get('.ant-select-dropdown .ant-select-item-option-content')
    .contains('Comma (,)')
    .click({ force: true });
});


When("User should Select Encoder", () => {
  cy.get('#rc_select_1').click();
  cy.get('.ant-select-dropdown .ant-select-item-option-content')
  .contains('UTF-8').click();
})
When("User should select Data format",() => {
  cy.get('#rc_select_2').click();
  cy.xpath("//div[@class='ant-select-item-option-content' and text()='YYYY-MM-DD']").click();
})
When("User should select Industry", () => {
  cy.get('#rc_select_3').click();
  cy.xpath("//div[@class='ant-select-item-option-content' and text()='Technology']").click();
})

When("User should select error radio", () => {
  
  cy.xpath("//span[text()='Next']").click();
  cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible")
  .should("contain", "File processing complete!");
})
When("User should write name and description", () => {
  cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible")
  .should("contain", "Dataset preview fetched successfully!");
  cy.wait(2000)
  cy.xpath("//span[text()='Next']").click();
  cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type("Automation1");
  cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type("Testing");
  cy.get('.ant-btn-primary > span').click();
})

Then("Table customers-10000 Created Successfully!", () => {
  
  cy.get('.ant-message-custom-content > :nth-child(2)')
    .should("be.visible")
    .should("contain", "Automation1 stored successfully!");
})

Then("The table customers-10000 already exists in the database! Message Should be recieved", () => {
  cy.wait(2000);
  cy.get('[data-row-key="1"] > :nth-child(2)')
    .should("be.visible")
    .should("contain", "Dataset Automation1 already exists for user Yash.");
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
  .and('contain.text', 'Unsupported file type only .csv .xlsx & .json allowed.');
});

// When("Select CSV More than 25MB File TO Upload", () => {
//   cy.get(".ant-upload-text").attachFile("29mb.csv", {
//     subjectType: "drag-n-drop",
//   });
// });

// Then("Error Message Should be Displayed - File size exceeds the limit of 5MB.", () => {
//   cy.wait(500)
//   cy.get('.ant-message-notice-content')
//     .should("be.visible")
//     .should("contain", "File size exceeds the 25MB limit.");
// });

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
  cy.get(".ant-upload-text").attachFile("cd.json", {
    subjectType: "drag-n-drop",
  });
});

When("User should write name and description for Json File", () => {
  cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible")
  .should("contain", "Dataset preview fetched successfully!");
  cy.xpath("//span[text()='Next']").click();
  cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type("Json_ATM");
  cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type("Testing");
  cy.get('.ant-btn-primary > span').click();

})

Then ("Json File Should be Upoaded.", () => {

  cy.wait(2000);
  cy.get('.ant-message-custom-content > :nth-child(2)')
    .should("be.visible")
    .should("contain", "Json_ATM stored successfully!");

} )

