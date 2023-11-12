const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test('Verify Hire ML Flow on Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/');
await page.getByRole('link', { name: 'Hire ML Engineers' }).click();
console.log('Hire ML Page')
await page.locator('p').filter({ hasText: 'Hire Today' }).click({force:true});
//await page.waitForTimeout(20000);
//await page.locator("#closePopup").click()
//await page.getByRole('button', { name: 'Accept' }).click()
await page.locator('.btn-style-3.popmake-12703')
await page.getByText('Hire Today').click({force:true});
await page.locator("input[name='your-name']").first().fill('Testing Name');
await page.locator('#yourEmail').fill('test@gmail.com')
 await page.locator('input[name="Resourcesrequired"]').fill('2')
 await page.locator('#projectDetails').fill('This is an automated description from Automation tool')
 await page.locator('#popmake-12703').getByLabel('10+2=?').fill('12')
 //await page.getByRole('button', { name: 'Submit', exact: true })

await page.getByRole('button', { name: 'Close' }).nth(0).click();
await expect(page).toHaveURL('https://www.folio3.ai/hire-remote-ml-engineers/')

 });