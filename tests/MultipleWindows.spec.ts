// import test from "@playwright/test";


// test("Multiple-windows",async({page,context})=>{

//     page.goto("https://www.flipkart.com/");

//    const search= page.getByRole("textbox",{name:"Search for Products, Brands and More"});

//    search.fill("iphone");

//    search.press("Enter");


//    const newPagePromise=context.waitForEvent("page");//listent to the  new page appear

//    await page.getByText("Apple iPhone 16 (Black, 128 GB)").click();  //page1 page2

//    const newPage=await newPagePromise;

//    console.log("parent window title"+await page.title());  //parent window
//    console.log("child window title "+await newPage.title()); //child window

//    //child page interaction
//    await newPage.locator("(//div[text()='Selected Color:']/parent::div/following-sibling::div//a)[2]").click();
   
//      await page.bringToFront();
//    //parent window interaction
//   await search.clear();
//   await search.fill("samsung");
//   await search.press("Enter");

//   await newPage.bringToFront();


//    await page.pause();

// })

// -----------------------------------------------------------
import test from "@playwright/test";
test("Multiple-windows",async({page,context})=>{

    page.goto("https://www.flipkart.com/");

   const search= page.getByRole("textbox",{name:"Search for Products, Brands and More"});

   search.fill("iphone");

   search.press("Enter");
   
//approach1
  //  const newPagePromise=context.waitForEvent("page");//listent to the  new page appear

  //  await page.getByText("Apple iPhone 16 (Black, 128 GB)").click();  //page1 page2

  //  const newPage=await newPagePromise;

//approach2
const [newPage]=await Promise.all([context.waitForEvent("page"),
   page.getByText("Apple iPhone 16 (Black, 128 GB)").click()]);


   console.log("parent window title"+await page.title());  //parent window
   console.log("child window title "+await newPage.title()); //child window

   //child page interaction
   await newPage.locator("(//div[text()='Selected Color:']/parent::div/following-sibling::div//a)[2]").click();
   
     await page.bringToFront();
   //parent window interaction
  await search.clear();
  await search.fill("samsung");
  await search.press("Enter");

  await newPage.bringToFront();


   await page.pause();

})