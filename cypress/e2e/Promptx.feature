Feature: Data Operations

Background:
Given I am on Application's Homepage


Scenario: login to promptx
When User logs in via API
And User navigates to the dashboard
Then The user should be logged in successfully