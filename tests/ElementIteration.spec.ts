import {chromium,expect,test} from "@playwright/test";

test("Iterate element",async()=>{

const browser= await chromium.launch({headless:false});
const context=await browser.newContext();
const page=await context.newPage();
await page .goto("https://retail.theauto-mate.com/auth/login");

//login
await page.getByRole("textbox",{name:"Email"}).fill("user@shop.com");//default 30 sec wait while interaction
await page.getByRole("textbox",{name:"Password"}).fill("12345678");
await page.locator("button[type='submit']").click();

//home

//1st approach
// const addToCart=page.getByRole("button",{name:"Add to Cart"})
// await addToCart.last().waitFor({state:"visible"});
// const counts=await addToCart.count();  //30 sec its not working here
// console.log("conuts are :"+counts);  //frst  -0  -->provide external wait -->strict mode violation -->last

// //click all add to carts  - iteration
// //for loop

// for(let i=0 ; i<counts ;i++){

// // await addToCart.last().waitFor({state:"visible"});
// // await page.waitForLoadState("load");
// //  await  expect(addToCart.nth(i)).toBeEnabled();
// //    await expect(addToCart).toHaveCount(counts);

//     addToCart.nth(i).click();
//     await page.waitForTimeout(2000);   //-->last preference  -script execution time increases

// }

//2nd approach   - for using of
const allElements=await page.getByRole("button",{name:"Add to Cart"}).all();

for(let eachElement of allElements){
    await eachElement.click();
    await page.waitForTimeout(2000);

}

// await page.pause();

})

//assertion  --> expect()
//page
//locator
//generic