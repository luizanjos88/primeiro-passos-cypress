describe('Orange HRM Tests', () => {
  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('.oxd-button').click();
    cy.location('pathname').should('equal','/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header').contains ('Dashboard');
  
  })

  it.only ('Login - Fail',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type("Test");
    cy.get('[name="password"]').type("Test");
    cy.get('.oxd-button').click();
    //texto não é recomentado porque porque pode mudar/só estou usando para testar
    cy.get('[role="alert"]').contains ('Invalid credentials');
    

  })
})