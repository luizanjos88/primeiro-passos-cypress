class PimPage {

    selectorList() {
        const selectors = {

            botaoMenu: ('.oxd-main-menu-item'),
            botaoAdd: ('.oxd-button-icon'),
            firstName: ('.orangehrm-firstname'),
            middleName: ('.orangehrm-middlename'),
            lastName: ('.orangehrm-lastname'),
            employeeId: ('.oxd-input'),
            submit: ('[type="submit"]'),
        }
        return selectors
    }
    addPIM(firstName, middleName, lastName, employeeId) {
        cy.get(this.selectorList().botaoMenu).eq(1).click();
        cy.get(this.selectorList().botaoAdd).click();
        cy.get(this.selectorList().firstName).type(firstName)
        cy.get(this.selectorList().middleName).type(middleName)
        cy.get(this.selectorList().lastName).type(lastName)
        cy.get(this.selectorList().employeeId).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().submit).click()
        cy.get('body').contains('Success');
        cy.get('.--strong').contains(`${firstName} ${lastName}`);
    }
}

export default PimPage

