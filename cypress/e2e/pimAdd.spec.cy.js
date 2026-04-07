import pages from "../pages/controlPages";
import userData from '../fixtures/userData.json';
import { faker, Faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const middleName = faker.person.middleName();
const lastName = faker.person.lastName();
const employeeId = faker.string.numeric(4)



describe('Orange HRM Tests', () => {

    beforeEach(() => {
        cy.visit('/auth/login');
    })

    it('Através do PIM adicionar um novo funcionário, por enquanto sem a senha, e verificar se a ação foi realizada com sucesso', () => {

        pages.login.loginWithUser(userData.userSucess.username, userData.userSucess.password);

        pages.pim.addPIM(firstName, middleName, lastName, employeeId);
    })
})  