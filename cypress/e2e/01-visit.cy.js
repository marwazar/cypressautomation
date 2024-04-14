/// <reference types="cypress" />

describe('premier test', () => {

 
  
    it('rechercher un element2', () =>{
   //   cy.visit(("https://www.google.com/"))
      cy.visit("/search")
  
    });
    it('rechercher un element2', () =>{
        //   cy.visit(("https://www.google.com/"))
           cy.visit("/search",{
             qs:{
                 q:'cypress test'
             }
           })
       
    });
    it('acceder à google avec diùmension 550/750', () =>{
        cy.viewport(550,750)
        cy.visit("/")
    
   });

    it.only('acceder à google avec diùmension 550/750', () =>{
           cy.viewport()
           cy.visit("/")
       
    });
    
  })
  