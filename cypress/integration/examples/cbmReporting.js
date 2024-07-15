/// <reference types="Cypress" />

describe('Handle alert and confirm', function () {
    it('Should handle alert and confirm', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        cy.get('#username').type('waseem.suleman@checkit.net')
        cy.get('#password').type('A4tech.8818')
        cy.get("input[value='Login']").should('not.be.disabled').click()
        cy.url().should('include', 'landingpage')
        cy.wait(4000)
        cy.get("a[title='Reporting']").click()
        cy.contains('a', 'Estate').scrollIntoView();
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-22 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"]').click();
        cy.get('.ng-star-inserted:nth-child(24)').click()
        cy.wait(7000)
        cy.get('button[class*="ui-autocomplete-dropdown"]').eq(4).should('be.visible').scrollIntoView().click({ force: true });
        cy.get('li[class="large-dropdown"] li:nth-child(23)').click()
        cy.get('#update_btn').should('not.be.disabled').click()
        cy.get('#reportdiv').should('be.visible')


    })
})


// describe('Handle alert and confirm', function()
// {
//     it('Should handle alert and confirm', function(){
//         cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
//         cy.get('#username').type('waseem.suleman@checkit.net')
//         cy.get('#password').type('A4tech.8818')
//         cy.get("input[value='Login']").click()
//         cy.wait(4000)
//         cy.get("a[title='Reporting']").click()
//         cy.contains('a', 'Estate').scrollIntoView();
//         //  cy.get('span[class="ui-button-text ui-clickable"]').eq(0).click();
//         cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-22 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"]').click();
//         cy.get('div[class="ng-star-inserted"]').eq(23).click();
//     })
// })