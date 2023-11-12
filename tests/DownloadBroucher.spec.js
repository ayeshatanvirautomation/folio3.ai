const { test, expect } = require('@playwright/test');
test.describe('Verify Download Brouchers from Resources Page', () => {
test('Verify Download Brouchers of Animal Detection & Counting Solution', async ({ page,browser }) => {
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/resources/'); 
await page.locator("//div[contains(text(),'Brochures')]").click();  
await page.getByRole('link', { name: 'Download Brochure' }).nth(0).click();
console.log(await page.getByRole('heading', { name: 'Animal Detection & Counting Solution' }));
await page.getByRole('textbox', { name: 'First Name' }).fill('Testing First Name');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Testing Last Name');
await page.getByRole('textbox', { name: 'Organization' }).fill('Folio3');
await page.getByRole('textbox', { name: 'Email' }).fill('ayeshatanvir@folio3.com');
await page.locator('#popmake-16631').getByLabel('10+2=?').fill('12')
await page.getByRole('checkbox').nth(0).check()
//await page.getByRole('button', { name: 'Get my Brochure' }).click({force:true})
await page.waitForTimeout(20000);
});


test('Verify Download Brouchers of Apparel Detection Solution', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/resources/'); 
await page.locator("//div[contains(text(),'Brochures')]").click();  
await page.getByRole('link', { name: 'Download Brochure' }).nth(1).click();
console.log(await page.getByRole('heading', { name: 'Apparel Detection Solution' }));
await page.getByRole('textbox', { name: 'First Name' }).fill('Testing First Name');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Testing Last Name');
await page.getByRole('textbox', { name: 'Organization' }).fill('Folio3');
await page.getByRole('textbox', { name: 'Email' }).fill('ayeshatanvir@folio3.com');
await page.locator('#popmake-7681').getByLabel('10+2=?').fill('12')
await page.getByRole('checkbox').nth(1).check()
//await page.getByRole('button', { name: 'Get my Brochure' }).click({force:true})
await page.waitForTimeout(20000);
 });


 test('Verify Download Brouchers of Food Detection Solutions', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/resources/'); 
await page.locator("//div[contains(text(),'Brochures')]").click();  
await page.getByRole('link', { name: 'Download Brochure' }).nth(2).click();
console.log(await page.getByRole('heading', { name: 'Food Detection Solutions' }));
await page.getByRole('textbox', { name: 'First Name' }).fill('Testing First Name');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Testing Last Name');
await page.getByRole('textbox', { name: 'Organization' }).fill('Folio3');
await page.getByRole('textbox', { name: 'Email' }).fill('ayeshatanvir@folio3.com');
await page.locator('#popmake-7684').getByLabel('10+2=?').fill('12')
await page.getByRole('checkbox').nth(2).check()
//await page.getByRole('button', { name: 'Get my Brochure' }).click({force:true})
await page.waitForTimeout(20000);
 });

test('Verify Download Brouchers of Person Detection Solution', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/resources/'); 
await page.locator("//div[contains(text(),'Brochures')]").click();  
await page.getByRole('link', { name: 'Download Brochure' }).nth(3).click();
console.log(await page.getByRole('heading', { name: 'Person Detection Solution' }));
await page.getByRole('textbox', { name: 'First Name' }).fill('Testing First Name');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Testing Last Name');
await page.getByRole('textbox', { name: 'Organization' }).fill('Folio3');
await page.getByRole('textbox', { name: 'Email' }).fill('ayeshatanvir@folio3.com');
await page.locator('#popmake-7687').getByLabel('10+2=?').fill('12')
await page.getByRole('checkbox').nth(3).check()
//await page.getByRole('button', { name: 'Get my Brochure' }).click({force:true})
await page.waitForTimeout(20000);
 });
 
 test('Verify Download Brouchers of Vehicle Detection & Counting Solution', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(1200000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
 await page.waitForTimeout(20000);
 await page.goto('https://www.folio3.ai/resources/'); 
await page.locator("//div[contains(text(),'Brochures')]").click();  
await page.getByRole('link', { name: 'Download Brochure' }).nth(4).click();
console.log(await page.getByRole('heading', { name: 'Vehicle Detection & Counting Solution' }));
await page.getByRole('textbox', { name: 'First Name' }).fill('Testing First Name');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Testing Last Name');
await page.getByRole('textbox', { name: 'Organization' }).fill('Folio3');
await page.getByRole('textbox', { name: 'Email' }).fill('ayeshatanvir@folio3.com');
await page.locator('#popmake-7720').getByLabel('10+2=?').fill('12')
await page.getByRole('checkbox').nth(4).check()
//await page.getByRole('button', { name: 'Get my Brochure' }).click({force:true})
await page.waitForTimeout(20000);
 });
});