/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe('Handle Test Framework', function () {
    before(function () {
        //runs once before all testsin the block

        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('Should handle Test Frame work', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDatBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })

        productPage.getCheckOutButton().click()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res);
        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))

        })


        cy.contains('Checkout').click()
        cy.get('#country').type('Pakistan')
        cy.wait(5000)
        cy.get(".suggestions > ul > li > a").click()
        cy.get('#checkbox2').click({ force: true })
        cy.get("input[type='submit']").click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })


    })





})