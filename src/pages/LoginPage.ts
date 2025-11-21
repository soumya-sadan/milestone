import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { logger } from "../utils/logger";


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
    logger.info(`Entering username: ${username}`);
    await this.type(this.usernameField, username);
}

async enterPassword(password: string) {
    logger.info(`Entering password: ${password}`);
    await this.type(this.passwordField, password);
}

async clickLoginButton() {
    logger.info(`Clicking Login button`);
    await this.click(this.loginButton);
}

async login(username: string, password: string) {
    logger.info(`Performing login with user: ${username}`);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
}


   // async getErrorMessage() {
   //     return await this.getText(this.errorMessage);
    }

