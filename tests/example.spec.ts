import { test, expect } from '@playwright/test';

test('renderiza pagina local', async ({ page }) => {
  await page.setContent('<h1>Playwright instalado</h1>');
  await expect(page.locator('h1')).toHaveText('Playwright instalado');
});
