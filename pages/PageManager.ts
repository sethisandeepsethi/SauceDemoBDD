import { Page } from "@playwright/test";
import { fixtures } from "../src/test/hooks/fixtures";
import BasePage from "./BasePage";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { CartPage } from "./CartPage";
import { CustomerInfoPage } from "./CustomerInfoPage";

export class PageManager {

    getPage(): Page {
        return fixtures.page;
    }

    getBasePage(): BasePage {
        return new BasePage(this.getPage());
    }

    getHomePage(): HomePage {
        return new HomePage(this.getPage())
    }

    getProductsPage(): ProductsPage {
        return new ProductsPage(this.getPage());
    }

    getCartPage(): CartPage {
        return new CartPage(this.getPage());
    }

    getCustomerInfoPage(): CustomerInfoPage {
        return new CustomerInfoPage(this.getPage())
    }

}