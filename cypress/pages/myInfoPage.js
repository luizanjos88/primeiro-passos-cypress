class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: '.oxd-date-input',
            closeCalendaryButton: '.--close',
            submitButton: '[type="submit"]',
            selectionField: '.oxd-select-text',
            dropboxField: '.oxd-select-dropdown',
            genericCheckBox: '.oxd-checkbox-wrapper',
            genderRadio:'.--gender-grouped-field',
                }
        return selectors
    }

    fillField (firstName,middleName,lastName,idEmployed,otherId,CPF) {
        //prenchimento dasdos pessoasi e de employed
        cy.get(this.selectorsList().firstNameField).should('be.visible').and('not.be.disabled').clear().type('firstName');
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        cy.get(this.selectorsList().genericField).eq(3).clear().type(idEmployed);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(CPF)

        //preenchimento datas Nascimento e vencimento CPF
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2028-04-23');
        cy.get(this.selectorsList().closeCalendaryButton).click();
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1991-04-23');
        cy.get(this.selectorsList().closeCalendaryButton).click();

        //seleção Nacionalidade, genero e estado civil
        cy.get(this.selectorsList().selectionField).eq(0).click();
        cy.get(this.selectorsList().dropboxField).contains('Brazilian').click();
        cy.get(this.selectorsList().genderRadio).contains('Male').click();
        cy.get(this.selectorsList().selectionField).eq(1).click();
        cy.get(this.selectorsList().dropboxField).contains('Married').click();

        //salvar os primeiros dados
        cy.get(this.selectorsList().submitButton).eq(0).click();  
        cy.get('body').should('contain', 'Successfully Updated');

        //selecionar tipo de sangue
        cy.get(this.selectorsList().selectionField).eq(2).click();
        cy.get(this.selectorsList().dropboxField).contains('O-').click();

        //salvar dados total
        cy.get(this.selectorsList().submitButton).eq(1).click();  
        cy.get('body').should('contain', 'Successfully Updated');

  
       
        
         
    }
}

export default MyInfoPage