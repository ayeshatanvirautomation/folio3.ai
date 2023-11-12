const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Contact Us Form on Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(120000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
  await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/');
 await page.getByRole('form', { name: 'Contact form' }).locator('input[name="your-name"]').fill('Testing Name')
 await page.getByRole('form', { name: 'Contact form' }).locator('input[name="your-email"]').fill('test@gmail.com')
 await page.locator('input[name="Phone"]').fill('+14483975828')
 await page.locator('textarea[name="projectdetail"]').fill('This is an automated description from Automation tool')
 await page.getByRole('textbox', { name: '10+2=?' }).fill('12')
 //await page.getByRole('button', { name: 'Submit Your Request' })
 await page.waitForTimeout(20000);
 console.log(await page.title());
 page.waitForTimeout(20000);
 await expect(page).toHaveTitle('Machine Learning Company & Artificial Intelligence Solution - Folio3.Ai');
 console.log('Contact Us form successfully submitted')
 });