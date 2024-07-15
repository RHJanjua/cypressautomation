/// <reference types="Cypress" />

describe('Handle alert and confirm', function()
{
    it('Should handle alert and confirm', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')



       
    })
})