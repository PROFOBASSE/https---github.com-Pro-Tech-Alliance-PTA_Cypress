class LoginPageObjects {

    VisitUrl() {
        cy.visit('https://www.amazon.com/')
    }

    ContinueButton() {
        return cy.get('[type = "submit"]')
    }

    InputUserName() {
        return cy.get('#ap_email')
    }

    SignInButton() {
        return cy.contains('Sign in')
    }

    InputPassword() {
        return cy.get('#ap_password')
    }

    SummitButton() {
        return cy.get('#signInSubmit')
    }

    SearchBar() {
        return cy.get('#twotabsearchtextbox')
    }

    SearchSubmitButton() {
        return cy.get('#nav-search-submit-button')
    }

    ItermSelected() {
        return cy.contains('Nautica Voyage By Nautica For Men Eau De Toilette Spray, 100 ml')
    }

    AddToCartButton() {
        return cy.get('[title="Add to Shopping Cart"]')
    }
    SignOutButton() {
        return cy.get('#nav-item-signout > span')
    }

    WarnngAlert() {
        return cy.get('[class="a-alert-heading"]')
    }





}
export default LoginPageObjects