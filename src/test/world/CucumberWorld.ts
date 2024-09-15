import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { PageManager } from "../../../pages/PageManager";
import BasePage from "../../../pages/BasePage";
import { HomePage } from "../../../pages/HomePage";
import { ProductsPage } from "../../../pages/ProductsPage";
import { CartPage } from "../../../pages/CartPage";
import { CustomerInfoPage } from "../../../pages/CustomerInfoPage";

export class CucumberWorld extends World {

    public pageManager: PageManager;
    public basePage: BasePage;
    public homePage: HomePage;
    public productsPage: ProductsPage;
    public cartPage: CartPage;
    public customerInfoPage: CustomerInfoPage;

    //{ attach, log, parameters }: IWorldOptions are required in the constructor of CucumberWorld class
    //to inherit functionalities from the base World class
    constructor({ attach, log, parameters }: IWorldOptions){
        super({ attach, log, parameters });
        this.pageManager = new PageManager();
        this.basePage = this.pageManager.getBasePage();
        this.homePage = this.pageManager.getHomePage();
        this.productsPage = this.pageManager.getProductsPage();
        this.cartPage = this.pageManager.getCartPage();
        this.customerInfoPage = this.pageManager.getCustomerInfoPage();
    }
    
}

//Tells Cucumber World to use our Custom World
setWorldConstructor(CucumberWorld);