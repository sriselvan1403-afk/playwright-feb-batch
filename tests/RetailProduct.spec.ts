import{  test, expect } from "@playwright/test";

//Fixture
// test("Retail product",async({page})=>{

//     // const browser=await chromium.launch({headless:false});
//     // const context= await browser.newContext();
//     // const page = await context.newPage();

// await page.pause();

// })

// --------------------------------------------------

// test("Retail product",async()=>{

//     const browser=await chromium.launch({headless:false});
//     const context1= await browser.newContext();
//     const page1 = await context1.newPage();
//      const page2 = await context1.newPage();

//      await page1.goto("https://retail.theauto-mate.com/products");
//      await page2.goto("https://retail.theauto-mate.com/auth/login");

//     const context2= await browser.newContext();
//     const page3= await context2.newPage();
//      const page4 = await context2.newPage();

//      await page3.goto("https://www.flipkart.com/");
//      await page4.goto("https://www.amazon.in/")
// })

// ------------------------------------------

// test("Retail product",async({page})=>{

//     await page.goto("https://retail.theauto-mate.com/products");

//     await page.getByRole("button",{name:"Next"}).waitFor({state:"visible"});

//     const allProduct=await page.locator("h3[id^='product-title']").all();

//     for(let eachProduct of allProduct){

//        const productTitle= await eachProduct.innerText();
//        console.log(`Product titles -  ${productTitle}`)

//     }
// })

// --------------------------------------------------------------

// test("Retail product",async({page})=>{

//     await page.goto("https://retail.theauto-mate.com/products");

//     await page.getByRole("button",{name:"Next"}).waitFor({state:"visible"});

//     // const allProduct=await page.locator("h3[id^='product-title']").all();

//     // for(let eachProduct of allProduct){

//     //    const productTitle= await eachProduct.innerText();
//     //    console.log(`Product titles -  ${productTitle}`)

//     // }

//     //page assertion
//     // await expect(page,"Expected url should contains products").toHaveURL("https://retail.theauto-mate.com/cart/products");
// //  ignore case  -
//     await expect(page,"Expected url should contains products").toHaveURL(/Products/i);

// })

// --------------------------------------------------------------

test("Retail product",async({page})=>{

    await page.goto("https://retail.theauto-mate.com/products");

    await page.getByRole("button",{name:"Next"}).waitFor({state:"visible"});

    const allProduct=await page.locator("h3[id^='product-title']").all();

    //hard assert - upon failure script will not execute the remaining lines
    // await expect(page,"Expected url should contains products").toHaveURL(/cart-Products/i);

    //soft assert  - upon failure it will execute the correct code
    // await expect.soft(page,"Expected url should contains products").toHaveURL("https://retail.theauto-mate.com/products");
    await expect.soft(page,"Expected url should contains products").toHaveURL(/carts-products/i);


    for(let eachProduct of allProduct){

       const productTitle= await eachProduct.innerText();
       console.log(`Product titles -  ${productTitle}`)

    }
})


