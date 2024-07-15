/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Testcase', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)


        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)

        // eq is used to get specific value
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('sf')
    })

        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
        const textveg = $el.find('h4.product-name').text()
        if(textveg.includes('Cauli'))
            {
                cy.wrap($el).find('button').click()
            }
    })

//assert if logo text is correctly displayed

cy.get('.brand').should('have.text', 'GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement){

   cy.log(logoelement.text())
    
})

})

})
