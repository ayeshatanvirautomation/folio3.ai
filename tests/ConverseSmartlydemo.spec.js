const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Converse Smartly link through Folio3.ai Website', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(120000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
  await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/converse-smartly-try-now/');
 //await page.locator("#closePopup").click()
 await page.getByRole('link', { name: 'Sign Up Now' }).click({force:true})
 console.log(await page.title());
});