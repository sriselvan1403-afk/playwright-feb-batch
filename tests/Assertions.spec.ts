import { test,chromium, expect } from "@playwright/test";

// test("Assertion",async()=>{

//     const browser=await chromium.launch({headless:false});
//     const context=await browser.newContext();
//     const page=await context.newPage();

//     await page.goto("https://retail.theauto-mate.com/auth/login");

//     const welcome=page.getByText("Welcome Home");

//     // expect
//     //page  Assretion
//     //locator assertion 
//     //Generic assertion

//     //locator specific assertion
//     await expect(welcome,"welcome back text should be visible").toBeVisible();

//     //page assertion
//     // await expect(page).toHaveURL("https://retail.theauto-mate.com/auth/login");
//     // await expect(page).toHaveTitle("ShopSuite - E-Commerce Platform")

//     // //generic assertion
//     // expect(8).not.toBe(8)
// })

// ---------------------------------------------------
// PW  - default waiting time to interact is 30 seconds
//expect - default waiting time is 5 seconds



