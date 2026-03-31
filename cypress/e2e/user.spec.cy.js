import userData from '../fixtures/userData.json'
describe('Orange HRM Tests', () => {

const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header',
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField:'[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '.oxd-date-input',
    closeCalendaryButton: '.--close',
    submitButton: '[type="submit"]',


}


//executa antes de cada teste -- e a baseUrl esta na config.js
beforeEach(() => {
    cy.visit('/auth/login');
  })

  it.only('User uptade walK - Login Sucess', () => {
  
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal','/web/index.php/dashboard/index');

    //pode ser mudado o nome dashboard até para outra língua o que aconteceu troca
    //cy.get(selectorsList.sectionTitleTopBar).contains ('Dashboard');

    cy.get(selectorsList.dashboardGrid);

    // acessando alteração de Usuário

    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.sectionTitleTopBar).contains('PIM'),
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorsList.firstNameField).clear().type('Luiz');
    cy.get(selectorsList.middleNameField).clear().type('Carlos');
    cy.get(selectorsList.lastNameField).clear().type('Anjos');
    cy.get(selectorsList.genericField).eq(3).clear().type('QA-290305');
    cy.get(selectorsList.genericField).eq(4).clear().type('205105');
    cy.get(selectorsList.genericField).eq(5).clear().type('0768099909');
    cy.get(selectorsList.dateField).eq(1).clear().type('1991-23-04');
    cy.get(selectorsList.closeCalendaryButton).click();
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get('body').should('contain','Successfully Updated');
   


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