import { expect, test } from '@playwright/test';

test('clicking on a file in the sidebar opens the file', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('app-rail').getByRole('button').first().click();

	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toBeVisible();
});

test('clicking the close button on the file tab closes the file and no files will be left over', async ({
	page
}) => {
	await page.goto('/');
	await page.locator('#openFiles').getByRole('button').click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).not.toBeVisible();

	await expect(page.locator('#openFiles')).not.toBeVisible();
});

test('opening a file from the sidebar and then clicking the close button on the file tab closes the file', async ({
	page
}) => {
	await page.goto('/');
	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click();
	await page.locator('#openFiles').getByRole('button').last().click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).not.toBeVisible();
});

test('opening a file and then clicking on another file will leave both files open with the new file being the active file', async ({
	page
}) => {
	await page.goto('/');
	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click();
	await page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' }).click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toHaveClass(/text-teal-300/);
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).not.toHaveClass(/text-teal-300/);
});

test('clicking on files in the sidebar can switch active file', async ({ page }) => {
	await page.goto('/');
	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toBeVisible();
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).not.toHaveClass(/text-teal-300/);
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).toHaveClass(/text-teal-300/);

	await page.getByTestId('accordion-item').getByRole('menuitem', { name: 'about-me.ts' }).click();

	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'about-me.ts' })
	).toHaveClass(/text-teal-300/);
	await expect(
		page.locator('#openFiles').getByRole('menuitem', { name: 'made-with.svelte' })
	).not.toHaveClass(/text-teal-300/);
});

test('sidebar shows active file with a teal color', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.getByTestId('accordion-item').getByRole('menuitem', { name: 'made-with.svelte' })
	).not.toHaveClass(/text-teal-300/);

	await page
		.getByTestId('accordion-item')
		.getByRole('menuitem', { name: 'made-with.svelte' })
		.click();
	await expect(
		page.getByTestId('accordion-item').getByRole('menuitem', { name: 'made-with.svelte' })
	).toHaveClass(/text-teal-300/);
});
