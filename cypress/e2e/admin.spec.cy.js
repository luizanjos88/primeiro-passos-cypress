import pages from '../pages/controlPages';
import userData from '../fixtures/userData.json';

describe('Orange HRM Tests - Admin', () => {

  beforeEach(() => {
    cy.visit('/auth/login');
  })

  it('Login Success and Access Admin Page', () => {
    // Definindo tamanho da tela para visualização
    cy.viewport(1920, 1080);

    // Fazendo login utilizando dados da Fixture
    pages.login.loginWithUser(userData.userSucess.username, userData.userSucess.password);

    // Verificando que acessou o Dashboard
    pages.dashboard.dashboardWay();

    // Acessando o menu lateral e clicando em Admin
    pages.menu.acessAdmin();

    // Validando com sucesso o carregamento da página de Admin
    pages.admin.checkAdminPage();

  })

})
