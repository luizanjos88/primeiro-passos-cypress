# Testes E2E com Cypress para o OrangeHRM

Este projeto é um framework automatizado de testes End-to-End (E2E) projetado para a aplicação **OrangeHRM**, com foco na autenticação de usuários, navegação no painel (dashboard) e funcionalidades do módulo admin (como o gerenciamento de usuários).

Construído com **Cypress**, este repositório utiliza padrões modernos de testes de software, incluindo o **Page Object Model (POM)** para melhorar a manutenibilidade e reutilização do código, além de aproveitar geradores de dados simulados para garantir uma cobertura de testes mais robusta.

## 🚀 Principais Funcionalidades

- **Page Object Model (POM):** Separação limpa entre a lógica de testes e os localizadores de elementos na pasta `cypress/pages`.
- **Geração Dinâmica de Dados:** Integração das bibliotecas `@faker-js/faker` e `chance` para criar dados de testes variados e realistas dinamicamente (ex: geração de nomes de usuários e senhas distintos).
- **Geração Automatizada de Relatórios:** Inclui o gerador de relatórios Mochawesome para fornecer resultados de testes em HTML atraentes e fáceis de ler.
- **Testes Repetidos:** Utiliza o `cypress-repeat`, permitindo que você reexecute suítes de testes múltiplas vezes automaticamente para verificar a estabilidade dos testes (flaky tests).

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/):** Ferramenta de testes front-end de próxima geração, construída para a web moderna.
- **[Chance.js](https://chancejs.com/):** Utilitário gerador de dados aleatórios para JavaScript.
- **[Faker JS](https://fakerjs.dev/):** Gera enormes quantidades de dados falsos (mas realistas) para testes.
- **[Mochawesome](https://github.com/adamgruber/mochawesome):** Gerador de relatórios HTML customizados para Cypress.

## 📂 Estrutura do Projeto

```text
├── cypress/
│   ├── e2e/               # Arquivos de especificações de testes (*.spec.cy.js)
│   │   ├── admin.spec.cy.js
│   │   ├── login.spec.cy.js
│   │   └── user.spec.cy.js
│   ├── pages/             # Classes do padrão Page Object Model
│   │   ├── adminPage.js
│   │   ├── dashboardPage.js
│   │   └── ...
│   └── reports/           # Relatórios de Testes gerados
├── package.json           # Dependências do Node.js e scripts customizados do npm
└── cypress.config.js      # Arquivo de configuração principal do Cypress
```

## ⚙️ Pré-requisitos

Para rodar este projeto, certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/en)** (versão 14 ou mais recente é recomendada)
- **NPM** (que já vem junto com o Node.js)

## 📦 Instalação

1. **Clone o repositório** (se aplicável) ou navegue até o diretório do projeto:
   ```bash
   cd primeiro-passos-cypress
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## ▶️ Executando os Testes

### Abrir na Interface do Cypress (Modo Interativo)
Para executar os testes usando o Test Runner em interface gráfica:
```bash
npx cypress open
```

### Executar em Modo Headless (Sem Interface Gráfica)
Para rodar os testes em plano de fundo sem abrir a interface de um navegador:
```bash
npx cypress run
```

### Checar Testes Instáveis (Múltiplas Execuções)
Se você quiser rodar os testes repetidas vezes seguidas para achar "flaky tests":
```bash
npm run test:repeat
```

## 📊 Gerando Relatórios

Usamos o Mochawesome para relatórios das execuções. Após rodar seus testes em modo headless (`npx cypress run`), você pode mesclar os resultados JSON gerados para compilar um único relatório HTML detalhado:

```bash
npm run report
```
Este comando integra os arquivos JSON criados em `cypress/reports/` e constrói um relatório interativo em HTML, que você pode abrir em qualquer navegador para avaliar os resultados.

## 👨‍💻 Autor
**Luiz Carlos**
