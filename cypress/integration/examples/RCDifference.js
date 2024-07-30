/// <reference types="Cypress" />

describe('Handle Registration', function () {
    it('Should handle resgistration', function () {

         cy.visit("https://demowebshop.tricentis.com/register")

         cy.get("div[class='page-title'] h1").contains('Register')
         cy.get('#gender-male').click()
         cy.get('#FirstName').type('John')
         cy.get('#LastName').type('David')
         cy.get('#Email').type('abcd@gmail.com')
         cy.get('#Password').type('Testing123')
         cy.get('#ConfirmPassword').type('Testing123')


    })
})