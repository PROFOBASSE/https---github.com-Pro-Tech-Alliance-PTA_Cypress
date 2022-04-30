class LoginPageObjects{

input_UserName(){

return cy.get('#ap_email')

}

loginContinueButton(){
    return cy.get('#continue')
}

wrongUserAlertMessage(){
    return cy.get('h4')
}







}export default LoginPageObjects