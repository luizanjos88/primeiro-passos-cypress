# Pruebas E2E de Cypress para OrangeHRM

Este proyecto es un framework automatizado de pruebas End-to-End (E2E) diseñado para la aplicación **OrangeHRM**, enfocado principalmente en la autenticación de usuarios, la navegación del panel de control (dashboard) y las funcionalidades del módulo de administración (como la gestión de usuarios).

Construido con **Cypress**, este repositorio aprovecha los patrones modernos de pruebas de software, incluyendo el **Page Object Model (POM)** para una mejor mantenibilidad y reutilización del código, y utiliza generadores de datos simulados para asegurar una cobertura de pruebas más robusta.

## 🚀 Características Principales

- **Page Object Model (POM):** Separación limpia entre la lógica de las pruebas y los localizadores de elementos dentro del directorio `cypress/pages`.
- **Generación Dinámica de Datos:** Integración con las librerías `@faker-js/faker` y `chance` para crear datos de pruebas variados y realistas dinámicamente (ej. generación de nombres de usuario y contraseñas distintos).
- **Reportes Automatizados:** Incluye el generador de reportes Mochawesome para visualizar resultados de pruebas en formato HTML hermosos y fáciles de leer.
- **Pruebas Repetidas:** Aprovecha `cypress-repeat`, lo que permite volver a ejecutar las suites de pruebas de forma automática múltiples veces para detectar pruebas inestables (flaky tests).

## 🛠️ Tecnologías Empleadas

- **[Cypress](https://www.cypress.io/):** Herramienta de pruebas front-end de próxima generación orientada a la web moderna.
- **[Chance.js](https://chancejs.com/):** Utilidad generadora de datos aleatorios para JavaScript.
- **[Faker JS](https://fakerjs.dev/):** Genera cantidades masivas de datos falsos (pero realistas) para pruebas.
- **[Mochawesome](https://github.com/adamgruber/mochawesome):** Generador de reportes HTML personalizado para Cypress.

## 📂 Estructura del Proyecto

```text
├── cypress/
│   ├── e2e/               # Archivos de especificación de pruebas (*.spec.cy.js)
│   │   ├── admin.spec.cy.js
│   │   ├── login.spec.cy.js
│   │   └── user.spec.cy.js
│   ├── pages/             # Clases del patrón Page Object Model
│   │   ├── adminPage.js
│   │   ├── dashboardPage.js
│   │   └── ...
│   └── reports/           # Reportes de pruebas generados
├── package.json           # Dependencias de Node.js y scripts personalizados de npm
└── cypress.config.js      # Archivo de configuración principal de Cypress
```

## ⚙️ Requisitos Previos

Para ejecutar este proyecto, asegúrate de tener instalado en tu máquina lo siguiente:
- **[Node.js](https://nodejs.org/es)** (se recomienda la versión 14 o superior)
- **NPM** (incluido al instalar Node.js)

## 📦 Instalación

1. **Clona el repositorio** (si aplica) o navega hasta el directorio del proyecto:
   ```bash
   cd primeiro-passos-cypress
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## ▶️ Ejecutando las Pruebas

### Abrir en la Interfaz de Cypress (Modo Interactivo)
Para ejecutar pruebas usando el Test Runner interactivo de Cypress:
```bash
npx cypress open
```

### Ejecutar en Modo Headless (Sin Interfaz Gráfica)
Para ejecutar las pruebas en segundo plano (modo headless) sin abrir un navegador:
```bash
npx cypress run
```

### Chequear Pruebas Inestables (Ejecuciones Múltiples)
Si deseas ejecutar las pruebas repetidamente en secuencia para identificar pruebas inconsistentes:
```bash
npm run test:repeat
```

## 📊 Generando Reportes

Utilizamos Mochawesome para los reportes de las ejecuciones. Tras ejecutar tus pruebas en modo headless (`npx cypress run`), puedes combinar todos los JSON resultantes y generar un reporte HTML detallado:

```bash
npm run report
```
Este comando combina todos los archivos JSON ubicados en `cypress/reports/` y construye un archivo HTML interactivo que puedes abrir en tu navegador para evaluar los resultados de ejecución de las pruebas.

## 👨‍💻 Autor
**Luiz Carlos**
