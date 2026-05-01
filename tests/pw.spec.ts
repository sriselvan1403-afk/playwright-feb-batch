import {test,chromium} from '@playwright/test'


 test("Launch page ",async ()=>{


    const browser=await chromium.launch({headless:false});

    const context=await browser.newContext()
                
    const page=await context.newPage();

    await page.goto("https://retail.theauto-mate.com/auth/login");

    await page.getByRole("textbox",{name:"Email"}).fill("sri@gmail.com");

    await page.getByPlaceholder("••••••••").fill("sri1234");

    // await page.getByText("Login").click();

    await page.locator("button[type='submit']").click();

    await page.pause();

 });

