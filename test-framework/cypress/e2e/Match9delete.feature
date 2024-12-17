Feature: Data Delete

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: User file Soft Deletion
When User is on ingestion page
And User Clicks on Delete Option
Then File should be Deleted


