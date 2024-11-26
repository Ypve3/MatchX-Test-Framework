Feature: Data Profiling

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: Check Recently Uploaded file in data Profiling Section.
When I Click on Upload file Button
And Recieved File Uploaded Message 
And Click on Data Profiling Option
Then Recently Uploaded File Should be present in Profiling Section


Scenario: Check Column Representation of selected Profile file

When User is on profile Page
And User select a file from profile dataset list
Then User should get Character Summary of File

Scenario: Check count and column Number
When User is on profile Page
And User select a file from profile dataset list
And User Select particular column Number.
Then Values with count should be shown.

Scenario: Check Graphical Representation of selected Profile file

When User is on profile Page
And User select a file from profile dataset list
And Clicks on Graphical option 
Then User should get Graphical Summary of File






