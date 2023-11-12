const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Inner Page Contact Us Form on Folio3.ai Website', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(1200000);
 await page.goto('https://www.folio3.ai/large-language-models/generative-ai-services/');
 await page.getByRole('form', { name: 'Contact form' }).locator('input[name="your-name"]').fill('Testing Name')
 await page.getByRole('form', { name: 'Contact form' }).locator('input[name="your-email"]').fill('test@gmail.com')
 await page.locator('input[name="Phone"]').fill('+14483975828')
 await page.locator('textarea[name="projectdetail"]').fill('This is an automated description from Automation tool')
 await page.getByRole('textbox', { name: '10+2=?' }).fill('12')
 //await page.getByRole('button', { name: 'Submit Your Request' })
 page.waitForTimeout(20000);
console.log(await page.title());
page.waitForTimeout(20000);
await expect(page).toHaveTitle('Generative AI Services | Folio3 AI Experts');
console.log('Inner Page Contact form successfully submitted')
 });