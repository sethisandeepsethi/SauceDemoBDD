import { When } from '@cucumber/cucumber'
import { fixtures } from '../hooks/fixtures';
import { CucumberWorld } from '../world/CucumberWorld';

When('I removed Bike Light from cart', async function(this: CucumberWorld) {
    await this.cartPage.removeBikeLightFromCart();
    fixtures.logger.info('Bike light should be removed from cart');
})

When('I removed Fleece Jacket from cart', async function(this: CucumberWorld) {
    await this.cartPage.removeFleeceJacketFromCart();
    fixtures.logger.info('Fleece Jack should be removed from cart')
})
