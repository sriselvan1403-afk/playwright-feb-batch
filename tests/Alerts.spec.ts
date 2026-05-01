import test, { expect } from "@playwright/test";
import { exec } from "node:child_process";


// test("DemoQA--Alerts ",async({page})=>{

//     await page.goto("https://demoqa.com/alerts");
//     await page.locator("#alertButton").click();
//     await page.waitForTimeout(3000);
//     await page.locator("#confirmButton").click();
//     await page.waitForTimeout(3000);
//     await page.locator("#promtButton").click();
//     await page.pause();
// })

// ----------------------------------------------------------

// test("DemoQA--Alerts ",async({page})=>{

//     await page.goto("https://demoqa.com/alerts");
//     //listener
//     page.on("dialog",async (dialog)=>{

//        const alertType= dialog.type();
//        console.log("Alert Type :"+alertType);

//        const alertMessage=dialog.message();
//        console.log("Alets message :"+alertMessage);

//        await dialog.accept("sri");
       
//     })

//     await page.locator("#confirmButton").click();
//     await page.locator("#promtButton").click();

//     await page.pause();
// })

// ----------------------------------------------------

// test("DemoQA--Alerts ",async({page})=>{

//     await page.goto("https://demoqa.com/alerts");
//     //listener
//     page.on("dialog",async (dialog)=>{

//        const alertMessage=dialog.message();
//        expect(alertMessage,"Alert msg - do you confirm action ?  should be displayed").toEqual("Do you confirm action?");

//        await dialog.dismiss();//dismiss the alert -  click cancel
       
//     })

//     await page.locator("#confirmButton").click();
//     await page.pause();
// })

// ---------------------------------------------

// test("DemoQA--Alerts ",async({page})=>{

//     await page.goto("https://demoqa.com/alerts");
//     //listener
//     page.on("dialog",async (dialog)=>{

//        const alertMessage=dialog.message();
//     //    expect(alertMessage,"Alert msg - do you confirm action ?  should be displayed").toEqual("Do you confirm action?");

//        await dialog.accept("sri");//dismiss the alert -  click cancel
       
//     })

//     await page.locator("#confirmButton").click();
//     await page.locator("#alertButton").click();
//      await page.locator("#promtButton").click();

//     await page.pause();
// })

// ------------------------------------------

// test("DemoQA--Alerts ",async({page})=>{

//     await page.goto("https://demoqa.com/alerts");
//     //listener
//     page.on("dialog",async (dialog)=>{

//         const alertType=dialog.type();

//     if(alertType==="confirm"){
//        await dialog.dismiss();
//     }
//     else if(alertType==="prompt"){
//        await dialog.accept("sri");
//     }
//     else{
//         await dialog.accept();
//     }
//     })

//     await page.locator("#confirmButton").click();
//     await page.locator("#alertButton").click();
//      await page.locator("#promtButton").click();

//     await page.pause();
// })

// ----------------------------------------------
test("DemoQA--Alerts ",async({page})=>{

    await page.goto("https://demoqa.com/alerts");
    //listener
    page.on("dialog",async (dialog)=>{

        const alertType=dialog.type();
        console.log("Alerts type: "+alertType);

       await  dialog.accept();
   
    })

    const dialogWait=page.waitForEvent("dialog");//starts on

    await page.locator("#timerAlertButton").click();//it take 5 sec
    
    await dialogWait;

    // await page.waitForTimeout(7000);

    await page.locator("#confirmButton").click();


    await page.pause();
})