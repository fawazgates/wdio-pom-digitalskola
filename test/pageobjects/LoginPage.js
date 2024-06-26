export default class LoginPage {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

    open() {
        return browser.url('https://www.saucedemo.com/');
    }
}
