/// <reference types="cypress" />

describe('premier test', () => {

    it('click sur un element', () =>{
        cy.visit(("cypress/index.html"))
        cy.get('.btn.btn-lg.btn-primary.btn-block').contains('Contact us').click()
  
    });
    it.only('saisir dans un element', () =>{
        cy.visit(("cypress/index.html"))
        cy.get('#inputEmail').type('test@gmail.com')
        cy.get('#inputEmail').clear()
  
    });
    it('select dropdown', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('#courses').select(2)
    });
    it('check dans une checkbox', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('#Nuts').check()
        cy.get('#Nuts').uncheck()
    });
    it('check dans radio box', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('#Manager').check()
        cy.get("#louie").check()
    });
    it('dbclick', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('input[value="Click me"]').dblclick()
       
    });
    it('right click', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('input[value="Click me"]').rightclick()
       
    });
    it.only('focus commande ', () =>{
        cy.visit(("cypress/index.html"))
       // cy.get('#courses').select('appium')
        cy.get('.focus.blur').focus()
        cy.get('.focus.blur').blur()
       
    });
   // Click me
   
   it('trigger commande ', () =>{
    cy.visit(("cypress/index.html"))
   // cy.get('#courses').select('appium')
    cy.get('.trigger').trigger('mouseover')
    cy.get('.trigger').trigger('mouseout')
   
});
it('trigger commande ', () =>{
    cy.visit(("cypress/index.html"))
   // cy.get('#courses').select('appium')
    cy.get('.trigger').trigger('mousedown')
    cy.get('.trigger').trigger('mouseup')
});
  })
  