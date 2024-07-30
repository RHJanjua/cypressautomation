/// <reference types="Cypress" />

describe('Handle Edit User', function () {
    it("User assertion", function () {
        cy.visit("https://cbm-test.checkit.net/weblogin");
   
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        cy.wait(5000);
   
        cy.get(
          "[class='box height-33 box-status-icon icon-admin box-status'] a"
        ).click();
        cy.wait(5000);
   
        cy.get(
          "[class='box height-33 box-status-icon icon-users box-status'] a"
        ).click();
        cy.wait(5000);
   
        cy.get(
          'button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span'
        )
          .eq(0)
          .click({ force: true });
        cy.get("div[class='ng-star-inserted'").eq(16).click();
        cy.wait(9000);
   
        cy.get(
          ".mediumdropdwn > .ui-autocomplete-dropdown > .ui-button-text"
        ).click({ force: true });
        cy.wait(5000);
   
        cy.contains("div.ng-star-inserted", "waseem.suleman@checkit.net").click();
   
        cy.wait(5000);
   
        cy.get("input[name='userName']")
          .invoke("val")
          .then((text) => {
            expect(text).to.equal("waseem.suleman@checkit.net");
          });
      });
});