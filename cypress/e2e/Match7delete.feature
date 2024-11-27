Feature: Data Delete

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: User can delete the file

When User is on ingestion Page 
And click on file delete button
Then File should be deleted