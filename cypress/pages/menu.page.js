class MenuPage {
    
    selectorsList(){
        const selectors = {
             myAdminButton: '[href="/web/index.php/admin/viewAdminModule"]',
             myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

        }
        return selectors
    }
    acessMyInfo () {
            cy.get(this.selectorsList().myInfoButton).click();
            cy.location('pathname').should('equal','/web/index.php/pim/viewPersonalDetails/empNumber/7');
 }
    acessAdmin(){
            cy.get(this.selectorsList().myAdminButton).click();
            cy.location('pathname').should('equal','/web/index.php/admin/viewSystemUsers');
         
    }
}

export default MenuPage

