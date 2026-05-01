import test from "@playwright/test";



// test("file- download",async({page})=>{

//     await page.goto("https://the-internet.herokuapp.com/download");
//      const downloadPromise=page.waitForEvent("download")

//     await page.getByRole("link",{name:"PW_Logo.jpg"}).click();
//      const download=await downloadPromise;
//     //  await download.saveAs('resources/downloadfile.png');
    
// })


// -----------------------

test("file- download",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download");
     const downloadPromise=page.waitForEvent("download")

    await page.getByRole("link",{name:"SomeFile.txt"}).click();
     const download=await downloadPromise;
    await download.saveAs('resources/'+download.suggestedFilename());
    
})