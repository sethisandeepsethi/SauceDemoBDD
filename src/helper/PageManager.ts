import { Page } from "@playwright/test";
import { fixtures } from "../test/hooks/fixtures";
import BasePage from "../../pages/BasePage";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { CustomerInfoPage } from "../../pages/CustomerInfoPage";
import { OverviewPage } from "../../pages/OverviewPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";

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

    getOverviewPage(): OverviewPage {
        return new OverviewPage(this.getPage())
    }

    getCheckoutCompletePage(): CheckoutCompletePage {
        return new CheckoutCompletePage(this.getPage());
    }

}