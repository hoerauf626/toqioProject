Feature: Automation QA Practice


Scenario: I verify the contact us page is working as expected
    Given I open Toqio homepage
    When I navigate to the contact page and test fields firstname, lastname, email and phone number
    And I test the remaining fields
    Then I click the Send Button

Scenario: I verify the translation is working as expected
    Given I open Toqio homepage
    When I select spanish from the dropdown and verify first part of home page
    And I verify the middle part of the home page
    Then I verify the links and buttons


