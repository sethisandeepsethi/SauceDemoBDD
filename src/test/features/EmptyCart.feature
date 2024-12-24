Feature: Empty cart journey

Scenario: Validate that cart can be emptied
    Given I navigated to the Sauce Demo page
    When I tried login with username "standard_user" and password "secret_sauce"
    Then I navigated to Products page

    When I set customer name to "Empty Cart"
    Then I get customer name

    When I added Bike Light to cart
    And I added Fleece Jacket to cart
    Then Cart Item count should be '2'

    When I navigated to Cart page
    And I removed Bike Light from cart
    Then Cart Item count should be '1'
    And I removed Fleece Jacket from cart
    Then Cart Item count should be ''