Feature: Valid login scenario

  Scenario: Valid login credentials 
    Given I navigated to the Sauce Demo page
    When I tried login with username "standard_user" and password "secret_sauce"
    Then I navigated to Products page

    When I set customer name to "Valid Login"
    Then I get customer name
