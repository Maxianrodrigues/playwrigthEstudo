// @ts-check
const { test, expect } = require('@playwright/test');
const { time } = require('console');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('teste de login com sucesso @testes', async ({ page }) => {
  await page.goto('https://automationpratice.com.br')
  await page.getByRole('link', { name: ' Login' }).click({timeout: 1000});
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Olá, teste@gmail.com')).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  //await expect(page.getByText('Olá, Maxfalhas')).toBeVisible();
})