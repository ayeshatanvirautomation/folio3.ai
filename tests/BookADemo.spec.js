const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Book a demo Form on Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/');
 await page.getByRole('link', { name: 'Book A Demo' }).click({force:true});
  await page.locator("//input[@name='your-name']").first().fill('Testing Name');
 await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
 await page.locator("input[name='companyname']").fill('Test Project Name');
 await page.locator("input[name='Phone']").fill('+14483975828');
 await page.getByLabel('Vehicle Detection & Counting Solution').check();
 await page.getByLabel('Face Recognition Service').check();
 await page.getByPlaceholder('Enter message').fill('This is an automated description from Automation tool')
 await page.getByRole('textbox', { name: '10+2=?' }).fill('12')
// await page.getByRole('button', { name: 'Submit' })
 page.waitForTimeout(20000);
console.log(await page.title());
page.waitForTimeout(20000);
await expect(page).toHaveTitle('Book A Demo - Folio3 AI');
console.log('Book a Demo form successfully submitted')
 });
