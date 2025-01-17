Feature: Data Profiling


Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: Create New Profiling
When User is on Profiling Page
And Click on New Profiling Button
And Select the Dataset
And Select the Dataset Profile Rules
And Click on Profiling Result
And Save the Profiling Result
Then Result should be Saved


