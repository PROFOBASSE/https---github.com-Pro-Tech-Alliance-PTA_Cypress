/// <reference types="cypress" />

import LoginPageObjects from '../pageObects/loginPageObjects'

const loginPageObjects = new LoginPageObjects()

describe('Amazon - Login Functionality', () => {


    beforeEach(() => {

        cy.visit('https://www.amazon.com/')//opening the url
        cy.xpath('//*[@id="nav-link-accountList"]').click()

    });



    it('Step1_verify with wrong credentials', () => {

        loginPageObjects.input_UserName().type('sunrise@gmail.com')
        loginPageObjects.loginContinueButton().click()
        loginPageObjects.wrongUserAlertMessage().should('contain', 'There was a problem')///asserting the text appears on any h4 tag on the page

    })



    it('Step2_verify with good credentials', () => {


        loginPageObjects.input_UserName().type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
        loginPageObjects.loginContinueButton().click()
        cy.get('#ap_password').type('6097568083')
        cy.get('#signInSubmit').click()
        cy.title().should('not.contain', 'Amazon Sign-In')
        cy.xpath('//*[@id="nav-link-accountList"]').click()
        cy.title().should('contain', 'Your Account')

    })

    it('Step3_verify with good credentials', () => {


        loginPageObjects.input_UserName().type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
        loginPageObjects.loginContinueButton().click()
        cy.get('#ap_password').type('6097568083')
        cy.get('#signInSubmit').click()
        cy.title().should('not.contain', 'Amazon Sign-In')
        cy.xpath('//*[@id="nav-link-accountList"]').click()
        cy.title().should('contain', 'Your Account')

    })


    it('Step4_verify with good credentials', () => {


        loginPageObjects.input_UserName().type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
        loginPageObjects.loginContinueButton().click()
        cy.get('#ap_password').type('6097568083')
        cy.get('#signInSubmit').click()
        cy.title().should('not.contain', 'Amazon Sign-In')
        cy.xpath('//*[@id="nav-link-accountList"]').click()
        cy.title().should('contain', 'Your Account')

    })

    it('Step5_verify with good credentials', () => {


        loginPageObjects.input_UserName().type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
        loginPageObjects.loginContinueButton().click()
        cy.get('#ap_password').type('6097568083')
        cy.get('#signInSubmit').click()
        cy.title().should('not.contain', 'Amazon Sign-In')
        cy.xpath('//*[@id="nav-link-accountList"]').click()
        cy.title().should('contain', 'Your Account')

    })

    it('Step6_verify with good credentials', () => {


        loginPageObjects.input_UserName().type('canvyma@gmail.com')//using the id to interact with the eklement - USERNAME
        loginPageObjects.loginContinueButton().click()
        cy.get('#ap_password').type('6097568083')
        cy.get('#signInSubmit').click()
        cy.title().should('not.contain', 'Amazon Sign-In')
        cy.xpath('//*[@id="nav-link-accountList"]').click()
        cy.title().should('contain', 'Your Account')

    })


})