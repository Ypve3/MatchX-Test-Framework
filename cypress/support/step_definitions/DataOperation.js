// /// <reference types="cypress" />

// import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })


// Cypress.on("uncaught:exception", (err, runnable) => {
//   if (err.message.includes("Failed to execute 'json' on 'Response'")) {
//     return false;
//   }

//   return true;
// });

//   When("the user selects a file for data operations - people-100",() => {
  
//     cy.xpath("//td[@class='ant-table-cell' and text()='people-100']").click()
//   })

//   When("the user clicks on the 'Data Operations' tab",() => {
//     cy.wait(12000)
//     cy.xpath("//div[text()='Data Operations']").click()
//   })
  

//   When("the user selects Sp.char checkboxes",() => {
  
//     cy.xpath("(//input[@class='ant-checkbox-input'])[48]").click()
//     cy.xpath("(//input[@class='ant-checkbox-input'])[57]").click()
//     cy.xpath("(//input[@class='ant-checkbox-input'])[66]").click()

//   })

//   When("the user clicks on 'Remove'", () => {
    
//     cy.xpath("//span[text()='Remove']").click()

//   })

  

//   Then("the User should see data without sp.char in data view table",() => {
    
//   cy.wait(10000)
//   cy.viewport(1600, 1080) // Set a reasonably large height
//   cy.scrollTo('bottom')
//   cy.screenshot("DataOps_hyphens_Removed", { capture: 'fullPage' })

// })

//   When("the user clicks on Save.",() => {
   
//     cy.wait(8000)
//     cy.get('.buttons > .ant-btn-primary').click()
//     cy.screenshot("DataOpsSaved", { capture: 'fullPage' })
//     cy.wait(8000)
//     cy.get('.ant-message-custom-content ant-message-success', { timeout: 10000 })
//     .should('exist')
//     .and('be.visible')
//     .and('contain.text', 'Successfully Saved Changes!');
//   });

// When("the user selects a file for data operations - organisation-1000",() => {

//   cy.xpath("//td[@class='ant-table-cell' and text()='organizations-1000']").click()
// })

// When("the user selects leading spaces",() => {

//   cy.xpath("(//input[@class='ant-checkbox-input'])[49]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[67]").click()
// })

// Then("the User should see data without leading space in data view table",() => {

//   cy.wait(12000)
//   cy.viewport(1600, 1080)
//   cy.screenshot("DataOps_leading.space_Removed", { capture: 'fullPage' })
    
// })


// When("the user selects trailing spaces",() => {
 
//   cy.xpath("(//input[@class='ant-checkbox-input'])[14]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[23]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[32]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[50]").click(
//   cy.xpath("(//input[@class='ant-checkbox-input'])[68]").click()  
//   )
// })

// Then("the User should see data without Trailing space in data view table",() => {
 
//   cy.wait(12000)
//   cy.viewport(1600, 1080)
//   cy.screenshot("DataOps_Trailing.space_Removed", { capture: 'fullPage' })
// })

// When("the user selects a file for data operations - user_info",() => {

//   cy.xpath("//td[@class='ant-table-cell' and text()='User_Info']").click()
// })

// When("the user selects dots",() => {

//   cy.xpath("(//input[@class='ant-checkbox-input'])[69]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[78]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[87]").click()
// })

// Then("the User should see data without dots in data view table",() => {

//   cy.wait(12000)
//   cy.viewport(1600, 1080)
//   cy.screenshot("DataOps_Dots_Removed", { capture: 'fullPage' })
// })


// When("the user selects hyphens",() => {

//   cy.xpath("(//input[@class='ant-checkbox-input'])[71]").click()
//   cy.xpath("(//input[@class='ant-checkbox-input'])[80]").click()
// })

// Then("the User should see data without hyphens in data view table",() => {

//   cy.wait(12000)
//   cy.viewport(1600, 1080)
//   cy.screenshot("DataOps_hyphens_Removed", { capture: 'fullPage' })
// })

// When("the user selects commas",() => {
//   cy.xpath("(//input[@class='ant-checkbox-input'])[52]").click()
// })

// Then("the User should see data without commas in data view table",() => {
// cy.wait(1000)  
//   cy.screenshot("Commas")
// })


// When("User click on split",() => {
 
// cy.xpath("//div[text()='Split']").click()

// })

// When("User Select checkboxs like space, dots",() => {

//   cy.xpath("(//input[@class='ant-checkbox-input'])[50]").click()

// })
// When("User clicks on split", () => {
//   cy.xpath("//span[text()='Split']").click()

// })

// Then("User can see the split values", () => {
//   cy.wait(5000);

