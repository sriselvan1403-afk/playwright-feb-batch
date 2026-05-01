import test, { chromium } from "@playwright/test";

test("Launch Browser & Url",async ()=>{

 const browser= await chromium.launch({headless:false});
 const context=await browser.newContext();
 const page=await context.newPage();
await page.goto("https://retail.theauto-mate.com/auth/login");
await page.getByRole('textbox',{name:'Email'}).fill("sri@gmail.com");


await page.pause();

})