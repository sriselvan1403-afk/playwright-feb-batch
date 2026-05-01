import {test, chromium } from "@playwright/test";
import { TIMEOUT } from "node:dns";

// test("Retail -Add to cart count",async()=>{

//   const browser= await chromium.launch({headless:false});
//   const context= await browser.newContext();
//  const page=await context.newPage();

//  await page.goto("https://retail.theauto-mate.com/products");

//  const addToCart=page.getByRole("button",{name:"Add to Cart"})

// // const allElems=await page.getByRole("button",{name:"Add to Cart"}).all();
// // const counts=await page.getByRole("button",{name:"Add to Cart"}).count();
// // console.log(allElems);
// // console.log(counts)


// //No interaction - count,all  - pw will not wait for the element to display
// console.log(await addToCart.all())  //[]
//  console.log(await addToCart.count())  //0

//  await page.pause();
// })


// -------------------------------------------------

// test("Retail -Add to cart count",async()=>{

//   const browser= await chromium.launch({headless:false});
//   const context= await browser.newContext();
//  const page=await context.newPage();

//  await page.goto("https://retail.theauto-mate.com/products");

//  const addToCart=page.getByRole("button",{name:"Add to Cart"});
//  await page.locator("input[id='search-input']").fill("headphone");

// //- Interact with an element = pw will wait for defualt time of 30 secs and then interact
// //No interaction - count pw will not wait for the element to display
//  console.log(await addToCart.count())  //1

// })

// -------------------------------------------------------
// test("Retail -Add to cart count",async()=>{

//   const browser= await chromium.launch({headless:false});
//   const context= await browser.newContext();
//  const page=await context.newPage();

//  await page.goto("https://retail.theauto-mate.com/products");

// // const addToCart=page.getByRole("button",{name:"Add to Cart"}).waitFor({state:'visible',timeout:5000})
// const addToCart=page.getByRole("button",{name:"Add to Cart"});
// await addToCart.waitFor({state:'visible',timeout:10000});

//  console.log(await addToCart.count());
 

// })

// --------------------------------------------------------------
// test("Retail -Add to cart count",async()=>{

//   const browser= await chromium.launch({headless:false});
//   const context= await browser.newContext();
//  const page=await context.newPage();

// //Login
// await page.goto("https://retail.theauto-mate.com/auth/login");
// await page.getByPlaceholder("you@example.com").fill("user@shop.com");
// await page.getByRole("textbox",{name:"Password"}).fill("12345678");
// await page.locator("button[type='submit']").click();


//  //Home
// // // const addToCart=page.getByRole("button",{name:"Add to Cart"}).waitFor({state:'visible',timeout:5000})
// await page.getByRole("button",{name:"Add to Cart"}).nth(2).click();
// // // await addToCart.waitFor({state:'visible',timeout:10000});  -- no need to provide externally

//  await page.pause();
// })

// ------------------------------------------------------------

test("Retail -Add to cart count",async()=>{

  const browser= await chromium.launch({headless:false});
  const context= await browser.newContext();
 const page=await context.newPage();

//Login
await page.goto("https://retail.theauto-mate.com/auth/login");
await page.getByPlaceholder("you@example.com").fill("user@shop.com");
await page.getByRole("textbox",{name:"Password"}).fill("12345678");
await page.locator("button[type='submit']").click();


 //Home
// // const addToCart=page.getByRole("button",{name:"Add to Cart"}).waitFor({state:'visible',timeout:5000})
const addToCart= page.getByRole("button",{name:"Add to Cart"}).last();  
await addToCart.waitFor({state:'visible'}); // -- no need to provide externally
console.log(await addToCart.count());
 await page.pause();
 
})

