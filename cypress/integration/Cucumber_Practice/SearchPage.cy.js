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

When('Select Country specific city',function(){
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

//Second 
  Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})

When('Fill up the details',function(){
    searchCar.SelectCountry('Germainy')//.should('equal','Germainy')

    searchCar.SelectCity('Wroclaw')
    searchCar.enterModelName('Suzuki Swift')
    searchCar.enterPickupDate('2022-10-18')
    searchCar.enterDropoffDate('2022-10-20')
    })

  Then ('Click on search button',function (){
    searchCar.clickonSearchButton()    
   // searchCar.SelectCarandClickRent('2')
    
  })
  And('Click on Rent button' , function(){
    searchCar.SelectCarandClickRent('2')
  })
  Then ('See the information',function(){
    cy.get('.card-body > :nth-child(3)').should('contain','Location: Germainy, Wroclaw')
    cy.get('.card-body > :nth-child(5)').should('have.text',' Pickup date: 2022-10-18')
    cy.get('.card-body > :nth-child(6)').should('have.text',' Dropoff date: 2022-10-20')
    cy.log("Successful valid Credential")
  })
//THird
  Given('User should navigate to Website', function(){
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
})

When('Fill up the details',function(){
    searchCar.SelectCountry('France')
    searchCar.SelectCity('Paris')
    searchCar.enterModelName('Suzuki Swift')
    searchCar.enterPickupDate('2022-10-23')
    searchCar.enterDropoffDate('2022-10-20')
    })

  Then ('Click on search button',function (){
    searchCar.clickonSearchButton()    
   // searchCar.SelectCarandClickRent('2')
    
  })
  And('Click on Rent button' , function(){
    searchCar.SelectCarandClickRent('2')
  })
  Then ('See the information',function(){
    cy.get('.card-body > :nth-child(3)').should('contain','Location: France, Paris')
    cy.get('.card-body > :nth-child(5)').should('have.text',' Pickup date: 2022-10-23')
    cy.get('.card-body > :nth-child(6)').should('have.text',' Dropoff date: 2022-10-20')
    cy.log("Successful valid Credential")
    

  })

/*
  Given ('User should navigate to Website',()=>{
    searchCar.navigate('http://qalab.pl.tivixlabs.com/')
    cy.url().should('include','tivix')
  })

  When('Select Country from dropdownList',()=>{
    let Country=''
  searchCar.SelectCountry('Germainy')
    
    cy.log(Country)
     })
  And  ('Select City from dropdownList',()=>{

    let name='Wroclaw'
    searchCar.SelectCity(name).should('be.visible','Berlin')
    expect(name).to.be.equal('Berlin')
  })
*/
  /*When ('Enter the PickUp date', ()=>{

    searchCar.enterPickupDate('2022-10-15')
  assert.equal('2022-10-15','2022-10-15')
  })
  And ('Enter the DropOff Date',()=>{
    searchCar.enterDropoffDate('2022-10-17')
  })


  
Given('User should navigate to Website', function(){
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
