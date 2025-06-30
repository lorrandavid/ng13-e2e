import { expect, test } from '@bgotink/playwright-coverage';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Ng13');
});
