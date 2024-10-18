class ProductPage {
  constructor(page) {
    this.page = page;
    this.addProductButton = 'text=Adicionar produto';
    this.logoutLink = 'text=Sair';
  }

  async verifyPageLoaded() {
    await this.page.waitForSelector(this.addProductButton);
    await this.page.waitForSelector(this.logoutLink);
  }

  async logout() {
    await this.page.click(this.logoutLink);
  }
}

module.exports = ProductPage;
