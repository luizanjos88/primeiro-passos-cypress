import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  // Objeto que mapeia os seletores CSS para facilitar a manutenção do código
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '.oxd-date-input input', // O 'input' no final permite que o Cypress use o comando .type()
    closeCalendaryButton: '.--close',
    submitButton: '[type="submit"]',
    selectionField: '.oxd-select-text',
    genericCheckBox: '.oxd-checkbox-wrapper',
  }

  // Comando executado antes de cada caso de teste para garantir que começamos na tela de login
  beforeEach(() => {
    cy.visit('/auth/login');
  })

  it.only('User update walk - Login Success', () => {
    // Define a resolução da tela para evitar que elementos fiquem escondidos no modo "cypress run"
    cy.viewport(1920, 1080) 

    // Fluxo de Autenticação utilizando dados do arquivo fixture (userData.json)
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    
    // Validação de que o login funcionou através da URL e da presença do grid do Dashboard
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid).should('be.visible');

    // Navegação para a seção de informações pessoais do usuário logado
    cy.get(selectorsList.myInfoButton).click();

    // Verificação de que o título da página mudou para PIM antes de prosseguir
    cy.get(selectorsList.sectionTitleTopBar).contains('PIM').should('be.visible');
    
    // Atualização dos campos de nome com validações de estado para garantir estabilidade
    cy.get(selectorsList.firstNameField).should('be.visible').and('not.be.disabled').clear().type('Luiz');
    cy.get(selectorsList.middleNameField).clear().type('Carlos');
    cy.get(selectorsList.lastNameField).clear().type('Anjos');
    
    // Preenchimento de campos de identificação (ID do empregado, etc) usando índices do array de inputs
    cy.get(selectorsList.genericField).eq(3).clear().type('QA-290305');
    cy.get(selectorsList.genericField).eq(4).clear().type('205105');
    cy.get(selectorsList.genericField).eq(5).clear().type('0768099909');

    // Preenchimento de datas e fechamento manual do calendário para evitar sobreposição de elementos
    cy.get(selectorsList.dateField).eq(0).clear().type('2028-23-04');
    cy.get(selectorsList.closeCalendaryButton).click();
    
    cy.get(selectorsList.dateField).eq(1).clear().type('1991-23-04');
    cy.get(selectorsList.closeCalendaryButton).click();
    
    // Interação com componentes de dropdown (Selects personalizados do OrangeHRM)
    cy.get(selectorsList.selectionField).eq(0).click();
    cy.get('.oxd-select-dropdown').contains('Brazilian').click(); 
    
    cy.get(selectorsList.selectionField).eq(1).click();
    cy.get('.oxd-select-dropdown').contains('Married').click();

    // Primeiro salvamento das informações (Personal Details) e verificação do Toast de sucesso
    cy.get(selectorsList.submitButton).eq(0).click();  
    cy.get('body').should('contain', 'Successfully Updated');

    // Preenchimento de informações adicionais (Tipo Sanguíneo)
    cy.get(selectorsList.selectionField).eq(2).click();
    cy.get('.oxd-select-dropdown').contains('O-').click();

    // Exemplo de preenchimento de campo genérico adicional
    cy.get(selectorsList.genericField).eq(9).clear().type('Text');

    // Segundo salvamento (Custom Fields) e verificação final de sucesso
    cy.get(selectorsList.submitButton).eq(1).click();  
    cy.get('body').should('contain', 'Successfully Updated');
  })

  // Teste de caminho negativo: valida a mensagem de erro com credenciais inválidas
  it('Login - Fail', () => {
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials');
  })

})