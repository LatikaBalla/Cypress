///<reference types='cypress'/>
//import { expect } from 'chai'
import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps'
import {SearchCarPage} from './Pages/SearchCarPage.cy'

const searchCar = new SearchCarPage()
//First seanario 
Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})

When('Select Country name for specific city',function(){
    searchCar.SelectCountry('Poland')
    searchCar.SelectCity('Wroclaw')
       
    })

    And('Enter Model No',function (){
      searchCar.enterModelName('Suzuki Swift')

    })
  And ('Select valid PickUp and Dropoff date',function (){
    searchCar.enterPickupDate('2022-10-18')
    searchCar.enterDropoffDate('2022-10-20')
  })
  Then('Click on Search Button' , function(){
    searchCar.clickonSearchButton()    
  })
  And('Click on Rent Button' , function(){
    searchCar.SelectCarandClickRent('2')
  })
  
  Then ('See the information',function(){
    cy.get('.card-body > :nth-child(3)',{timeout:8000}).should('contain','Location: Poland, Wroclaw')
    cy.get('.card-body > :nth-child(5)').should('have.text',' Pickup date: 2022-10-18')
    cy.get('.card-body > :nth-child(6)').should('have.text',' Dropoff date: 2022-10-20')
    cy.log("Successful valid Credential")
  })
// second 
  Given('User should navigate to Website',()=>{
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
  })
  When ('Select Country specific city and Model no',()=>{
    searchCar.SelectCountry('Poland')
    searchCar.SelectCity('Wroclaw')
    searchCar.enterModelName('Suzuki Swift')
  })
  
  Then ('Click on Search Button without Date',()=>{
    searchCar.clickonSearchButton()    
  })
  And ('Message should be display',()=>{
    cy.get('.alert',{timeout:6000}).should('have.text','Please fill pickup and drop off dates')
  })
  


//THird
  Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})
When('Fill up the details invalid Country and city',function(){
  //let cntry='';
    searchCar.SelectCountry('Germainy')
    //.should('have.value','2')
//cy.log(cntry)

//cy.get("option")
//const message=$option.text();
//expect($option, message).to.have.attr("value")
    searchCar.SelectCity('Wroclaw')
    searchCar.enterModelName('Suzuki Swift')
    searchCar.enterPickupDate('2022-10-18')
    searchCar.enterDropoffDate('2022-10-20')
    })

  Then ('Click on search button for rent',function (){
    searchCar.clickonSearchButton()    
   // searchCar.SelectCarandClickRent('2')
    
  })
  And('Click on Rent button and Select any option' , function(){
    searchCar.SelectCarandClickRent('5')
  })
  Then ('See the details of country and city',function(){

        cy.get('.card-body > :nth-child(3)').should('contain','Location: Germainy, Wroclaw')

    cy.get('.card-body > :nth-child(5)').should('have.text',' Pickup date: 2022-10-18')
    cy.get('.card-body > :nth-child(6)').should('have.text',' Dropoff date: 2022-10-20')
    cy.log("Successful valid Credential")
  })
//fourth
  Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})

When('Fill up the details invalid pickup and Dropoff',function(){
    searchCar.SelectCountry('Poland')
    searchCar.SelectCity('Cracow')
    searchCar.enterModelName('Volkswagen Touran')
    searchCar.enterPickupDate('2022-10-23')
    searchCar.enterDropoffDate('2022-10-20')
    })

  Then ('user should click on search button',function (){
    searchCar.clickonSearchButton()    
   // searchCar.SelectCarandClickRent('2')
    
  })
  And('Click on Rent button get available cares for rent' , function(){
    searchCar.SelectCarandClickRent('7')
  })
  Then ('See the information of Pickup and Dropoff date',function(){
    cy.get('.card-body > :nth-child(3)').should('contain','Location: France, Paris')
    cy.get('.card-body > :nth-child(5)').should('have.text',' Pickup date: 2022-10-23')
    cy.get('.card-body > :nth-child(6)').should('have.text',' Dropoff date: 2022-10-20')
    //cy.log("Successful valid Credential")
    

  })


  
/*Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})
  When('Fill up the details with invalid Date',function(){
    searchCar.SelectCountry('Poland')
    searchCar.SelectCity('Wroclaw')
    searchCar.enterModelName('Suzuki Swift')
    searchCar.enterPickupDate('19-10-2022')
    searchCar.enterDropoffDate('23-10-2022')
    })

  Then ('See the information',function(){
    cy.log("unSuccessful")
  })
*/
