/// <reference types="cypress" />

describe('view port test', () => {

 
  
   
    it('acceder à google avec diùmension 550/750', () =>{
        cy.viewport(550,750)
        cy.visit("/")
    
   });

    it.only('acceder à google avec diùmension 550/750', () =>{
           cy.viewport("iphone-5")
           cy.visit("/")
       
    });
    
  })
  