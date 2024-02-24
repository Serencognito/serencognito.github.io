import { expect, test } from '@playwright/test';

test('right clicking on a file in the sidebar opens a context menu', async ({ page }) => {
	await page.goto('/');
	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click({ button: 'right' });
	await expect(page.getByRole('button', { name: 'Open to the Side' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Open', exact: true })).toBeVisible();
});

test('right clicking on a file in the sidebar and clicking "Open to the Side" opens the file in a new editor', async ({
	page
}) => {
	await page.goto('/');
	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click({ button: 'right' });
	await page.getByRole('button', { name: 'Open to the Side' }).click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toHaveClass(/text-teal-300/);
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toHaveClass(/text-teal-300.*opacity-50/);
});
