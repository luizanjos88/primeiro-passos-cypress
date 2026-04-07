# 🧪 OrangeHRM Test Automation Suite 🚀

![Cypress Automation Banner](file:///C:/Users/User/.gemini/antigravity/brain/03d00447-51a6-49cf-9e70-3f0d63c0a683/cypress_automation_banner_1775536780008.png)

[![Cypress](https://img.shields.io/badge/-Cypress-6DB33F?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Project%20Finalized-brightgreen?style=for-the-badge)](https://github.com/luizanjos88)

Este repositório contém uma suíte completa de testes automatizados End-to-End (E2E) para a plataforma **OrangeHRM**. O projeto foi desenvolvido com foco em escalabilidade, manutenibilidade e confiabilidade, utilizando as melhores práticas de Engenharia de QA.

---

## 🎯 Objetivo do Projeto

Validar as principais jornadas do usuário no sistema OrangeHRM, garantindo que as funcionalidades críticas (Login, Gestão de Usuários, PIM, My Info) operem corretamente em diferentes cenários, minimizando riscos de regressão e aumentando a confiança no código.

## ✨ Diferenciais Técnicos

- **🏛️ Page Object Model (POM):** Implementação rigorosa para separação de preocupações, garantindo que mudanças na interface não quebrem os testes em massa.
- **🎲 Geração de Dados Aleatórios:** Uso de `@faker-js/faker` e `Chance.js` para criar usuários, CPFs e dados de perfil únicos a cada execução.
- **📊 Relatórios Detalhados:** Integração com **Mochawesome** para gerar relatórios visuais interativos que facilitam a análise de falhas.
- **🛡️ Testes de Estabilidade:** Configuração do `cypress-repeat` para detecção de *flaky tests* através de execuções múltiplas.
- **🛠️ Custom Commands & Utils:** Funções auxiliares otimizadas para manipulação de datas e elementos complexos.

---

## 📂 Estrutura do Ecossistema

```text
├── cypress/
│   ├── e2e/               # Specs de teste (Cenários BDD-style)
│   │   ├── admin.spec.cy.js    # Gestão de administradores
│   │   ├── login.spec.cy.js    # Fluxos de autenticação
│   │   ├── pimAdd.spec.cy.js   # Registro de novos funcionários
│   │   └── user.spec.cy.js     # Perfil e informações do usuário
│   ├── pages/             # Page Objects (Abstração da UI)
│   │   ├── loginPage.js        # Interações de Login
│   │   ├── pimPage.js          # Formulários do PIM
│   │   └── utils.js            # Helpers globais
│   └── reports/           # HTML Reports (Snapshot dos resultados)
├── package.json           # Scripts e Dependências
└── cypress.config.js      # Configurações do Engine
```

---

## 🚀 Como Executar

### 1. Clonar e Instalar
```bash
git clone https://github.com/luizanjos88/primeiro-passos-cypress.git
cd primeiro-passos-cypress
npm install
```

### 2. Rodar Testes (Interativo)
Ideal para desenvolvimento e debug.
```bash
npx cypress open
```

### 3. Rodar Testes (Modo Headless + Relatório)
Ideal para integração contínua (CI).
```bash
npx cypress run
npm run report
```

### 4. Verificar Estabilidade
Executa os testes 5 vezes seguidas para garantir que não há intermitência.
```bash
npm run test:repeat
```

---

## 📊 Visualizando Resultados

Após a execução do comando `npm run report`, um arquivo interativo será gerado em:
`cypress/reports/mochawesome.html`

*Abra este arquivo em seu navegador para ver logs detalhados, tempo de execução e capturas de tela das falhas.*

---

## 🛠️ Tecnologias de Elite

| Ferramenta | Finalidade |
| :--- | :--- |
| **Cypress 15** | Framework de Testes E2E |
| **Faker.js** | Geração de massa de dados realista |
| **Chance** | Helpers de aleatoriedade |
| **Mchawesome** | Reporting Visual |
| **JavaScript** | Linguagem Base |

---

## 👨‍💻 Autor

**Luiz Carlos**
QA Automation Engineer em constante evolução.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luizcarloos)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/luizanjos88)

---
*Este projeto faz parte do meu portfólio de testes automatizados. Sinta-se à vontade para explorar e sugerir melhorias!*
