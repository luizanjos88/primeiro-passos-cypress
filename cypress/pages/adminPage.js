class AdminPage {
    selectorsList() {
        const selectors = {
            pageHeader: '.oxd-topbar-header-breadcrumb > h6',
            titleSystemUsers: '.orangehrm-main-title'
        }
        return selectors;
    }

    checkAdminPage() {

        cy.location('pathname').should('equal', '/web/index.php/admin/viewSystemUsers');
        cy.contains('System Users').should('be.visible');
        cy.contains('Admin').should('be.visible');
    }
}

export default AdminPage;
