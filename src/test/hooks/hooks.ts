import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber'
import { Browser, BrowserContext } from '@playwright/test'
import { fixtures } from './fixtures'
import { invokeBrowser } from '../../helper/browserManager';
import { createLogger } from 'winston';
import { options } from '../../helper/logger';
import { PageManager } from '../../helper/PageManager';
import config from '../../helper/env/env';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await invokeBrowser();
})

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + ' - ' + pickle.id;
    context = await browser.newContext();
    const page = await context.newPage();
    fixtures.page = page;
    
    await fixtures.page.setViewportSize( { width: config.width, height: config.height } )
    fixtures.logger = createLogger(options(scenarioName));

    this.pageManager = new PageManager(); //Ensure to initialize fixtures before reaching here
    this.basePage = this.pageManager.getBasePage();
    this.homePage = this.pageManager.getHomePage();
    this.productsPage = this.pageManager.getProductsPage();
    this.cartPage = this.pageManager.getCartPage();
    this.customerInfoPage = this.pageManager.getCustomerInfoPage();
    this.overviewPage = this.pageManager.getOverviewPage();
    this.checkoutCompletePage = this.pageManager.getCheckoutCompletePage();
})

After(async function ({ result, pickle }) {
    //Screenshot only for failure
    if (result?.status == Status.FAILED) {
        const img = await fixtures.page.screenshot(
            {
                "path": `test-results/reports/screenshots/${pickle.name}.png`,
                "type": "png"
            })
        await this.attach(img, "image/png")
    }
    await fixtures.page.close();
    await context.close();
})

AfterAll(async function () {
    fixtures.logger.close();
    await browser.close();
})