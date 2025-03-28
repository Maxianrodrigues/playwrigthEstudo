const { test, expect } = require('@playwright/test');


const acessarUrl = async (page) =>{
    await page.goto('https://automationpratice.com.br')
};

const validarLoginComSucesso = async (page) =>{
    await page.getByRole('link', { name: ' Login' }).click({ timeout: 1000 });
    await page.locator('#user').fill('teste@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
};

const validarMsgBoasVindas = async (page) =>{
    await expect(page.getByText('Olá, teste@gmail.com')).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
};

module.exports = {
    acessarUrl,
    validarLoginComSucesso,
    validarMsgBoasVindas
}