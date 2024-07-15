/// <reference types="Cypress" />
//import LoginPage from "../pageObjects/LoginPage"
import LoginPage from "../pageObjects/LoginPage2"

describe('Handle alert and confirm', function () {

    it.only('Should handle alert and confirm', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        const login = new LoginPage
        login.setUserName('waseem.suleman@checkit.net')
        login.setPassword('A4tech.8818')
        login.clickLoginButton()
        login.verifyLogin()
        cy.get(':nth-child(3) > .left > .box > a').should('not.be.disabled').click()
        cy.get(':nth-child(1) > :nth-child(3) > .left > .box > .box-stat-headline-value').should('have.text', 'ADMIN')
        cy.get("a[title$='Users']").click()
         cy.wait(5000)
         cy.get('.smlldropdwn > .ui-autocomplete-dropdown > .ui-button-icon-left').click()
         cy.get(":nth-child(6) > .ng-star-inserted > div").click()
         cy.get('.mediumdropdwn > .ui-inputtext').type('Hamm')
        cy.get('.ng-tns-c5-28 > .ng-star-inserted > div').click()
         cy.get(':nth-child(2) > :nth-child(1) > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box').click()
         cy.get('.ui-dialog-content > div > .btn').click()
        cy.get("body > app-root:nth-child(1) > app-useraccess:nth-child(2) > div:nth-child(12) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p-table:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > button:nth-child(1)").click()
     cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > :nth-child(1) > :nth-child(1) > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box').click()
     cy.get('.ui-dialog-content > div > .btn').click()
        // // cy.get('body > app-root:nth-child(1) > app-useraccess:nth-child(2) > div:nth-child(12) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > p-table:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > button:nth-child(1)').click()
        // // cy.get('body > app-root:nth-child(1) > app-useraccess:nth-child(2) > div:nth-child(12) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > p-table:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > p-tablecheckbox:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
        // // cy.get('.ui-dialog-content > div > .btn').click()
        // // cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > .ui-state-highlight > .col-button > .ui-button').click()

        cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > tr > td:first-child > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
            .each(($checkbox, index, $list) => {
                if ($checkbox.is(':visible')) {
                    cy.wrap($checkbox).click();
                    cy.get('.ui-dialog-content > div > .btn').click();

                    // Based on the index, click the respective button
                    switch (index) {
                        case 0:
                            cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > :nth-child(1) > .col-button > .ui-button').click();

                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(0) // first checkbox
                                .should('be.visible')
                                .click();
                            cy.wait(5000)
                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after first checkbox

                            // Check the fourth checkbox
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(3) // fourth checkbox
                                .should('be.visible')
                                .click();

                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after fourth checkbox
                            break;
                        case 1:
                            cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > :nth-child(2) > .col-button > .ui-button').click()
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(0) // first checkbox
                                .should('be.visible')
                                .click();
                            cy.wait(5000)
                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after first checkbox

                            // Check the fourth checkbox
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(1) // fourth checkbox
                                .should('be.visible')
                                .click();

                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after fourth checkbox
                            break;
                        case 2:
                            cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > :nth-child(3) > .col-button > .ui-button').click();
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(0) // first checkbox
                                .should('be.visible')
                                .click();
                            cy.wait(5000)
                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after first checkbox

                            // Check the fourth checkbox
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(1) // fourth checkbox
                                .should('be.visible')
                                .click();

                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after fourth checkbox
                            break;
                        case 3:
                            cy.get(':nth-child(3) > .box > p-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .usr-access-table > .ui-table-tbody > :nth-child(4) > .col-button > .ui-button').click();
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(0) // first checkbox
                                .should('be.visible')
                                .click();
                            cy.wait(5000)
                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after first checkbox

                            // Check the fourth checkbox
                            cy.get('.usr-access-table > .ui-table > .ui-table-scrollable-wrapper > .ui-table-scrollable-view > .ui-table-scrollable-body > .ui-table-scrollable-body-table > .ui-table-tbody [style="width: 3em"] > p-tablecheckbox > .ui-chkbox > .ui-chkbox-box')
                                .eq(1) // fourth checkbox
                                .should('be.visible')
                                .click();

                            cy.get('.ui-dialog-content > div > .btn').click(); // Click button after fourth checkbox
                            break;
                        default:
                            cy.log('No matching button for index ' + index);
                    }
                } else {
                    cy.log('Checkbox ' + index + ' is not visible');
                }
            });

        cy.get('[label="Save"] > .ui-button-text').click()
        cy.get('.ui-dialog-content > div > .btn').click()


    })
})