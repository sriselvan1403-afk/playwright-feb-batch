import test, { chromium } from "@playwright/test";



test("Create account ",async()=>{

    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://retail.theauto-mate.com/auth/register");
    await page.getByRole('textbox',{name:"Full Name"}).fill("Jai");
    await page.getByRole('textbox',{name:"Email"}).fill("jai@gmail.com");
    await page.locator("input[id='phone']").fill("9876554433");
    await page.getByRole('textbox',{name:"Password",exact:true}).fill("jai1234");
    await page.getByRole('textbox',{name:"Confirm Password"}).fill("jai1234");
    // await page.getByRole('button',{name:"Sign Up"}).click();
    await page.locator("button[type='submit']").click();
    await page.pause();
})

