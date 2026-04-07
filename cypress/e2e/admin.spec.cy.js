import pages from '../pages/controlPages';
import userData from '../fixtures/userData.json';
import Chance from 'chance';
import { faker, Faker } from '@faker-js/faker';

const chance = new Chance

const nome = faker.person.fullName()

describe('Orange HRM Tests - Admin', () => {

  beforeEach(() => {
    cy.visit('/auth/login');
  })

  it('Login Success and Access Admin Page', () => {
    cy.viewport(1920, 1080);

    pages.login.loginWithUser(userData.userSucess.username, userData.userSucess.password);
    pages.dashboard.dashboardWay();
    pages.menu.acessAdmin();
    pages.admin.checkAdminPage();

    cy.get('.oxd-button--secondary').eq(1).click();
    cy.get('.oxd-input').eq(1).type(nome)




  })

})
