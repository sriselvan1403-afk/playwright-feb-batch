// import { test as base } from "@playwright/test";
import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";
import { Loginpage } from "../Pages/LoginPage";
import { Dashboard } from "../Pages/Dashboard";
import { ContactLeadPage } from "../Pages/ContactLead";
import { AddNewContact } from "../Pages/AddNewContact";
import{test}from "../Utilities/crmFixture";

//custom fixture


test("Add Lead", async ({ page,context,login }) => {
  // await page.goto("https://apps.theauto-mate.com/crm/login.php");


// await test.step("enter username ",async()=>{
//   await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
// })

// await test.step("enter password" ,async()=>{
//   await page.getByRole("textbox", { name: "Password" }).fill("test@123");

//   })

//   await test.step("enter sign in button" ,async()=>{
//   await page.getByRole("button", { name: "Sign In" }).click();
//   })


//------------browser interaction interface   -  implements in one class-----------------
//1.BrowserInteraction
//2.BowserInteractionImpl
// ------------------------------------------------------------

// const  browserInteraction=new BrowserInteractionImpl();

// const user=page.getByRole("textbox", { name: "Username" });
// await browserInteraction.fill(user,"automate.crm","UserName entered");

// const pass=page.getByRole("textbox", { name: "Password" });
// await browserInteraction.fill(pass,"test@123","password");

// const sigin=page.getByRole("button", { name: "Sign In" });
// await browserInteraction.click(sigin,"click sign-in");

// -------POM--------------- Page object model ---Create file for each page --------------------
//Login page  -file
//DashBoard    -file
//Contact Lead    - file

// const loginPage=new Loginpage(page);
// await loginPage.enterUserName("automate.crm");
// await loginPage.enterPassword("test@123");
// await loginPage.clickSignin();

// const dashboard=new Dashboard(page);
// await dashboard.clickContact();

// const contactLeadPage=new ContactLeadPage(page);
// await contactLeadPage.clickAddNewContact();

// ----------------------------------------------------------

// const loginPage=new Loginpage(page,context);
// await loginPage.enterUserName("automate.crm");
// await loginPage.enterPassword("test@123");
// await loginPage.clickSignin();

const dashboard=new Dashboard(page,context);
await dashboard.clickContact();

const contactLeadPage=new ContactLeadPage(page,context);
const newPage1=await contactLeadPage.clickAddNewContact();

const addNewContact=new AddNewContact(newPage1,context)

// await addNewContact.enterName("Jai");
// await addNewContact.enterEmail("jai@gmail.com");
// await addNewContact.enterPhn("87654356789");

//fakers  - L


await addNewContact.enterName("Jai");
await addNewContact.enterEmail("jai@gmail.com");
await addNewContact.enterPhn("87654356789");





})