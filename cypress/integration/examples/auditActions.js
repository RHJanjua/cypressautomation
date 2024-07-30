/// <reference types="Cypress" />

describe('Handle Audit', function () {
    it("Audit Action (Logged In Assertion)", function () {
        cy.visit("https://cbm-test.checkit.net/weblogin");
   
        // Enter username and password
        //
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        cy.wait(5000);
   
        cy.get(
          "[class='box height-33 box-status-icon icon-admin box-status'] a"
        ).click();
   
        cy.get('.ui-dialog-content > .row > .right > .box > a').click();
        cy.wait(5000);
   
        // cy.get('.ui-button-text').click({force: true}).type('Next Control');
   
        cy.get("button[class='ui-autocomplete-dropdown ng-tns-c5-23 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted']").click().type("Next Control");
   
        cy.get('.ng-tns-c5-23 > .ng-star-inserted > div').eq(16).click();
   
        cy.get('.ui-autocomplete-items');
   
        cy.get("input[class='ng-star-inserted']").eq(1).type('Logged In{enter}');
   
        cy.get('.ui-table-tbody > :nth-child(1) > :nth-child(3)').invoke('text')
        .then((text) => {
          expect(text).to.contain('Logged In');
          cy.log(text);
        });
   
       
      });
    })