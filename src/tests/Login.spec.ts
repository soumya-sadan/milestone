import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Test Suite", () => {

    test("Valid Login Test - OrangeHRM", async ({ page }) => {
        
        const login = new LoginPage(page);

        // Navigate to site
        await login.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Perform login
        await login.login("Admin", "admin123");

        // Assertion after login
        await expect(page).toHaveURL(/dashboard/);

        // Wait for visual check (optional)
        await login.wait(3);
    });

});
