/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{
    it('My Second Testcase', function(){

        cy.visit("https://demo.nopcommerce.com/register")
        //cy.url().should('include', "https://demo.nopcommerce.com/register")
        //cy.get('#small-searchterms').should('not.be.disabled')
        cy.get('#small-searchterms').click().should('have.focus')
        //cy.get('#small-searchterms').type('Computers')
        //cy.get('#small-searchterms').should('', "Computers")
        //cy.get('.button-1.search-box-button').click()
        //cy.get('.button-1.search-box-button').should('not.be.disabled')
        //cy.get('.button-1.search-box-button').click()
        //cy.get('#FirstName').should('be.visible')
        //cy.get('#FirstName').type('Hammad')
        

    })

})