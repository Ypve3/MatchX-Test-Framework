Feature: Data Operations

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: User search file on dashboard

When User is on dashboard 
And Type file name
Then File name should appear according to inputs


Scenario: User search file on ingestion

When User is on ingestion Page
And Type file name in ingestion page
Then File name should appear according to inputs in ingestion Page


Scenario: User search file on profile

When User is on profile page 
And Type file name in profile page
Then File name should appear according to inputs in profile page

Scenario: User filter file on ingestion

When User is on ingestion Page
And select todays date
Then todays uploaded file should be shown
And select last 7 days 
Then last 7 days file should be displayed
And select last 30 days 
Then last 30 days file should be displayed
