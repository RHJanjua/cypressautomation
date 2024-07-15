/// <reference types="Cypress" />
//import LoginPage from "../pageObjects/LoginPage"
import LoginPage from "../pageObjects/LoginPage2"

describe('Handle alert and confirm', function () {
    it('Should handle alert and confirm', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        const login = new LoginPage
        login.setUserName('waseem.suleman@checkit.net')
        login.setPassword('A4tech.8818')
        login.clickLoginButton()
        login.verifyLogin()



    })

    it.only('Should handle alert and confirm', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        const login = new LoginPage
        login.setUserName('waseem.suleman@checkit.net')
        login.setPassword('A4tech.8818')
        login.clickLoginButton()
        login.verifyLogin()
        cy.get(':nth-child(3) > .left > .box > a').click()
        cy.get("a[title$='Users']").click()
        cy.wait(5000)
        cy.get('.smlldropdwn > .ui-autocomplete-dropdown > .ui-button-icon-left').click()
        cy.get(":nth-child(6) > .ng-star-inserted > div").click()
        cy.wait(5000)
        cy.get('[icon="pi pi-plus"] > .ui-button-icon-left').click()
        cy.wait(5000)
        cy.get('#titleadd').type('Mr')
        cy.get('#firstNmeadd').type('Hammad')
        cy.get('#lastNmeadd').type('Janjua')
        cy.get('#userNmeadd').type('hammad@checkit.net')
        cy.get('#newPasswrdadd').type('Testing123')
        cy.get('#contactNmeadd').type('03331234567')
        cy.get('.ui-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .ui-dropdown-item').click()
        cy.get('#userLevel').type('2')
        cy.get('.ui-calendar > .ui-inputtext')
        cy.wait(5000)
        cy.get('button[label="Save"] span[class="ui-button-text ui-clickable"]').click()
        cy.get('div[class="ui-dialog-content ui-widget-content"] p').should('have.text',' Username already exists. ')
        cy.get('button[class="btn btn-default"]').click()







    })
})