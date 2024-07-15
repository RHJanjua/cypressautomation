class LoginPage
{

setUserName(username)
{
    cy.get('#username').type(username)
}
setPassword(password)
{
    cy.get('#password').type(password)
}
clickLoginButton()
{
    cy.get("input[value='Login']").click()
}
verifyLogin()
{
    cy.get('p a').should('have.text', 'Waseem Suleman')
}

}
export default LoginPage