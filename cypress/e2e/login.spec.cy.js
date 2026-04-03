import pages from '../pages/controlPages';
import userData from '../fixtures/userData.json';

describe('Login Orange HRM Tests', () => {

  beforeEach(() => {
    cy.visit('/auth/login');
  })
 
  it('Login - Fail', () => {

    pages.login.loginFail(userData.userFail.username,userData.userFail.password);
    
    })
 
  it('Login - Sucess', () => {

    pages.login.loginWithUser(userData.userSucess.username,userData.userSucess.password);
    
  })
})
  

