import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { PageManager } from "../../helper/PageManager";
import BasePage from "../../../pages/BasePage";
import { HomePage } from "../../../pages/HomePage";
import { ProductsPage } from "../../../pages/ProductsPage";
import { CartPage } from "../../../pages/CartPage";
import { CustomerInfoPage } from "../../../pages/CustomerInfoPage";
import { OverviewPage } from "../../../pages/OverviewPage";
import { CheckoutCompletePage } from "../../../pages/CheckoutCompletePage";

export class CucumberWorld extends World {

    public pageManager: PageManager;
    public basePage: BasePage;
    public homePage: HomePage;
    public productsPage: ProductsPage;
    public cartPage: CartPage;
    public customerInfoPage: CustomerInfoPage;
    public overviewPage: OverviewPage;
    public checkoutCompletePage: CheckoutCompletePage;
    
    public custName?: string;

    //{ attach, log, parameters }: IWorldOptions are required in the constructor of CucumberWorld class
    //to inherit functionalities from the base World class
    constructor({ attach, log, link, parameters }: IWorldOptions){
        super({ attach, log, link, parameters });
  
        this.pageManager = new PageManager();
        this.basePage = this.pageManager.getBasePage();
        this.homePage = this.pageManager.getHomePage();
        this.productsPage = this.pageManager.getProductsPage();
        this.cartPage = this.pageManager.getCartPage();
        this.customerInfoPage = this.pageManager.getCustomerInfoPage();
        this.overviewPage = this.pageManager.getOverviewPage();
        this.checkoutCompletePage = this.pageManager.getCheckoutCompletePage();

        this.custName = "";
    }

}

//Tells Cucumber World to use our Custom World
setWorldConstructor(CucumberWorld);