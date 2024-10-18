const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/login/login.page');
const ProductPage = require('../../pages/product/product.page');
const env = require('../../utils/env');
const credentials = require('../../data/credentials.json');


test('Login com Sucesso e Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Acessar página de login
  await page.goto(env.baseURL);

  // Login com sucesso
  await loginPage.login(credentials.valid.username, credentials.valid.password);

  // Verificar redirecionamento para a página de produtos
  await expect(page).toHaveURL(`${env.baseURL}/produto`);
  await expect(page).toHaveTitle('Lojinha');

  // Verificar presença dos elementos na página de produtos
  await productPage.verifyPageLoaded();

  // Logout
  await productPage.logout();

  // Verificar redirecionamento para a página de login
  await expect(page).toHaveTitle('Lojinha');
});

test('Login com Falha', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Acessar página de login
  await page.goto(env.baseURL);

  // Login com credenciais inválidas
  await loginPage.login(credentials.invalid.username, credentials.invalid.password);

  // Verificar mensagem de erro
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Falha ao fazer o login');

});

