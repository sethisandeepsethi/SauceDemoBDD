import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber'
import { Page, Browser, chromium, BrowserContext } from '@playwright/test'
import { fixtures } from './pageFixtures'
import { invokeBrowser } from '../../helper/browserManager';
import { getEnv } from '../../helper/env/env';
import { createLogger } from 'winston';
import { options } from '../../helper/logger';

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv()
    browser = await invokeBrowser();
})

Before(async function ({pickle}) {
    const scenarioName = pickle.name + ' - ' + pickle.id;
    context = await browser.newContext();
    const page = await context.newPage();
    fixtures.page = page;
    fixtures.logger = createLogger(options(scenarioName));
})

After(async function ({ result, pickle }) {
    //Screenshot only for failure
    if (result?.status == Status.FAILED) {
        const img = await fixtures.page.screenshot(
            {
                "path": `results/reports/screenshots/${pickle.name}.png`,
                "type": "png"
            })
        await this.attach(img,"image/png")
    }
    await fixtures.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
    fixtures.logger.close();
})