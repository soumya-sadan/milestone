import { Page, expect } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(selector: string) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }

    async type(selector: string, text: string) {
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string> {
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
}
