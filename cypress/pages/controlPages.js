// 1. Importamos as classes originais
import LoginPage from './loginPage.js';
import DashboardPage from './dashboardPage.js';
import MenuPage from './menu.page.js';
import MyInfoPage from './myInfoPage.js';
import Utils from './utils.js';
import AdminPage from './adminPage.js';
import PimPage from './pimPage.js';


// 2. Criamos um objeto que já contém as versões PRONTAS (instanciadas)
const pages = {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
    menu: new MenuPage(),
    myInfo: new MyInfoPage(),
    utils: new Utils(),
    admin: new AdminPage(),
    pim: new PimPage(),
}

// 3. Exportamos esse objeto "Painel"
export default pages;