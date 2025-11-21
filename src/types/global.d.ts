import { LoginPage } from "../pages/LoginPage";

export type Fixtures = {
  loginPage: LoginPage;
};

declare module "@playwright/test" {
  interface TestArgs {
    loginPage: LoginPage;
  }
}
