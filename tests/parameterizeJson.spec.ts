import{test} from "@playwright/test"
//paramerization  - test data  
//external file    - json, csv, excel
import userRoles from "../resources/users.json";


for(let user of userRoles){

test(`CRM- user roles  ${user.testcaseId}`, async({page})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    await page.getByRole("textbox",{name:"Username"}).fill(user.username);

    await page.getByRole("textbox",{name:"Password"}).fill(user.password);

    await page.getByRole("button",{name:"Sign In"}).click();

   
});

}