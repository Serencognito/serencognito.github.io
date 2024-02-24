import { expect, test } from '@playwright/test';

test('page loads with sidebar open and about-me page open by default', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Explorer' })).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toBeVisible();
	await expect(page.locator('#openFiles').getByRole('button')).toBeVisible();
	await expect(page.getByRole('button', { name: 'SERENCOGNITO.GITHUB.IO' })).toBeVisible();
	await expect(page.locator('ol').getByText('about-me.ts')).toBeVisible();
	await expect(page.getByText('17', { exact: true })).toBeVisible();
	await expect(page.getByText('18', { exact: true })).not.toBeVisible();
	await expect(page.locator('ol').getByText('about-me.ts')).toBeVisible();
	await expect(
		page.getByTestId('accordion-item').getByRole('menuitem', { name: 'made-with.svelte' })
	).toBeVisible();
	await expect(
		page.getByTestId('accordion-item').getByRole('menuitem', { name: 'about-me.ts' })
	).toBeVisible();
	await expect(page.getByTestId('app-rail').getByRole('button').first()).toBeVisible();
});
