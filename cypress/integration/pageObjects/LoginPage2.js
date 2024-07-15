class LoginPage
{
    textUsername='#username'
    textPassword='#password'
    btnLogin = "input[value='Login']"
    vLogin = 'p a'
    


setUserName(username)
{
    cy.get(this.textUsername).type(username)
}
setPassword(password)
{
    cy.get(this.textPassword).type(password)
}
clickLoginButton()
{
    cy.get(this.btnLogin).click()
}
verifyLogin()
{
    cy.get(this.vLogin).should('have.text', 'Waseem Suleman')
}

}
export default LoginPage