import { Given, Then, When } from '@cucumber/cucumber'
import { expect, Page } from '@playwright/test'
import { HomePage } from '../../../pages/HomePage';
import { fixtures } from '../hooks/pageFixtures';
import { ProductsPage } from '../../../pages/ProductsPage';
import { CartPage } from '../../../pages/CartPage';
import { CustomerInfoPage } from '../../../pages/CustomerInfoPage';
import { OverviewPage } from '../../../pages/OverviewPage';
import { CheckoutCompletePage } from '../../../pages/CheckoutCompletePage';

let homePage: HomePage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let customerInfoPage: CustomerInfoPage;
let overviewPage: OverviewPage;
let checkoutCompletePage: CheckoutCompletePage;

Given('I navigated to the Sauce Demo page', async function () {
    homePage = new HomePage(fixtures.page);
    await homePage.navigateTo(process.env.BASEURL ?? 'https://www.saucedemo.com');
    await fixtures.logger.info(`Navigated to the base url: ${process.env.BASEURL}`)
    await homePage.isAtThisPage();
});

When('I tried login with username {string} and password {string}', async function (userName, password) {
    await homePage.fillLoginForm(userName, password);
});

Then('I see error message containing text {string}', async function (errMsg) {
    expect(await homePage.getLoginErrorMsg()).toContain(errMsg);
    fixtures.logger.info(`Error occured while login - ${errMsg}`);
});

Then('I navigated to Products page', async function () {
    productsPage = new ProductsPage(fixtures.page);
    await productsPage.isAtThisPage()
})

When('I added Bike Light to cart', async function () {
    await productsPage.addBikeLightToCart();
});

When('I added Fleece Jacket to cart', async function () {
    await productsPage.addFleeceJacketToCart();
});

Then('Cart Item count should be {string}', async function (strCartItemCount) {
    expect(await productsPage.getCartItemCount()).toEqual(strCartItemCount);
});

When('I navigated to Cart page', async function () {
    await productsPage.gotoCartPage();
    cartPage = new CartPage(fixtures.page);
    await cartPage.isAtThisPage();
});

When('I perform checkout from the Cart page', async function () {
    await cartPage.doCheckout();
});

Then('I navigated to Customer Information page', async function () {
    customerInfoPage = new CustomerInfoPage(fixtures.page);
    await customerInfoPage.isAtThisPage();
});

When('I entered my personal information {string} ,{string} and {string} in Customer Information page', 
    async function (firstName, lastNAme, zipcode) {
    await customerInfoPage.enterCustomerInfo(firstName, lastNAme, zipcode);
});

When('I click on Continue button', async function () {
    await customerInfoPage.doContinueToOverviewPage();
});

Then('I navigated to Overview page', async function () {
   overviewPage = new OverviewPage(fixtures.page);
   await overviewPage.isAtThisPage();
});

When('I finish checkout in  Overview page', async function () {
    await overviewPage.finishCheckout();
});

Then('I see Order Successful message', async function () {
    await checkoutCompletePage.validateOrderSuccessMessage();
});

Then('I navigated to Checkout Complete page', async function () {
  checkoutCompletePage = new CheckoutCompletePage(fixtures.page);
  await checkoutCompletePage.isAtThisPage();
})
