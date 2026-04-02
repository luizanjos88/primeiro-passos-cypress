// 1. Importamos as classes originais
import LoginPage from './loginPage.js';
import DashboardPage from './dashboardPage.js';
import MenuPage from './menu.page.js';
import MyInfoPage from './myInfoPage.js';

// 2. Criamos um objeto que já contém as versões PRONTAS (instanciadas)
const pages= {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
    menu: new MenuPage(),
    myInfo: new MyInfoPage()
}

// 3. Exportamos esse objeto "Painel"
export default pages;