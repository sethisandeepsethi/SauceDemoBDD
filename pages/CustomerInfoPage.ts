import { expect, Locator, Page } from '@playwright/test';
import BasePage from './BasePage';
import { fixtures } from '../src/test/hooks/fixtures';

export class CustomerInfoPage extends BasePage {
    readonly page: Page;
    private readonly lbl_PageTitle: Locator;
    private readonly txt_FirstName: Locator;
    private readonly txt_LastName: Locator;
    private readonly txt_ZipCode: Locator;
    private readonly btn_Continue: Locator;

    constructor (page: Page){
        super(page);
        this.page = page;
        this.lbl_PageTitle = page.locator('[data-test="title"]');
        this.txt_FirstName = page.locator('[data-test="firstName"]');
        this.txt_LastName = page.locator('[data-test="lastName"]');
        this.txt_ZipCode = page.locator('[data-test="postalCode"]');
        this.btn_Continue = page.locator('[data-test="continue"]');
    }

    async isAtThisPage() {
        await expect(this.lbl_PageTitle).toContainText('Checkout: Your Information');
    }

    async enterCustomerInfo(firstName: string, lastName: string, zipCode: string){
        await this.fillFormField(this.txt_FirstName, firstName);
        await this.fillFormField(this.txt_LastName, lastName);
        await this.fillFormField(this.txt_ZipCode, zipCode);
    }

    async doContinueToOverviewPage(){
        fixtures.logger.info('Clicking Continue button in customer info page')
        await this.clickElement(this.btn_Continue);
    }


}