//   cy.xpath("//span[text()='10 / page']").click()
//   cy.xpath("//div[text()='100 / page']").click()
//   const phoneColumns = [
//     "//th[text()='Phone 1_part1']",
//     "//th[text()='Phone 1_part2']",
//     "//th[text()='Phone 1_part3']"
//   ];

//   phoneColumns.forEach((column) => {
//     cy.xpath(column)  // Use cy.xpath() if you're using the cypress-xpath plugin
//       .invoke('text')
//       .should('not.include', '.');  // Check that the text does not contain a dot
//   });
// });


// When("User can save the Split values",() => {

//   cy.screenshot("SplitValues");
// })



// When("User click on Merge",() => {

//   cy.xpath("//div[text()='Merge']").click()
// })

// When("User Select column from dropdown",() => {

//   cy.get('#rc_select_6').click()
//   cy.xpath("//div[text()='Last Name']").click()
// })

// When("User clicks on Merge",() => {

//   cy.wait(5000)
//   cy.xpath("//span[text()='Merge']").click()
  
// })

// Then("User can see the Merge values", () => {

//   cy.screenshot("Merge")
// } )

// When("User can save the Merge values", () => {

// })


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

When("the user selects a file for data operations",() => {
  cy.xpath("//td[@class='ant-table-cell' and text()='people-100']").click()
})

When("the user clicks on the 'Data Operations' tab",() => {
  cy.wait(6000)
  cy.xpath("//div[text()='Data Operations']").click()
})

When("the user selects Sp.char checkboxes",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[48]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[57]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[66]").click()
})

When("the user clicks on 'Remove'", () => {
  cy.xpath("//span[text()='Remove']").click()
})

Then("the User should see data without sp.char in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
  cy.scrollTo('bottom')
})

// When("the user clicks on Save.",() => {
//   cy.get('.buttons > .ant-btn-primary').click()
//   cy.wait(4000)
//   cy.get('.ant-message-custom-content > :nth-child(2)', { timeout: 10000 })
//     .should('exist')
//     .and('be.visible')
//     .and('contain.text', 'Successfully Saved Changes!');
// })

When("the user clicks on Save.", () => {
  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = now.toISOString().replace(/[:.]/g, "-"); // Format date to avoid invalid characters in file name
    return formattedDate;
  };

  cy.get('.buttons > .ant-btn-primary').click();
  cy.wait(4000);

  // Adding assertions with a failure handling block
  cy.get('.ant-message-custom-content > :nth-child(2)', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'Successfully Saved Changes!')
    .then(() => {
      cy.log("Assertion passed: Successfully Saved Changes message is displayed.");
    });
});

// Global failure handler
Cypress.on('fail', (error) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const screenshotName = `Save-Button-Failure-${timestamp}`;

  cy.screenshot(screenshotName); // Take a screenshot on failure
  throw error; // Rethrow the error to let the test fail
});


When("the user selects a file for data operations - organisation-1000",() => {
  cy.xpath("//td[@class='ant-table-cell' and text()='organizations-1000']").click()
})

When("the user selects leading spaces",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[49]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[67]").click()
})

Then("the User should see data without leading space in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
})

When("the user selects trailing spaces",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[14]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[23]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[32]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[50]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[68]").click()
})

Then("the User should see data without Trailing space in data view table",() => {
  cy.wait(6000)
  cy.viewport(1600, 1080)
})

When("the user selects a file for data operations - user_info",() => {
  cy.xpath("//td[text()='User_Info']").click()
})

When("the user selects dots",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[69]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[78]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[87]").click()
})

Then("the User should see data without dots in data view table",() => {
  cy.wait(5000)
  cy.viewport(1600, 1080)
})

When("the user selects hyphens",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[71]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[80]").click()
})

Then("the User should see data without hyphens in data view table",() => {
  cy.wait(5000)
  cy.viewport(1600, 1080)
})

When("the user selects commas",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[52]").click()
})

Then("the User should see data without commas in data view table",() => {
  cy.wait(1000)
})

When("User click on split",() => {
  cy.xpath("//div[text()='Split']").click()
})

When("User Select checkboxs like space, dots",() => {
  cy.xpath("(//input[@class='ant-checkbox-input'])[74]").click()
})

When("User clicks on split", () => {
  cy.xpath("//span[text()='Split']").click()
})

Then("User can see the split values", () => {
  cy.wait(3000);
});



When("User click on Merge",() => {
  cy.xpath("//div[text()='Merge']").click()
})

When("User Select column from dropdown",() => {
  cy.get('#rc_select_5').click()
  cy.get('[title="Last Name"] > .ant-select-item-option-content').click()
  
})

When("User clicks on Merge",() => {
  
  cy.xpath("//span[text()='Merge']").click()
})


When("User can save the Merge values", () => {
  cy.wait(2000)
  cy.get('.buttons > .ant-btn-primary').click()

})