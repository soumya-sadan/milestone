import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        
        super(page);
    }

    // Locators
    private usernameField = "xpath=//input[@placeholder='Username']";
    private passwordField = "xpath=//input[@placeholder='Password']";
    private loginButton = "xpath=//button[@type='submit']";
    private errorMessage = ".error-msg";

    // Actions
    async enterUsername(username: string) {
        await this.type(this.usernameField, username);
    }

    async enterPassword(password: string) {
        await this.type(this.passwordField, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

   // async getErrorMessage() {
   //     return await this.getText(this.errorMessage);
   // }
}
