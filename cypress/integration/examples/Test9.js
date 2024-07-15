/// <reference types="Cypress" />

describe('Login Functionality with Regex Validations', () => {
    // const invalidEmail = 'invalid.com';
    // const invalidPassword = 'pass';
    // const validEmail = 'validuser@example.com';
    // const validPassword = 'ValidPass123!';
  
    // beforeEach(() => {
    //   // Visit the login page before each test
    //   cy.visit('https://demo.nopcommerce.com/');
    // });
  
    it('Should validate username and password using regex', () => {

        cy.visit('https://demo.nopcommerce.com/');
      // Act: Enter invalid email and password, then click login
      cy.get('a[href="/login?returnUrl=%2F"]').click()
      cy.get('#Email').type('janjua@.com');
      //cy.get('#Password').type('Testing123');
      cy.get(".buttons button[type$='submit']").click();
      //cy.get("a[href*='/logout']").click()
  
      // Assert: Verify error message for invalid email format
     //cy.get('#Email-error').should('be.visible').and('contain', 'Wrong email'); // Adjust the text if it differs
     cy.get('#Email-error').should('be.visible').and('contain', 'Please enter a valid email address.'); // Adjust the text if it differs
  
    });
  });