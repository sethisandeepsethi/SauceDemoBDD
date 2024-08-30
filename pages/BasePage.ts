import { Locator, Page } from "@playwright/test";
import { fixtures } from "../src/test/hooks/pageFixtures";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
        fixtures.logger.info('waitForLoadState - networkidle ')
        await this.page.waitForLoadState('networkidle');
    }

    async clickElement(element: Locator) {
        await element.click();
    }

    async fillFormField(element: Locator, value: string) {
        await element.fill(value);
    }

    async getElementText(element: Locator): Promise<string> {
        return await element.innerText();
    }

    async waitForElementVisible(element: Locator | string) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'visible' });
        } else {
            await element.waitFor({ state: 'visible' });
        }
    }

    async waitForElementHidden(element: Locator) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'hidden' });
        } else {
            await element.waitFor({ state: 'hidden' });
        }
    }

    async takeScreenshot(fileName: string) {
        await this.page.screenshot({ path: fileName });
    }
}