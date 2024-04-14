/// <reference types="cypress" />

describe('Assertions test', () => {

    it('Implicite Assertions', () =>{
        cy.visit(("https://opensource-demo.orangehrmlive.com/"))
        //cy.url().should('contain','orangehrmlive')
        //cy.url().should('include','orangehrmlive')
        //cy.viewport(500,750)
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('contain','login')
       // cy.get('.orangehrm-login-title').should('eq','login')
       // cy.url().should('contain','demo')
        //cy.title().should('include','Orange').should('eq','OrangeHRM').should('contain','HRM')
        cy.get('.orangehrm-login-branding img').should('be.visible').and('exist')
        cy.get('h5').should('have.class','orangehrm-login')
    });
    it.only('Implicite Assertions Input', () =>{
        cy.visit(("https://opensource-demo.orangehrmlive.com/"))
      
        cy.get('.oxd-input.oxd-input--active[placeholder="Username"]').type('Admin').should('have.value','Admin')
    });

    
    it('Explicit Assertions', ()=> 
      {
            
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type("Admin")  // enter text into username
        cy.get("input[placeholder='Password']").type("admin123")  // enter text into password
        cy.get("button[type='submit']").click()

        let expName="Paul Collings"
        //Explicit assertions
        //let expName="BobflonBrian TesterisufiDietrichLind"

        cy.get('.oxd-userdropdown-name').then((x) => {
          
          let actName=x.text()
            //BDD Assertions using 'expect'          
            expect(actName).to.equal(expName)  // should pass
            //expect(actName).to.not.equal(expName) //should fail
           
             //TDD Assertions using 'assert' 
             assert.equal(actName,expName) //should pass
             //assert.notEqual(actName,expName) // should fail

        })
                                                        
    })

  })
  