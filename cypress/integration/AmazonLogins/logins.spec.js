/// reference types = "cypress" / >
describe('Amazon-Fuctionality', () => {

    beforeEach(() => {

        cy.visit('https://www.amazon.com/')
        cy.xpath('//*[@id="nav-link-accountList"]').click() // we have to download cypress xpath to make cypress recognise xpath ("npm install -D cypress-xpath")
        Cypress.on('uncaught:exception', (err, runnable) => { // returning false here prevents Cypress from failing the test
            return false
        })
    });

    it('verify with good credentials', () => {

        cy.get('#ap_email').type('obaserudolf2@gmail.com')
        cy.get('[class="a-button-input"]').click()
        cy.get('[maxlength="1024"]').type('Obase1991#')
        cy.get('#signInSubmit').click()
        cy.title().should('contain', 'Amazon.com. Spend less. Smile more.') //Asserting the page title
        cy.get('[id="twotabsearchtextbox"]').type('perfume for men') // perfume for men
        cy.get('[id="nav-search-submit-button"]').click()

    })

    it.only('verify with bad credentials', () => {

        cy.get('#ap_email').type('whymmhh@gmail.com')
        cy.get('[class="a-button-input"]').click()
        cy.get('[class="a-alert-heading"]').should('contain', 'There was a problem')


    })




















})