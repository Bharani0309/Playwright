Feature: To Test the practice automatio login functionality

Scenario: To verify user can able to login with valid credentials
Given navigate to practice automation website
And get the test data for DS_01_01
And enter the user name in practice automation login page
And enter the password in practice automation login page
And click on submit button in practice automation login page
Then verify user should be logged in successfully

# @NegativeUserNameTest
# Scenario Outline: To verify user can not able to login with invalid username
# Given navigate to practice automation website
# And get the test data for DS_02_01
# And enter the user name in practice automation login page
# And enter the password in practice automation login page
# And click on submit button in practice automation login page
# Then verify should see the invalid username validation message
@NegativeUserNameTest
Scenario Outline: To verify user can not able to login with invalid username
Given navigate to practice automation website
And get the test data for "<DatasetID>"
And enter the user name in practice automation login page
And enter the password in practice automation login page
And click on submit button in practice automation login page
Then verify should see the invalid username validation message

Examples:
|DatasetID|
|DS_02_01|
|DS_02_02|
|DS_02_03|
|DS_02_04|
|DS_02_05|
|DS_02_06|
|DS_02_07|
|DS_02_08|
|DS_02_09|
|DS_02_10|
|DS_02_11|
|DS_02_12|
|DS_02_13|
|DS_02_14|
|DS_02_15|
|DS_02_16|
|DS_02_17|
|DS_02_18|
|DS_02_19|
|DS_02_20|

Scenario Outline: To verify user can not able to login with invalid password
Given navigate to practice automation website
And get the test data for "<DatasetID>"
And enter the user name in practice automation login page
And enter the password in practice automation login page
And click on submit button in practice automation login page
Then verify user should be logged in successfully
Then verify should see the invalid password validation message

Examples:
|DatasetID|
|DS_03_01|
|DS_03_02|
|DS_03_03|
|DS_03_04|
|DS_03_05|
|DS_03_06|
|DS_03_07|
|DS_03_08|


