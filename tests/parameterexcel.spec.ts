import test, { expect } from "@playwright/test";
//test data from excel
//xlsx
import * as type from "xlsx";
//          variablename

//     variable
const workbook=type.readFile("resources/Userex.xlsx");  //
const sheet=workbook.Sheets[workbook.SheetNames[0]];
const userRoles:any[]=type.utils.sheet_to_json(sheet);

for(let user of userRoles ){

test(`CRM- user roles -${user.Testcase_Id}`, async({page})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    await page.getByRole("textbox",{name:"Username"}).fill(user.UserName);

    await page.getByRole("textbox",{name:"Password"}).fill(user.Password);

    await page.getByRole("button",{name:"Sign In"}).click();

    await expect.soft(page).toHaveTitle(/Dashboard/);   

   
});
}