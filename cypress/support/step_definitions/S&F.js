/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

const dayjs = require('dayjs');

// Helper function to get the date 30 days ago (ignores time)
const getDateDaysAgo = (days) => {
    return dayjs().subtract(days, 'day').startOf('day').toDate();
};

// Helper function to get today’s date (ignores time)
const getTodayDate = () => {
    return dayjs().startOf('day');
};


When("User is on dashboard",() => {

  cy.log("Dashboard")
  cy.xpath("//Span[text()='show more']").click()

} )

When("Type file name", () => {
  cy.get('.ant-input').type('duplicate{enter}')
});

// Then("File name should appear according to inputs",() => {
 
//   cy.get('.ant-table-content').then(($table) => {
//     if ($table.find('tr:contains("duplicate")').length > 0) {
   
//       cy.log("File 'duplicate' is displayed in the table.")
      
//       expect($table.find('tr:contains("duplicate")').length).to.be.greaterThan(0)
//     } else {
    
//       cy.log("File 'duplicate' not found in the table.")
     
//       throw new Error("File 'duplicate' not found in the table.")
//     }
//   });
// });

Then("File name should appear according to inputs", () => {
  cy.get('.ant-table-content tr').then(($rows) => {
    const matchingRows = $rows.filter((index, row) => {
      const rowText = Cypress.$(row).text().toLowerCase(); // Convert to lowercase for case-insensitive matching
      return rowText.includes("duplicate");
    });

    if (matchingRows.length > 0) {
      cy.log(`Found ${matchingRows.length} rows with the text 'duplicate'.`);
      expect(matchingRows.length).to.be.greaterThan(0);
    } else {
      cy.log("File 'duplicate' not found in the table.");
      throw new Error("File 'duplicate' not found in the table.");
    }
  });
});

When("User is on ingestion Page", () => {

  cy.xpath("//span[text()='Data Ingestion']").first().click();
  cy.get('a[href="/ingestion"]').click();
  cy.wait(2000)
})

When("Type file name in ingestion page", () => {
  
  cy.get('.ant-input-suffix').type('Dup{enter}')

})

Then("File name should appear according to inputs in ingestion Page",() => {

  cy.get('.ant-table-body').then(($table) => {
    if ($table.find('tr:contains("Dup")').length > 0) {
   
      cy.log("File 'org' is displayed in the table.")
      
      expect($table.find('tr:contains("Dup")').length).to.be.greaterThan(0)
    } else {
    
      cy.log("File 'dup' not found in the table.")
     
      throw new Error("File 'dup' not found in the table.")
    }
  });
});

When("User is on profile page",() => {
 
  cy.get('a[href="/profiling"]').click();
})
When("Type file name in profile page",() => {

 cy.get('.ant-input').type('Dup{enter}')

})
// Then("File name should appear according to inputs in profile page",() => {

//   cy.get('.myLogs-table').then(($table) => {
//     if ($table.find('tr:contains("dup")').length > 0) {
   
//       cy.log("File 'dup' is displayed in the table.")
      
//       expect($table.find('tr:contains("dup")').length).to.be.greaterThan(0)
//     } else {
    
//       cy.log("File 'DP' not found in the table.")
     
//       throw new Error("File 'dup' not found in the table.")
//     }
//   });
// });

Then("File name should appear according to inputs in profile page", () => {
  cy.get('.myLogs-table tr').then(($rows) => {
    // Use filter to search for rows containing the desired text
    const matchingRows = $rows.filter((index, row) => {
      const rowText = Cypress.$(row).text().toLowerCase(); // Case-insensitive matching
      return rowText.includes("dup");
    });

    if (matchingRows.length > 0) {
      cy.log(`Found ${matchingRows.length} rows with text containing 'dup'.`);
      expect(matchingRows.length).to.be.greaterThan(0);
    } else {
      cy.log("File 'dup' not found in the table.");
      throw new Error("File 'dup' not found in the table.");
    }
  });
});


When("select todays date", () => {
cy.get('.ant-picker-input').first().click()
cy.get('.ant-picker-cell-today').click()
cy.get('.ant-picker-input-active > input').click()
cy.get('.ant-picker-cell-today').click()

cy.wait(1000)
})

Then("todays uploaded file should be shown",() => {

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to the beginning of the day

  cy.get('.ant-table-body .ant-table-tbody tr').each(($row) => {
    // Find the cell in the date/time column (2nd column in the header)
    cy.wrap($row).find('td:nth-child(2)') // 2nd column (Date/Time)
        .invoke('text')
        .then((timestampText) => {
            
          console.log("Timestamp Text:", timestampText.trim());

            const fileDate = new Date(timestampText.trim());
            
            
            if (isNaN(fileDate)) {
              console.error("Invalid date:", timestampText.trim());
              return; // Skip the assertion for this row
          }
          expect(fileDate).to.be.gte(today);
          });
  });

})

When("select last 7 days",() => {

  cy.get('.ant-picker-input').first().click()
  cy.get('.ant-picker-presets > ul > :nth-child(1)').click()

})
Then("last 7 days file should be displayed",() => {

  const last7DaysDate = getDateDaysAgo(7); 
    
    console.log("Last 7 Days Start Date:", last7DaysDate);

    
    cy.get('.ant-table-body .ant-table-tbody tr').each(($row) => {
        cy.wrap($row).find('td:nth-child(2)') 
            .invoke('text')
            .then((timestampText) => {
                console.log("Timestamp Text (Last 7 Days):", timestampText.trim());

                
                const fileDate = dayjs(timestampText.trim(), 'DD-MM-YYYY HH:mm:ss').toDate();

                
                if (isNaN(fileDate)) {
                    console.error("Invalid date:", timestampText.trim());
                    return;
                }

                console.log("Parsed File Date:", fileDate);

                expect(fileDate).to.be.gte(last7DaysDate);
            });
    });
});

When("select last 30 days", () => {
  cy.get('.ant-picker-input').first().click();
  cy.get('.ant-picker-presets > ul > :nth-child(3)').click();
});

Then("last 30 days file should be displayed", () => {
 
  const last30DaysDate = dayjs().subtract(30, 'days').format('YYYY-MM-DD');
  console.log("Last 30 Days Date (date only):", last30DaysDate);

  cy.get('.ant-table-body .ant-table-tbody tr').each(($row) => {
    cy.wrap($row).find('td:nth-child(2)')  
      .invoke('text')  
      .then((timestampText) => {
        console.log("Timestamp Text:", timestampText.trim());


        const fileDate = dayjs(timestampText.trim(), 'DD-MM-YYYY HH:mm:ss').format('YYYY-MM-DD');
        console.log("Parsed File Date (date only):", fileDate);

        if (isNaN(fileDate)) {
          console.error("Invalid date:", timestampText.trim());
          return;
        }
        expect(fileDate, `File date ${fileDate} is earlier than ${last30DaysDate}`).to.be.gte(last30DaysDate);
      });
  });
});



