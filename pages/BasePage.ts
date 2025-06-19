import { Locator, Page } from "@playwright/test";
import { fixtures } from "../src/test/hooks/fixtures";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async debug(): Promise<void> {
        await this.page.pause();
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
        fixtures.logger.info(`Navigating to URL: ${url} with waitForLoadState = networkidle`)
        await this.page.waitForLoadState('networkidle');
    }

    async clickElement(element: Locator): Promise<void> {
        await element.isVisible();
        await element.click();  
    }

    async fillFormField(element: Locator, value: string): Promise<void> {
        await element.isEditable();
        await element.fill(value);
    }

    async getElementText(element: Locator): Promise<string> {
        return await element.innerText();
    }

    async waitForElementVisible(element: Locator | string): Promise<void> {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'visible' });
        } else {
            await element.waitFor({ state: 'visible' });
        }
    }

    async waitForElementHidden(element: Locator): Promise<void> {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'hidden' });
        } else {
            await element.waitFor({ state: 'hidden' });
        }
    }

    async takeScreenshot(fileName: string): Promise<void> {
        await this.page.screenshot({ path: fileName });
    }
}