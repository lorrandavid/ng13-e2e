// import { expect, test } from '@bgotink/playwright-coverage';
import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Ng13');
});
