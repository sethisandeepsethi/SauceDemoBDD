Feature: Complete Add to cart journey

@smoke
Scenario: Complete purchase journey
    Given I navigated to the Sauce Demo page
    When I tried login with username "standard_user" and password "secret_sauce"
    Then I navigated to Products page

    When I set customer name to "Sandeep"
    Then I get customer name
    
    When I added Bike Light to cart
    And I added Fleece Jacket to cart
    Then Cart Item count should be '2'

    When I navigated to Cart page
    And I perform checkout from the Cart page
    Then I navigated to Customer Information page

    When I entered my personal information "John" ,"Smith" and "Qwer1234" in Customer Information page
    And  I click on Continue button
    Then I navigated to Overview page

    When I finish checkout in  Overview page
    Then I navigated to Checkout Complete page
    And I see Order Successful message