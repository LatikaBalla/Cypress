///<reference types='cypress'/>
//import { expect } from 'chai'
import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('I visit Website', function(){
    cy.visit('https://codenboxautomationlab.com/')
    cy.url().should('include','codenbox')
})

When('Click on the practice button',function(){
cy.get('[href="http://codenboxautomationlab.com/practice/"]').click()
})

  Then ('I should see Then practice page ',function (){
cy.log("Successful")
  })

  
