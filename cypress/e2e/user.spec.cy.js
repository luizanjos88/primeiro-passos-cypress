import pages from '../pages/controlPages';
import userData from '../fixtures/userData.json';

describe('Orange HRM Tests', () => {

  beforeEach(() => {
    cy.visit('/auth/login');
  })

  it('User update walk - Login Success', () => {
    cy.viewport(1920, 1080)

    pages.login.loginWithUser(userData.userSucess.username,userData.userSucess.password);
    pages.dashboard.dashboardWay();
    pages.menu.acessMyInfo();
    pages.myInfo.fillField('Luiz', 'Carlos', 'Anjos', 'QA-290305','252525','07868099909');
    pages.menu.acessAdmin();

    })

  it('Login - Fail', () => {

    pages.login.loginFail(userData.userFail.username,userData.userFail.password)
    
  })

})