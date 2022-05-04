/// <reference types="cypress" />
import LoginPageObjects from '../PageObjects/MyLoginMethods'
const loginPageObjects = new LoginPageObjects

describe('AmazonFunctionality', () => {

    beforeEach(() => {
        loginPageObjects.VisitUrl()
        loginPageObjects.SignInButton().click()
        Cypress.on('uncaught:exception', (err, runnable) => { // returning false here prevents Cypress from failing the test
            return false
        })
    });

    it('Good Credentials', () => {



        loginPageObjects.InputUserName().type('obaserudolf2@gmail.com')
        loginPageObjects.ContinueButton().click()
        loginPageObjects.InputPassword().type('Obase1991#')
        loginPageObjects.SummitButton().click()
        loginPageObjects.SearchBar().type('Nautical Voyage By Nautical For Men')
        loginPageObjects.SearchSubmitButton().click()
        loginPageObjects.ItermSelected().click()
        loginPageObjects.AddToCartButton().click()
        loginPageObjects.SignOutButton().click({ force: true })


    })

    it.only('Bad Credentials', () => {
        loginPageObjects.InputUserName().type('whymmhh@gmail.com')
        loginPageObjects.ContinueButton().click()
        loginPageObjects.WarnngAlert().should('contain', 'There was a problem')




    })














})