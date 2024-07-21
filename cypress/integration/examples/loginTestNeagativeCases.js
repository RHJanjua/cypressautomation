/// <reference types="Cypress" />

describe('My 4th Test Suite', function () {
    const url = "https://cbm-test.checkit.net/weblogin"
    
        const loginTests = [
            { username: '', password: '', description: 'both fields empty', expectedMessage: ' Please fill all fields ' },
            { username: 'incorrect.username@checkit.net', password: 'A4tech.8818', description: 'incorrect username', expectedMessage: 'Wrong username or password' },
            { username: 'waseem.suleman@checkit.net', password: 'incorrectpassword', description: 'incorrect password', expectedMessage: 'Wrong username or password' },
            { username: 'waseem.suleman@checkit.net', password: '', description: 'password field empty', expectedMessage: ' Please fill all fields ' },
            { username: '', password: 'A4tech.8818', description: 'username field empty', expectedMessage: ' Please fill all fields ' },
            //{ username: 'waseem.suleman@checkit.net', password: 'A4tech.8818', description: 'Login Successful', expectedMessage: ' ' }
    
        ];
        beforeEach(()=>{
            cy.visit(url)
        })
    
        loginTests.forEach(test => {
            it(`Login test with ${test.description}`, () => {
                //cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 100000 });
    
                if (test.username) {
                    cy.get('#username').type(test.username);
                }
    
                if (test.password) {
                    cy.get('#password').type(test.password);
                }
    
                cy.get("input[value='Login']").click();
    
                cy.wait(4000)
    
                // Add assertions to verify the login failed and appropriate error messages are shown
                cy.get('p').should('be.visible').and('contain', test.expectedMessage);
    
            });
        })
    
            it('Success', () => {
                cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 100000 });  // URL to match login page
    
                cy.get('#username').type('waseem.suleman@checkit.net')
                cy.get('#password').type('A4tech.8818')
                cy.get("input[value='Login']").click()
    
    
                cy.wait(4000)
    
            });
    
        });