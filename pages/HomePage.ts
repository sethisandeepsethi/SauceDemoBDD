import { Page, Locator, expect} from '@playwright/test'
import BasePage from './BasePage'
import { fixtures } from '../src/test/hooks/fixtures';

export class HomePage extends BasePage{
    readonly page: Page;
    private readonly userNameTextBox: Locator
    private readonly passwordTextBox: Locator
    private readonly loginButton: Locator
    private readonly shopLabel: Locator
    private readonly errorMsg: Locator

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userNameTextBox = page.locator('[data-test="username"]');
        this.passwordTextBox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.shopLabel = page.locator('div.login_logo');
        this.errorMsg = page.locator('[data-test="error"]')
    }

    async isAtThisPage(){
        await expect(this.shopLabel).toContainText('Swag Labs');
    }

    async fillLoginForm(userName:string, password:string) {
        await this.fillFormField(this.userNameTextBox, userName)
        await this.fillFormField(this.passwordTextBox, password)
        fixtures.logger.info(`Clicking Login button`)
        await this.clickElement(this.loginButton);
    }

    async getLoginErrorMsg():Promise<string>{
        return await this.getElementText(this.errorMsg);
    }
}