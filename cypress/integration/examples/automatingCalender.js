/// <reference types="Cypress" />

describe('Frames Test', function () {
    it('Demo example', function () {

        const monthNumber = "6"
        const date = "15"
        const year = "2027"
        const expectedList = [monthNumber, date, year]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click() //Converts string into Number
        cy.contains('abbr', date).click()

        //Assertion

        cy.get('.react-date-picker__inputGroup__input').each(($el, index)=>{

            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
        })


    })

})