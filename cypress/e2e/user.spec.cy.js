import pages from '../pages/controlPages';
import userData from '../fixtures/userData.json';
import Chance from 'chance'; // Importa a classe
import { fakerPT_BR as faker } from '@faker-js/faker';




const chance = new Chance(); // Inicializa a instância

describe('Orange HRM Tests', () => {

  beforeEach(() => {
    cy.visit('/auth/login');
  })

  it('User update walk - Login Success', () => {
    cy.viewport(1920, 1080)

    pages.login.loginWithUser(userData.userSucess.username,userData.userSucess.password);
    pages.dashboard.dashboardWay();
    pages.menu.acessMyInfo();
    pages.myInfo.fillPersonalDetails(chance.first(),chance.suffix(),chance.last());
    
    pages.myInfo.fillEmployeeDetails(faker.string.numeric(6),faker.string.numeric(5),faker.string.numeric(7),faker.date.future({ years: 5 }).toISOString().split('T')[0])

    pages.myInfo.fillStatus(pages.utils.nationalityAleatory(),  faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().split('T')[0],'Married','Male',pages.utils.bloodTypesAleatory(), faker.string.numeric(5));

    pages.myInfo.saveForm(0)
   //pages.menu.acessAdmin();

    })

  })