/// <reference types="Cypress" />

describe('My 4th Test Suite', function()
{
    it('My 4th Testcase', function(){

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 100000 })
        cy.get('#username').type('waseem.suleman@gmail.com')
        cy.get('#password').type('A4tech.8818')
        cy.get("input[value='Login']").click()
        cy.wait(4000)

        // Assert: Verify error message is displayed
        cy.get('p[style*="vertical-align:top;position:absolute;margin:auto;color:red"]') 
        .should('be.visible').and('contain', 'Wrong username or password'); 

  // Clear fields after invalid login attempt
        cy.get('#username').clear();
        cy.get('#password').clear();
        
        cy.get('#username').type('waseem.suleman@checkit.net')
        cy.get('#password').type('A4tech.8818')
        cy.get("input[value='Login']").click()

 })
})