Feature: Data Upload


Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: Upload CSV File
    When I Click on Upload file Button
    And Select CSV File TO Upload
    And User should see the preview
    And User Should Click setting
    And User should select delimiter
    And User should Select Encoder
    And User should select Data format
    And User should select Industry
    And User should select error radio
    And User should write name and description
    Then Table customers-10000 Created Successfully!

Scenario: Upload CSV File - Same as you uploaded in Scenario 1
    When I Click on Upload file Button
    And Select CSV File TO Upload
    And User should see the preview
    And User Should Click setting
    And User should select delimiter
    And User should Select Encoder
    And User should select Data format
    And User should select Industry
    And User should select error radio
    And User should write name and description
    Then The table customers-10000 already exists in the database! Message Should be recieved

Scenario: Upload JSON File
    When I Click on Upload file Button
    And Select JSON File
    And User should see the preview
    And User Should Click setting
   
    And User should Select Encoder
   
 
    And User should select error radio
    And User should write name and description for Json File
    Then Json File Should be Upoaded.

Scenario: Upload XML File
    When I Click on Upload file Button
    And Select xml File TO Upload
    Then Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.

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


