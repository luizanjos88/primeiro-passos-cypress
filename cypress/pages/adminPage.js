class AdminPage {
    selectorsList() {
        const selectors = {
            pageHeader: '.oxd-topbar-header-breadcrumb > h6',
            titleSystemUsers: '.orangehrm-main-title'
        }
        return selectors;
    }

    checkAdminPage() {
        // Valida que estamos na URL correta da página de admin
        cy.location('pathname').should('equal', '/web/index.php/admin/viewSystemUsers');

        // Verifica se a página Admin renderizou os textos e elementos principais
        cy.contains('System Users').should('be.visible');
        cy.contains('Admin').should('be.visible');
    }
}

export default AdminPage;
