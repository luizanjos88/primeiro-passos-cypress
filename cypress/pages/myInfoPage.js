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

    fillPersonalDetails (firstName,middleName,lastName) {
        //prenchimento dados pessoais
        //cy.get(this.selectorsList().firstNameField).should('be.visible').and('not.be.disabled').clear().type(firstName);
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);

    }

    fillEmployeeDetails(employedId,otherId,driversLicense,expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employedId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate);
        cy.get(this.selectorsList().closeCalendaryButton).click();            
                  
    }          
     fillStatus(nationality,dateOfBirth,maritalStatus,gender,bloodType,test) {
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth);
        cy.get(this.selectorsList().closeCalendaryButton).click();
        cy.get(this.selectorsList().selectionField).eq(0).click();
        cy.get(this.selectorsList().dropboxField).contains(nationality).click();
        cy.get(this.selectorsList().selectionField).eq(1).click();
        cy.get(this.selectorsList().dropboxField).contains(maritalStatus).click();
        cy.get(this.selectorsList().genderRadio).contains(gender).click();
        cy.get(this.selectorsList().selectionField).eq(2).click();
        cy.get(this.selectorsList().dropboxField).contains(bloodType).click();
        cy.get(this.selectorsList().genericField).eq(9).clear().type(test)
     }
     saveForm(arrayNumber){

        cy.get(this.selectorsList().submitButton).eq(arrayNumber).click();  
        cy.get('body').should('contain', 'Successfully Updated');    

     }
}

export default MyInfoPage