/// <reference types="Cypress" />

describe('My third Test Suite', function()
{
    it('My third Testcase', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //parent child chaining
        cy.get('.products').as('productLocator')


        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
           const textveg = $el.find('h4.product-name').text()
           if(textveg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        }) 
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

})




