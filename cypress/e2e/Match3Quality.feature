Feature: Data Quality Score & Highlights

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: Missing Values
When the user clicks on the Quality button 
When the user clicks on the dataset from Quality table.
And clicks on Missing values
Then User should see all highlighted values
And user starts filling data in highlighted cell.
Then highlighted cell should be gone.
Then Quality Score values should be changed.


Scenario: Duplicate Values
When the user clicks on the Quality button 
When the user clicks on the dataset from Quality table.
And clicks on Duplicate values
And User should see all Duplicate highlighted values
And user starts click on remove button
Then Duplicate values should be removed



Scenario: Whitespaces
When the user clicks on the Quality button 
When the user clicks on the dataset from Quality table.
And clicks on Whitespaces values
And User should see all Whitespace values highlighted values
And user starts click on remove button
Then Whitespaces values should be removed


Scenario: Rule violation/mismatched Values
When the user clicks on the Quality button 
When the user clicks on the dataset from Quality table.
And clicks on Rule violation values
Then User should see all Rule violated values highlighted values