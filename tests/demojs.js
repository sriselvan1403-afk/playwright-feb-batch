const {chromium}=require('@playwright/test');


async function launchBrowser(){

    const browser=  await chromium.launch({headless:false});
    const  context=  await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.flipkart.com/");
    await page.close();
    await context.close();

}
launchBrowser();