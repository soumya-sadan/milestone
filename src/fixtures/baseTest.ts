import { test as base, chromium, Browser, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
    browser: Browser;
    page: Page;
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    
    browser: async ({ }, use) => {
        const browser = await chromium.launch({
            headless: false,  // change to true in CI
        });
        await use(browser);
        await browser.close();
    },

    page: async ({ browser }, use) => {
        const context = await browser.newContext({
            viewport: { width: 1280, height: 720 },
            recordVideo: { dir: "test-results/videos" }
        });

        const page = await context.newPage();
        await use(page);
        
        await context.close();
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }

});

export { expect } from "@playwright/test";
