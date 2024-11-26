Feature: Connectors

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.



Scenario: Check User can add connector Using S3

When User clicks on connectors Operations
And Click on Add Connectors Page
And select S3 
And Enter valid Credentials
And click on Validate connection
Then Connectors should be seen in listing Page


