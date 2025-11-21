import { Page, expect } from "@playwright/test";
import { logger } from "../utils/logger";


export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
    logger.info(`Navigating to URL: ${url}`);
    await this.page.goto(url);
}

async click(selector: string) {
    logger.info(`Clicking element: ${selector}`);
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
}

async type(selector: string, text: string) {
    logger.info(`Typing "${text}" into: ${selector}`);
    await this.page.waitForSelector(selector);
    await this.page.fill(selector, text);
}

async getText(selector: string): Promise<string> {
    logger.info(`Getting text from: ${selector}`);
    await this.page.waitForSelector(selector);
    return await this.page.textContent(selector) || "";
}


    async wait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `./reports/screenshots/${name}.png`
        });
    }

    getPage() {
    return this.page;
}

}
