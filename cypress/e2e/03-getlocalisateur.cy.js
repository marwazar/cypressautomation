/// <reference types="cypress" />

describe('Suite de test : localisateur', () => {

 beforeEach( () =>{
  cy.visit("cypress/index.html")

});
  
    it('chercher un element pat TAG Name', () =>{
        // recherche sur un bouton by tag
        //cy.get('button')
        cy.get('h1')
    });

    it('chercher un element par ID', () =>{
          // recherche sur un bouton by tag
          //cy.get('button')
          cy.get('h1#welcome')
    });
    it('chercher un element par class name', () =>{
        cy.visit("cypress/index.html")
         
          cy.get('.list1.web')
          cy.get('.mobile')

    });

    it('chercher un element par un attribute', () =>{
        
        cy.get('input[type="checkbox"]#Developer')

    });
    it('chercher un element ', () =>{
     // first()
     cy.get('h1').first()
     cy.get('h1').last()
     cy.get('h1').eq(2)
     cy.get('h1').contains('Drag')
     cy.get('li').filter('.web') 
     cy.get('ul.course-list').contains('Cypress')
     cy.get('ul.course-list li').filter('.list1.web')
     cy.get('.course-list').children('.mobile').eq(0)
     cy.get('.mobile').parent()
     cy.get('.mobile').parents().filter('body')
     cy.get('body').find('.trigger')
     cy.get('.course-list .list1').siblings()
    cy.get('.course-list .list1').siblings(':nth-child(3)')


     });
    
     it.only('chercher un element ', () =>{
      cy.xpath('//*[@id="courses"]').contains('cypress')
    });
})
  