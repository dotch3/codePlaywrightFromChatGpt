class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#usuario';
    this.passwordInput = '#senha';
    this.loginButton = 'text=Entrar';
    this.toastError = '#toast-container';
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return this.page.textContent(this.toastError);
  }
}

module.exports = LoginPage;
