import {test} from "@playwright/test";
import {parse} from "csv-parse/sync";
import fs from "fs";

//npm install csv-parse
const userRole:any[]=parse(fs.readFileSync("resources/User.csv"),{
    skip_empty_lines:true,
    columns:true
});

for(let user of userRole){

test(`CRM- user roles -${user.TESTCASE_ID}`, async({page})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    await page.getByRole("textbox",{name:"Username"}).fill(user.USERNAME);

    await page.getByRole("textbox",{name:"Password"}).fill(user.PASSWORD);

    await page.getByRole("button",{name:"Sign In"}).click();

   
});
}