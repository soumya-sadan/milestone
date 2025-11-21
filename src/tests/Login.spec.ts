import { test, expect } from "../fixtures/baseTest";
//import { DataReader } from "@utils/dataReader";
import { DataReader } from "@utils/dataReader";
//import { logger } from "../utils/logger";
import { logger } from "@utils/logger";

// Global variable to store CSV data
let csvData: any[] = [];

// Load CSV test data before test execution
test.beforeAll(async () => {
    csvData = await DataReader.readCSV("loginData.csv");
    console.log("Loaded CSV Data:", csvData);
});

test("Valid Login Test - OrangeHRM (Using CSV data)", async ({ loginPage }) => {

    logger.info("Starting Valid Login Test (CSV Data)");

    // Read first row of CSV
    const username = csvData[0].username;
    const password = csvData[0].password;

    logger.info(`Using credentials → Username: ${username}, Password: ${password}`);

    await loginPage.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await loginPage.login(username, password);

    logger.info("Login submitted. Verifying dashboard URL...");

    await expect(loginPage.getPage()).toHaveURL(/dashboard/);

    logger.info("Valid Login Test completed successfully.");
});
