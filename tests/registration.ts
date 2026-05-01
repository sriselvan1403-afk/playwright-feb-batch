import {chromium} from '@playwright/test'


 async function  reg(){
    const browser=await chromium.launch({headless:false});

    const context=await browser.newContext()
                
    const page=await context.newPage();

    await page.goto("https://www.irctc.co.in/nget/train-search");

    await page.waitForTimeout(5000);
}

reg();

//Browser
//context
//page