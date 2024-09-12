Feature: Invalid login

  @smoke @error
  Scenario: Username or password not matched - Error message should appear in case of invalid credentials
    Given I navigated to the Sauce Demo page
    When I tried login with username "invalid" and password "invalid"
    Then I see error message containing text "Epic sadface: Username and password do not match any user in this service"

  @error
  Scenario: Locked out user - Error message should appear in case of invalid credentials
    Given I navigated to the Sauce Demo page
    When I tried login with username "locked_out_user" and password "secret_sauce"
    Then I see error message containing text "Epic sadface: Sorry, this user has been locked out"