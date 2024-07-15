/// <reference types="Cypress" />

describe('Handle alert and confirm', function()
{
    it('Should handle alert and confirm', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then(function(el){
            
           const url = el.prop('href')
           cy.visit(url) //www.qaclickacademy.com
           cy.origin(url,()=>{

            cy.get('div.sub-menu-bar a[href="about.html"]').click()

           })
          
        })




       
    })
})