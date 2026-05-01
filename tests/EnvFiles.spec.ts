// import test from "@playwright/test";
// import process from "node:process";

// test("crm login in" ,async({page})=>{

// // console.log(process.env);  //environment variables
// // console.log(process.env.JAVA_HOME);   //already available

// //terminal export crm_username="automate.crm"   -( mac)
// // $env:crm_username="automate.crm"     (windows)

// console.log(process.env.crm_username);
// console.log(process.env.crm_password);



//  await page.goto("https://apps.theauto-mate.com/crm/login.php");
   
//      await page.getByRole("textbox", { name: "Username" }).fill(process.env.crm_username);
//      await page.getByRole("textbox", { name: "Password" }).fill(process.env.crm_password);
//      await page.getByRole("button", { name: "Sign In" }).click();
   

// })


// --------------------------------------------------------

import test from "@playwright/test";
import process from "process";
import dotenv from "dotenv";
dotenv.config({path:"envFile/qa.env"})

//dotenv    -  npm install dotenv 



test("crm login in" ,async({page})=>{


// console.log(process.env.crm_admin_username);
// console.log(process.env.crm_admin_password);
// console.log(process.env.abc);




 await page.goto("https://apps.theauto-mate.com/crm/login.php");
   
     await page.getByRole("textbox", { name: "Username" }).fill(process.env.crm_admin_username  as string);
     await page.getByRole("textbox", { name: "Password" }).fill(process.env.crm_admin_password as string);
     await page.getByRole("button", { name: "Sign In" }).click();
   

})