class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            wrongCredentialAlert: '[role="alert"]',
        }
        return selectors;
    }

    loginWithUser(username, password) {
    
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();  
    }   


    loginFail(username,password) {
        
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
        cy.get(this.selectorsList().wrongCredentialAlert).contains('Invalid credentials');

        }
}

export default LoginPage