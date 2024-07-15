/// <reference types="Cypress" />

describe('Login Functionality with Regex Validations', () => {
    // const invalidEmail = 'invalid.com';
    // const invalidPassword = 'pass';
    // const validEmail = 'validuser@example.com';
    // const validPassword = 'ValidPass123!';
  
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://cbm-test.checkit.net/weblogin', { timeout: 90000 });
    });
  
    it('Should validate username and password using regex', () => {
      // Act: Enter invalid email and password, then click login
      cy.get('#username').type('    user@.com');
      cy.get('#password').type('ab6554');
      cy.get("input[value='Login']").click();
  
      // Assert: Verify error message for invalid email format
      cy.get('p[style*="vertical-align:top;position:absolute;margin:auto;color:red"]')
        .should('be.visible').and('contain', 'Wrong username or password'); // Adjust the text if it differs
  
      // Regex validation for email
      //expect(invalidEmail).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format');
  
      // Regex validation for password (at least 8 characters, mix of upper and lower case letters, digits, special characters)
      //expect(invalidPassword).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, 'Invalid password format');
  
      // Clear fields after invalid login attempt
     // cy.get('#username').clear();
      //cy.get('#password').clear();
  
      // Act: Enter valid email and password, then click login
    //   cy.get('#username').type('waseem.suleman@checkit.net');
    //   cy.get('#password').type('A4tech.8818');
    //   cy.get("input[value='Login']").click();
  
      // Assert: Verify successful login
    //   cy.url().should('include', '/dashboard'); // Replace with the actual URL path of the dashboard or landing page after login
    //   cy.get('.user-avatar').should('be.visible'); // Replace with an element that is visible only after a successful login
  
      // Optional: Perform regex validations on valid credentials
    //   expect(validEmail).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Valid email format');
    //   expect(validPassword).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, 'Valid password format');
    });
  });
  