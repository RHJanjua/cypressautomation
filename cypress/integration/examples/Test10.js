describe('Login Functionality with Regex Validations', () => {
    const emails = [
        'invalid.com',
        'janjua@.com',
        'hammad@gmail.com', // Assuming this is the valid email
        // 'anotherInvalid@com'
    ];
    const validPassword = 'ValidPass123!';

    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('https://demo.nopcommerce.com/');
    });

    emails.forEach(email => {
        it(`Should validate email: ${email}`, () => {
            // Act: Enter email and attempt to login
            cy.get('a[href="/login?returnUrl=%2F"]').click();
            cy.get('#Email').clear().type(email);
            cy.get('#Password').type(validPassword); 
            cy.get(".buttons button[type='submit']").click();

            // Assert: Check if the email is valid or invalid
            cy.get('body').then($body => {
                if ($body.find('#Email-error').length) {
                    // Email is invalid
                    //cy.get('#Email-error').should('be.visible').and('contain', 'Wrong email');
                    cy.get('#Email-error').should('be.visible').and('contain', 'Please enter a valid email address.');
                } else {
                    // Email is valid, attempt login
                    cy.get('#Email').clear().type('hammad@gmail.com');
                    cy.get('#Password').clear().type('Testing123');
                    cy.get(".buttons button[type='submit']").click();
                }
            });
        });
    });
});