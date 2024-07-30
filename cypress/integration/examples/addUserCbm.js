/// <reference types="Cypress" />

describe("Admin", function()
{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
    it("Adding new Admin user everytime (USER TYPE==TENANT)", function()
    {
        //get the current miliseconds (will be used to uniquely add new email for adding user)
        const date = new Date();
        const s= date.getMilliseconds();
       
       //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        //click on button
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        //click on admin
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
        cy.wait(5000);
 
        //click on user
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        //from the drop down get the waitrose and click on it
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
        cy.get("div[class='ng-star-inserted'").eq(16).click();
 
        //aply wait before moving further
        cy.wait(10000);
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
       //aply wait before moving further
        cy.wait(5000);
 
        //fill all the fields
        cy.get('input[id="titleadd"]').type("QA Test Engineer");
        cy.get('input[id="firstNmeadd"]').type("Waseem");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        //concatenate the s (date) variable with gmail
        cy.get('input[id="userNmeadd"]').type("Attainer01"+ s + "@gmail.com");
        cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
       
        cy.get('span.ng-star-inserted').contains('Tenant').click();
        cy.get('input[name="userLevel"]').type(2);
 
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
       
        //aply wait before moving further
        cy.wait(5000);
         
 
     
    })
   
    it("Adding new Admin user everytime (USER TYPE==NEXT)", function()
    {
        //get the current miliseconds (will be used to uniquely add new email for adding user)
        const date = new Date();
        const s= date.getMilliseconds();
       
       //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        //click on button
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        //click on admin
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
        cy.wait(5000);
 
        //click on user
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        //from the drop down get the waitrose and click on it
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
        cy.get("div[class='ng-star-inserted'").eq(16).click();
 
        //aply wait before moving further
        cy.wait(10000);
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
       //aply wait before moving further
        cy.wait(5000);
 
        //fill all the fields
        cy.get('input[id="titleadd"]').type("QA Test Engineer");
        cy.get('input[id="firstNmeadd"]').type("Waseem");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        cy.get('input[id="userNmeadd"]').type("Attainer01"+ s + "@gmail.com");
        cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
       
        cy.get('span.ng-star-inserted').contains('Next').click();
        cy.get('input[name="userLevel"]').type(2);
 
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
       
        //aply wait before moving further
        cy.wait(5000);
         
        cy.log("User added sucessfully");
 
     
    })
    it("Admin user already added", function()
    {
        //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
       cy.get("div[class='ng-star-inserted'").eq(16).click();
       //aply wait before moving further
       cy.wait(10000);
 
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('input[id="titleadd"]').type("QA Test Engineer");
        cy.get('input[id="firstNmeadd"]').type("Waseem");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        cy.get('input[id="userNmeadd"]').type("Attainer01@gmail.com");
        cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
       
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
 
        //click
        cy.get('span.ng-star-inserted').contains('Next').click();
 
        cy.get('input[name="userLevel"]').type(2);
 
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
       
       //aply wait before moving further
        cy.wait(5000);
 
        cy.get('p').contains(' Username already exists. ').should('have.text', ' Username already exists. ');
        cy.log("user added sucessfully")
     
    })
 
    it("Admin user add Invalid(Emplty title)", function()
    {
        //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
       cy.get("div[class='ng-star-inserted'").eq(16).click();
       //aply wait before moving further
       cy.wait(10000);
 
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
        //aply wait before moving further
        cy.wait(5000);
 
        // cy.get('input[id="titleadd"]').type("");
        cy.get('input[id="firstNmeadd"]').type("last name");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        cy.get('input[id="userNmeadd"]').type("Attainer01@gmail.com");
        cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
       
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
 
        cy.get('span.ng-star-inserted').contains('Next').click();
 
        cy.get('input[name="userLevel"]').type(2);
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
        cy.get('p').contains(' Please fill in all fields. ').should('have.text', ' Please fill in all fields. ');
        cy.log("User cannot be  to added when user cannot enter title is empty");
     
    })
 
    it("Admin user add Invalid(Emplty Username", function()
    {
       //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
       cy.get("div[class='ng-star-inserted'").eq(16).click();
       //aply wait before moving further
       cy.wait(10000);
 
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('input[id="titleadd"]').type("First name");
        cy.get('input[id="firstNmeadd"]').type("last name");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        // cy.get('input[id="userNmeadd"]').type("Attainer01@gmail.com");
        cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
       
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
 
       
        cy.get('span.ng-star-inserted').contains('Next').click();
 
 
        cy.get('input[name="userLevel"]').type(2);
 
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
        cy.get('p').contains(' Please enter a valid email address ').should('have.text', ' Please enter a valid email address ');
        cy.log("User cannot be  to added when user cannot enter email");
     
    })
 
    it("Admin user add Invalid(Emplty Password", function()
    {
        //will visit on the particular url
        cy.visit("https://cbm-test.checkit.net/weblogin");
 
        //aply wait before moving further
        cy.wait(5000);
 
        // Enter username and password
        cy.get('input[id="username"]').type("Waseem.Suleman@checkit.net");
        cy.get('input[id="password"]').type("A4tech.8818");
   
        cy.get('input[class="btn"]').click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-admin box-status'] a").click();
       //aply wait before moving further
        cy.wait(5000);
 
        cy.get("[class='box height-33 box-status-icon icon-users box-status'] a").click();
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('button[class="ui-autocomplete-dropdown ng-tns-c5-27 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted"] span').eq(0).click({force: true });
       cy.get("div[class='ng-star-inserted'").eq(16).click();
       //aply wait before moving further
       cy.wait(10000);
 
        cy.get('button[class="btn-user-action ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"] span').eq(0).click({force: true });
        //aply wait before moving further
        cy.wait(5000);
 
        cy.get('input[id="titleadd"]').type("First name");
        cy.get('input[id="firstNmeadd"]').type("last name");
        cy.get('input[id="lastNmeadd"]').type("Suleman");
        cy.get('input[id="userNmeadd"]').type("Attainer01@gmail.com");
        // cy.get('input[id="newPasswrdadd"]').type("Suleman@123");
        cy.get('input[id="contactNmeadd"]').type("+923157488818");
 
        //aply wait before moving further
        cy.wait(1000);
       
        cy.get('span[class="ui-dropdown-trigger-icon ui-clickable pi pi-chevron-down"').click();
 
       
        cy.get('span.ng-star-inserted').contains('Next').click();
 
 
        cy.get('input[name="userLevel"]').type(2);
 
        cy.get('span[class="ui-button-text ui-clickable"]').contains('Save').click();
        cy.get('p').contains(' Password should be atleast 8 characters long and should contain at least 1 uppercase,1 lowercase and a numeric character. ').should('have.text', ' Password should be atleast 8 characters long and should contain at least 1 uppercase,1 lowercase and a numeric character. ');
       
        cy.log("User cannot be  to added when password field is empty");
     
     
    })
})