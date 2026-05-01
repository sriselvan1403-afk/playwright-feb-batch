import { test as base } from "@playwright/test";
import { Loginpage } from "../Pages/LoginPage";

type MyFixtures = {
login:Loginpage;

};

export const test = base.extend<MyFixtures>({
  login: async ({ page,context }, use) => {
    // Set up the fixture.
  await page.goto("https://apps.theauto-mate.com/crm/login.php");
 const loginPage=new Loginpage(page,context);
await loginPage.enterUserName("automate.crm");
await loginPage.enterPassword("test@123");
await loginPage.clickSignin();

    // // Use the fixture value in the test.
    await use(loginPage);

    // // Clean up the fixture.
    // await todoPage.removeAll();
  }
  
});
