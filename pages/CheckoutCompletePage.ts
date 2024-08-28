import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export class CheckoutCompletePage extends BasePage {
    readonly page: Page;
    private readonly lbl_PageTitle: Locator;
    private readonly btn_BackHome: Locator;
    private readonly lbl_ThankYouMsg: Locator;

    constructor (page: Page){
        super(page);
        this.page = page;
        this.lbl_PageTitle = page.locator('[data-test="title"]');
        this.btn_BackHome = page.locator('[data-test="back-to-products"]');
        this.lbl_ThankYouMsg = page.locator('[data-test="complete-header"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Checkout: Complete!');
    }

    async goBackToHomePAge(){
        await this.clickElement(this.btn_BackHome);
    }

    async validateOrderSuccessMessage(){
        await this.waitForElementVisible(this.lbl_ThankYouMsg);
        expect(await this.getElementText(this.lbl_ThankYouMsg)).toContain('Thank you for your order!');
    }


}