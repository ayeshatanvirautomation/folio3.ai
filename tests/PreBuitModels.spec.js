const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Prebuilt models Flow on Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.goto('https://www.folio3.ai/');
await page.getByRole('link', { name: 'View Prebuilt models' }).click();
console.log('Prebuilt models Page')
await page.getByRole('link', { name: 'Schedule a Free Consulation' }).click();
console.log('Contact Us Page')
await page.getByRole('heading', { name: 'Contact Us' })
await page.waitForTimeout(20000);
console.log(await page.title());
page.waitForTimeout(60000);
await expect(page).toHaveTitle('Get In Touch - Folio3 AI');
});