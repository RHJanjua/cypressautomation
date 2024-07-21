// /// <reference types="Cypress" />

// describe('Handle Audit', function () {
//     it('Should handle Audit', function () {

//         cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
//         cy.get('#username').type('waseem.suleman@checkit.net')
//         cy.get('#password').type('A4tech.8818')
//         cy.get("input[value='Login']").should('not.be.disabled').click()
//         cy.url().should('include', 'landingpage')
//         cy.get(':nth-child(3) > .left > .box > a').click()
//         cy.get('.ui-dialog-content > .row > .right > .box > a').click()
//         cy.get("button[type='button']").eq(0).click()
//         cy.get(':nth-child(17) > .ng-star-inserted > div').click()
//         cy.get("th[ng-reflect-ng-switch='username'] input[type='text']").type("Waseem")
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Estate Assigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Logged In").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Report Viewed").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Estate Unassigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Building Unassigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Tag Assigned")

//         cy.get("th[ng-reflect-ng-switch='username'] input[type='text']").clear().type("Ian")
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").clear().type("Estate Assigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Logged In").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Report Viewed").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Estate Unassigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Building Unassigned").wait(4000).clear()
//         cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").type("Tag Assigned")





//     })
// })

// /// <reference types="Cypress" />

// describe('Handle Audit', function () {
//     it('Should handle Audit', function () {

//         cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
//         cy.get('#username').type('waseem.suleman@checkit.net')
//         cy.get('#password').type('A4tech.8818')
//         cy.get("input[value='Login']").should('not.be.disabled').click()
//         cy.url().should('include', 'landingpage')
//         cy.get(':nth-child(3) > .left > .box > a').click()
//         cy.get('.ui-dialog-content > .row > .right > .box > a').click()
//         cy.get("button[type='button']").eq(0).click()
//         cy.get(':nth-child(17) > .ng-star-inserted > div').click()

//         const users = ['Waseem', 'Ian', 'Ockert', 'Shehbaz'];
//         const auditTypes = [
//             "Estate Assigned",
//             "Logged In",
//             "Report Viewed",
//             "Estate Unassigned",
//             "Building Unassigned",
//             "Building Unassigned",
//             "Tag Assigned"
//         ];

//         users.forEach(user => {
//             cy.get("th[ng-reflect-ng-switch='username'] input[type='text']").clear().type(user);
//             auditTypes.forEach(auditType => {
//                 cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").clear().type(auditType).wait(2000);
//             });
//         });
//     });
// });

/// <reference types="Cypress" />

describe('Handle Audit', function () {
    it('Should handle Audit', function () {

        cy.visit("https://cbm-test.checkit.net/weblogin", { timeout: 90000 })
        cy.get('#username').type('waseem.suleman@checkit.net')
        cy.get('#password').type('A4tech.8818')
        cy.get("input[value='Login']").should('not.be.disabled').click()
        cy.url().should('include', 'landingpage')
        cy.get(':nth-child(3) > .left > .box > a').click()
        cy.get('.ui-dialog-content > .row > .right > .box > a').click()
        cy.get("button[type='button']").eq(0).click()
        cy.get(':nth-child(17) > .ng-star-inserted > div').click()

        const userAuditTypes = {
            'Waseem': [
                "Estate Assigned",
                "Logged In",
                "Report Viewed",
                "Estate Unassigned",
                "Building Unassigned",
                "Tag Assigned"
            ],
            'Ian': [
                "Logged In",
                "Report Viewed"
                // Add other audit types specific to Ian if any
            ],
            'Ockert': [
                "Logged In",
                "Report Viewed"
                // Add other audit types specific to Ian if any
            ],
            'Shehbaz': [
                "Logged In",
                "Report Viewed"
                // Add other audit types specific to Ian if any
            ]
            
        };

        Object.keys(userAuditTypes).forEach(user => {
            cy.get("th[ng-reflect-ng-switch='username'] input[type='text']").clear().type(user);
            userAuditTypes[user].forEach(auditType => {
                cy.get("th[ng-reflect-ng-switch='audittype'] input[type='text']").clear().type(auditType).wait(4000);
            });
        });
    });
});

