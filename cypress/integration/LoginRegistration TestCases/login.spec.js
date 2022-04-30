/// <reference types="cypress" />

describe('Amazon - Login Functionality',()=>{

it('verify with wrong credentials',()=>{
cy.visit('https://www.amazon.com/')//opening the url
cy.xpath('//*[@id="nav-link-accountList"]').click()
cy.get('#ap_email').type('protechalliance@test.com')//using the id to interact with the eklement - USERNAME
cy.get('#continue').click()
cy.get('h4').should('contain','There was a problem')///asserting the text appears on any h4 tag on the page

})

it.only('verify with good credentials',()=>{
cy.visit('https://www.amazon.com/')//opening the url
//cy.wait(1000)
cy.xpath('//*[@id="nav-link-accountList"]').as('UserAccountButton').click()//Alias in cypress
cy.get('#ap_email').type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
cy.get('#continue').click()
cy.get('#ap_password').type('6097568083')
cy.get('#signInSubmit').click()
cy.title().should('not.contain','Amazon Sign-In')
cy.get('@UserAccountButton').click()
cy.title().should('contain','Your Account')




})






















})