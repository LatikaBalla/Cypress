 
Feature: Search Car For Rent
 As a User
  In order to use the application
  I want to Search car  for rental I have to give PickUp and drop date

    Scenario: A user should be able to search for a car in a specific country/city valid credential  
    Given User should navigate to Website
    When Select Country specific city 
    And Enter Model No
    And Select valid PickUp and Dropoff date
    Then Click on Search Button 
    And Click on Rent Button
    Then See the information

Scenario: A user should be able to search for a car in a specific country/city invalid Credential 
    Given User should navigate to Website
    When Fill up the details
    Then Click on search button
    And Click on Rent button
    Then See the information

    Scenario: A user should be able to search for a car in a specific Pickup and Dropoff dates invalid Credential 
    Given User should navigate to Website
    When Fill up the details
    Then Click on search button
    And Click on Rent button
    Then See the information