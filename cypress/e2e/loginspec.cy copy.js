import userData from '../fixtures/users/userData.Json'

describe('Orange HRM Tests', () => {

const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header',
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]'
}

//const userData = {
 // userSucess:{
 //   username: 'Admin',
    //password: 'admin123'
 // },
 // userFail: {
  //  username: 'Test',
    //password: 'Test'
 // }
//}


//executa antes de cada teste
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login Sucess', () => {
    
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal','/web/index.php/dashboard/index');

    //pode ser mudado o nome dashboard até para outra língua o que aconteceu troca
    //cy.get(selectorsList.sectionTitleTopBar).contains ('Dashboard');

    cy.get(selectorsList.dashboardGrid);
  })

  it ('Login - Fail',() => {
    
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    //texto não é recomentado porque porque pode mudar/só estou usando para testar
    // validação de alerta
    cy.get(selectorsList.wrongCredentialAlert).contains ('Invalid credentials');
    

  })
})