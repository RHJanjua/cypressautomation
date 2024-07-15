import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open Ecommerce Page', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

//When I add items to Cart

When('I add items to Cart', () => {
    homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    })

    productPage.getCheckOutButton().click()
})

//And Validate the total prices

And('Validate the total prices', () => {
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res);
    }).then(function () {
        cy.log(sum)
    })

    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(Number(sum))

    })
})

// Then select the country submit and verify Thankyou

Then('select the country submit and verify Thankyou',()=>
{
    
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