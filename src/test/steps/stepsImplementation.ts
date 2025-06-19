import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { fixtures } from '../hooks/fixtures';
import { CucumberWorld } from '../world/CucumberWorld';
import config from '../../helper/env/env';

Given('I navigated to the Sauce Demo page',{timeout: 10 * 1000}, async function (this: CucumberWorld) {
    await this.homePage.navigateTo(config.baseurl)
    await fixtures.logger.info(`Navigated to the base url: ${process.env.BASEURL}`)
    await this.homePage.isAtThisPage();
});

When('I tried login with username {string} and password {string}', async function (this: CucumberWorld, userName, password) {
    await this.homePage.fillLoginForm(userName, password);
});

Then('I see error message containing text {string}', async function (this: CucumberWorld, errMsg) {
    expect(await this.homePage.getLoginErrorMsg()).toContain(errMsg);
    fixtures.logger.info(`Error occured while login - ${errMsg}`);
});

Then('I navigated to Products page', async function (this: CucumberWorld) {
    await this.productsPage.isAtThisPage()
})

When('I added Bike Light to cart', async function (this: CucumberWorld) {
    await this.productsPage.addBikeLightToCart();
});

When('I added Fleece Jacket to cart', async function (this: CucumberWorld) {
    await this.productsPage.addFleeceJacketToCart();
});

Then('Cart Item count should be {string}', async function (this: CucumberWorld, strCartItemCount) {
    expect(await this.productsPage.getCartItemCount()).toEqual(strCartItemCount);
});

When('I navigated to Cart page', async function (this: CucumberWorld) {
    await this.productsPage.gotoCartPage();
    await this.cartPage.isAtThisPage();
});

When('I perform checkout from the Cart page', async function (this: CucumberWorld) {
    await this.cartPage.doCheckout();
});

Then('I navigated to Customer Information page', async function (this: CucumberWorld) {
    await this.customerInfoPage.isAtThisPage();
});

When('I entered my personal information {string} ,{string} and {string} in Customer Information page', 
    async function (this:CucumberWorld, firstName, lastNAme, zipcode) {
    await this.customerInfoPage.enterCustomerInfo(firstName, lastNAme, zipcode);
});

When('I click on Continue button', async function (this: CucumberWorld) {
    await this.customerInfoPage.doContinueToOverviewPage();
});

Then('I navigated to Overview page', async function (this: CucumberWorld) {
   await this.overviewPage.isAtThisPage();
});

When('I finish checkout in  Overview page', async function (this: CucumberWorld) {
    await this.overviewPage.finishCheckout();
});

Then('I see Order Successful message', async function (this: CucumberWorld) {
    await this.checkoutCompletePage.validateOrderSuccessMessage();
});

Then('I navigated to Checkout Complete page', async function (this: CucumberWorld) {
  await this.checkoutCompletePage.isAtThisPage();
})

When('I set customer name to {string}', async function(this: CucumberWorld, customerName: string){
    fixtures.logger.info('Setting customer name')
    this.custName = customerName;
});

Then('I get customer name', async function(this: CucumberWorld){
    fixtures.logger.info(`Getting customer name: ${this.custName}`);
});

