import{test} from "@playwright/test"
//paramerization
test.describe.serial("CRM- user role  -- valid",()=>{   //based on the scenerio

test("CRM- user roles" , async({page})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    await page.getByRole("textbox",{name:"Username"}).fill("automate.crm");

    await page.getByRole("textbox",{name:"Password"}).fill("test@123");

    await page.getByRole("button",{name:"Sign In"}).click();

    await page.pause();

});

test("CRM- user roles1" , async({page})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");

    await page.getByRole("textbox",{name:"Username"}).fill("automate.user");

    await page.getByRole("textbox",{name:"Password"}).fill("test@123");

    await page.getByRole("button",{name:"Sign In"}).click();

    await page.pause();

});




})






