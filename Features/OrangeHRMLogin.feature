Feature: To test the Orange HRM login functionality
@Login_01
Scenario: To Verify user can able to login with valid credentials
Given navigate to orange HRM URL
And update the test data for "<DatasetID>"
And enter the user name
And enter the password
And click on login button
Then verify appication got logged in successfully

Examples:
    | DatasetID |
    | DS_01  | 
    | DS_02  | 
    | DS_03  | 
# @Login_02
# Scenario: To Verify user can able to login with valid credentials
# Given navigate to orange HRM URL
# And enter the user name
# And enter password
# And click on login button
# Then verify appication got logged in successfully
# @Login_03
# Scenario: To Verify user can able to login with valid credentials
# Given navigate to orange HRM URL
# And enter the user name
# And enter the password
# And click on login button
# Then verify appication got logged in successfully