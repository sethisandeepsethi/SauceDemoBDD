import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';
import { fixtures } from '../src/test/hooks/fixtures';

export class ProductsPage extends BasePage {
    readonly page: Page;
    private readonly lbl_PageTitle: Locator;
    private readonly btn_AddToCart_BikeLight: Locator;
    private readonly btn_AddToCart_FleeceJacket: Locator;
    private readonly btn_RemoveFromCart_BikeLight: Locator;
    private readonly btn_RemoveFromCart_FleeceJacket: Locator;
    private readonly lbl_ShoppingCartItemCountBadge: Locator;

    constructor (page: Page){
        super(page);
        this.page = page;
        this.lbl_PageTitle = page.locator('[data-test="title"]');
        this.btn_AddToCart_BikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.btn_AddToCart_FleeceJacket = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.btn_RemoveFromCart_BikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.btn_RemoveFromCart_FleeceJacket = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.lbl_ShoppingCartItemCountBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Products');
    }

    async addBikeLightToCart(){
        await this.btn_AddToCart_BikeLight.click();
        await expect(this.btn_RemoveFromCart_BikeLight).toBeVisible()
    }
    async addFleeceJacketToCart(){
        await this.btn_AddToCart_FleeceJacket.click();
        await expect(this.btn_RemoveFromCart_FleeceJacket).toBeVisible()
    }

    async getCartItemCount(): Promise<string> {
        if(await this.lbl_ShoppingCartItemCountBadge.isVisible()){
            return await this.getElementText(this.lbl_ShoppingCartItemCountBadge);
        }else {
            return '';
        }
    }

    async gotoCartPage(){
        await this.waitForElementVisible(this.lbl_ShoppingCartItemCountBadge);
        fixtures.logger.info('Clicking cart item count badge in Products page')
        await this.lbl_ShoppingCartItemCountBadge.click()
    }

}