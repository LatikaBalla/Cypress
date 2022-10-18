 
Feature: Search Car For Rent
 As a User
  In order to use the application
  I want to Search car  for rental I have to give PickUp and drop date


    Scenario: A user should be able to search for a car in a specific country/city valid credential  
    Given User should navigate to Website
    When Select Country name for specific city 
    And Enter Model No
    And Select valid PickUp and Dropoff date
    Then Click on Search Button 
    And Click on Rent Button
    Then See the information

 Scenario: to rent a car, the user without providing dates trying to Search
    Given User should navigate to Website
    When Select Country specific city and Model no
    Then Click on Search Button without Date
    And Message should be display 


Scenario: A user should be able to search for a car in a specific country/city invalid Credential 
    Given User should navigate to Website
    When Fill up the details invalid Country and city
    Then Click on search button for rent
    And Click on Rent button and Select any option
    Then See the details of country and city

    Scenario: A user should be able to search for a car in a specific Pickup and Dropoff dates invalid Credential 
    Given User should navigate to Website
    When Fill up the details invalid pickup and Dropoff
    Then user should click on search button 
    And Click on Rent button get available cares for rent
    Then See the information of Pickup and Dropoff date