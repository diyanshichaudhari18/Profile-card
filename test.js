// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout profile-card.xyz', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('check for the elements that it contains value', async function() {
        // Load the page
        await driver.get('https://xyz.link');
        // Find the element by id
        await driver.findElement(By.id('lst-ib')).contains();
		...please put if loop to check that the element which we fetch by id is not null; that means the data is loaded.
        
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})