// import test from "@playwright/test";
// import path from "path";


// test("File-upload",async({page})=>{

//     await page.goto("https://practice.expandtesting.com/upload");

//     const fileUpload= page.getByTestId("file-input")

//     // await fileUpload.setInputFiles("C:/Users/Windows/Downloads/PW_Logo.jpg"); //local root - not recommended

// //    await  fileUpload.setInputFiles("resources/PW_Logo.jpg");  //project- new folder

// //    fileUpload.setInputFiles(path.join(__dirname, 'abc.jpg'));  //test folder - file

//      fileUpload.setInputFiles(path.join(__dirname, '../resources/PW_Logo.jpg')); //universal - windows,linux,mac

//     await page.pause();
   
// })

// test.only("file upload - without type file",async({page})=>{

// await page.goto("https://the-internet.herokuapp.com/upload");

// const fileChooserPromise=page.waitForEvent("filechooser")

// page.locator("#drag-drop-upload").click();

// const fileUpload=await fileChooserPromise;

// fileUpload.setFiles(path.join(__dirname,'../resources/PW_Logo.jpg'));

// await page.pause();

// })


// --------------------------------------------------------

import test from "@playwright/test";
import path from "path";


test("File-upload",async({page})=>{

    await page.goto("https://practice.expandtesting.com/upload");

    const fileUpload= page.getByTestId("file-input")

    // await fileUpload.setInputFiles("C:/Users/Windows/Downloads/PW_Logo.jpg"); //local root - not recommended

//    await  fileUpload.setInputFiles("resources/PW_Logo.jpg");  //project- new folder

//    fileUpload.setInputFiles(path.join(__dirname, 'abc.jpg'));  //test folder - file

     fileUpload.setInputFiles(path.join(__dirname, '../resources/PW_Logo.jpg')); //universal - windows,linux,mac

    await page.pause();
   
})

test.only("file upload - without type file",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");

// const fileChooserPromise=page.waitForEvent("filechooser")

// page.locator("#drag-drop-upload").click();

// const fileUpload=await fileChooserPromise;


const [fileUpload]=await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("#drag-drop-upload").click()]);


fileUpload.setFiles(path.join(__dirname,'../resources/PW_Logo.jpg'));

await page.pause();

})