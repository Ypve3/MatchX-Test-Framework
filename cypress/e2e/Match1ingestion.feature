Feature: Data Upload


Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: Upload CSV File
    When I Click on Upload file Button
    And Select CSV File TO Upload
    Then Table customers-10000 Created Successfully!

Scenario: Upload CSV File People -100
    When I Click on Upload file Button
    And Select CSV File TO Upload - People 100
    Then Table People-100 Created Successfully!

Scenario: Upload CSV File User_info
    When I Click on Upload file Button
    And Select CSV File TO Upload - User_info
    Then Table User_info Created Successfully!


Scenario: Upload CSV File - Same as you uploaded in Scenario 1
    When I Click on Upload file Button
    And Select CSV File TO Upload
    Then The table customers-10000 already exists in the database! Message Should be recieved


Scenario: Upload XML File
    When I Click on Upload file Button
    And Select xml File TO Upload
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.

Scenario: Upload CSV file more than Expected Size
    When I Click on Upload file Button
    And Select CSV More than 25MB File TO Upload
    Then Error Message Should be Displayed - File size exceeds the limit of 5MB.


Scenario: Upload Pdf File
    When I Click on Upload file Button
    And Select pdf File
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.


Scenario: Upload JPG File
    When I Click on Upload file Button
    And Select JPG File
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.

Scenario: Upload PNG File
    When I Click on Upload file Button
    And Select PNG File
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.

Scenario: Upload MP3 File
    When I Click on Upload file Button
    And Select MP3 File
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.


Scenario: Upload JSON File
    When I Click on Upload file Button
    And Select JSON File
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.

Scenario: Check Logss

When User click on Logs button
Then User should be able see all data ingestion log