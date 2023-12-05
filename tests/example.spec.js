// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.setContent('<input type="text" value="hello world" />');

  const input = page.locator('input');
  
  await expect(input).toHaveJSProperty('value', 'hello world');
  
  await input.focus();
  
  await page.keyboard.press('Meta');
  
  await expect(input).toHaveJSProperty('value', 'hello world');
});