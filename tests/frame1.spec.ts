import test from "@playwright/test";

// test("Frame",async({page})=>{

//     await page.goto("https://letcode.in/frame");

//     const frameArray=page.frames();

//     console.log("frame count :"+frameArray.length);

//     // for(let eachFrame of frameArray){
//     //     console.log(eachFrame);
//     // }
// //    await  page.getByRole("textbox",{name:"Enter name"}).fill("jai");

//    await page.pause();
// })

// ---------------------------------------------------------------

// test("Frame",async({page})=>{

//     await page.goto("https://letcode.in/frame");

//     const frame=page.frame({name:"firstFr"});  //switch to frame  - 

//     if(frame != null){
//    await  frame.getByRole("textbox",{name:"Enter name"}).fill("jai");
//    await frame.locator("input[name='lname']").fill("ram");


//    await frame.locator("input[name='email']").fill("jai@gmail.com");


//     }

//     // page.frame("firstFr"); //default - name attribute

//     // page.frameLocator("iframe[src='frameui']");
    
//    await page.pause();
// })

// -----------------------------------------------------------

test("Frame",async({page})=>{

    await page.goto("https://letcode.in/frame");

    const parentframe=page.frame({name:"firstFr"});  //parent frame

    if(parentframe != null){
   await  parentframe.getByRole("textbox",{name:"Enter name"}).fill("jai");
   await parentframe.locator("input[name='lname']").fill("ram");

     const childframe=parentframe.frameLocator("iframe[src='innerframe']")//child frame

   await childframe.locator("input[name='email']").fill("jai@gmail.com");

    }
   await page.pause();
})


