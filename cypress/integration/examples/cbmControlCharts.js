/// <reference types="Cypress" />

describe('Handle Audit', function () {
    it('Should handle Audit', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        cy.get('#username').type('waseem.suleman@checkit.net')
        cy.get('#password').type('A4tech.8818')
        cy.get("input[value='Login']").should('not.be.disabled').click()
        cy.url().should('include', 'landingpage')
        cy.get(':nth-child(1) > .left > .box > a').click()
        cy.get("button[type*='button']").eq(0).click()
        cy.get(':nth-child(17) > .ng-star-inserted > div').click()
        cy.get("button[type*='button']").eq(1).click()
        cy.get(':nth-child(2) > .ng-star-inserted > div').click()
        cy.get("button[type*='button']").eq(2).click()
        cy.get('.ui-autocomplete-items > .ng-tns-c5-51').click()
        cy.get("button[icon='pi pi-plus']").click()
        cy.get("button[type*='button']").eq(0).click()
        cy.get('span[class="ui-tree-toggler pi pi-fw ui-unselectable-text pi-caret-right"]').eq(0).click()
        cy.get('.ui-treenode-children > p-treenode.ng-star-inserted > .ui-treenode > .ui-treenode-content > .ui-tree-toggler').click();
        cy.get('div[class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]').click();
        cy.get('.ui-g-2 > .ui-button > .ui-button-text').click()
        cy.get("input[name='nAnalysis']").click()
        // cy.get('.ui-datepicker-year').click()

        
        cy.get('select[class="ui-datepicker-year ng-tns-c4-525 ng-star-inserted"]').should('be.visible');
        // cy.get("select[class='ui-datepicker-year ng-tns-c4-525 ng-star-inserted]").click()
        //cy.get('.ui-datepicker-year.ng-tns-c4-525.ng-star-inserted').click({force:true})
        //cy.get('select').eq(1).select("option[value='2024']")


        
        // cy.get(':nth-child(4) > .drpdown-wrapper > .ng-pristine > .drpdownchrlchrt > .ui-autocomplete-dropdown').click()
        // cy.get('li div[class="ng-star-inserted"]').eq(1).click()
        // cy.get(':nth-child(5) > .drpdown-wrapper > .ng-untouched > .drpdownchrlchrt > .ui-autocomplete-dropdown').click()
        // cy.get('li div[class="ng-star-inserted"]').eq(3).click()
        // cy.get('.ng-untouched > .drpdownchrlchrt > .ui-autocomplete-dropdown').click()
        // cy.get('li div[class="ng-star-inserted"]').eq(3).click()
        // cy.get("button[type*='button']").eq(5).click()
        // cy.get('.drpdownrecipient > .ui-autocomplete-dropdown').click()
        // cy.get('li div[class="ng-star-inserted"]').eq(61).click()
        // cy.get('.ui-g-2 > .ui-button > .ui-button-text').click()
        // cy.get("button[label='Choose Rules']").click()
        



    })
})