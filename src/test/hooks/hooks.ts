import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber'
import { Page, Browser, chromium, BrowserContext } from '@playwright/test'
import { pageFixture } from './pageFixtures'
import { invokeBrowser } from '../../helper/browserManager';
import { getEnv } from '../../helper/env/env';

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv()
    browser = await invokeBrowser();
})

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    //@ts-ignore
    pageFixture.page = page;
})

After(async function ({ result, pickle }) {
    //Screenshot only for failure
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot(
            {
                "path": `results/reports/screenshots/${pickle.name}.png`,
                "type": "png"
            })
        await this.attach(img,"image/png")
    }
    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
})