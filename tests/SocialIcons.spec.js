const { test, expect } = require('@playwright/test');
//tests executes sequentially 
test.describe('Verify Social Meida Icons in Folio3.ai website in the Footer', () => {

test('Verify Linkedin Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(120000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
  await page.goto('https://www.folio3.ai/');
  const SocialIcon = await page.locator('.social-media-wrapper > li:nth-child(3)')
  // Verify that the icon is present
  await expect(SocialIcon).not.toBeNull();
 
});

test('Verify Twitter Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(120000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
  await page.goto('https://www.folio3.ai/');
  const SocialIcon = await page.locator('.social-media-wrapper > li:nth-child(2)')
  // Verify that the icon is present
  await expect(SocialIcon).not.toBeNull();

});

test('Verify Facebook Folio3.ai Website Main Page', async ({ page,browser }) => {
  test.slow();
  test.setTimeout(120000);
  const context = await browser.newContext({
    args: ['--enable-javascript'], // Enable JavaScript
  });
  page = await context.newPage(); // Use the existing 'page' object
  await page.goto('https://www.folio3.ai/');
  const SocialIcon = await page.locator('.social-media-wrapper > li').first()
  // Verify that the icon is present
  await expect(SocialIcon).not.toBeNull();

});
});