import { expect } from "@playwright/test";
import test  from "@playwright/test";


test.beforeEach("login - contactleads - add new contact",async({page,context})=>{

    await page.goto("https://apps.theauto-mate.com/crm/login.php");
   
     await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
     await page.getByRole("textbox", { name: "Password" }).fill("test@123");
     await page.getByRole("button", { name: "Sign In" }).click();
   

})





test("crm - create lead fields fill",async({page,context})=>{
  await page.getByRole("link", { name: "Contacts / Leads" }).click();
     
  const newPagePromise = context.waitForEvent("page");
     await page.getByRole("link", { name: "Add New Contact" }).click();
     const detailsPage = await newPagePromise;
     await detailsPage.locator("#contact_name").fill("lavanyak1");
     await detailsPage.locator("#email").fill("Lavanya96@gmail.com");
     await detailsPage.locator("#phone").fill("9789109430");
     await detailsPage.locator("#company").fill("TechM");
   
     await detailsPage.getByRole("radio", { name: "Female" }).check();
     await detailsPage.locator("#status").selectOption("Active");
     await detailsPage.locator("#source").selectOption("Website");
   
     await detailsPage.locator("#lead_score").fill("8");
     await detailsPage.locator("#deals").fill("5");
     await detailsPage.locator("#total_value").fill("4");
   
     await detailsPage.getByRole("checkbox", { name: "CRM" }).check();
     await detailsPage.locator("#priority").selectOption("High");
   
     await detailsPage.locator("#last_contact").fill("2026-02-03");
     await detailsPage.locator("#notes").fill("person details");
   
     await detailsPage.getByRole("button", { name: "Add" }).click();
   
     await expect(detailsPage.getByText("Lead added successfully!")).toBeVisible();
   
     await detailsPage.close();
   
     await expect(page.getByText("lavanyak", { exact: true })).toBeVisible();
   
     console.log("Lead added successfully");

    

})

test("crm - create lead fields fill 2",async({page,context})=>{
  await page.getByRole("link", { name: "Contacts / Leads" }).click();
     
  const newPagePromise = context.waitForEvent("page");
     await page.getByRole("link", { name: "Add New Contact" }).click();
     const detailsPage = await newPagePromise;
     await detailsPage.locator("#contact_name").fill("lavanyak1");
     await detailsPage.locator("#email").fill("Lavanya96@gmail.com");
     await detailsPage.locator("#phone").fill("9789109430");
     await detailsPage.locator("#company").fill("TechM");
   
     await detailsPage.getByRole("radio", { name: "Female" }).check();
     await detailsPage.locator("#status").selectOption("Active");
     await detailsPage.locator("#source").selectOption("Website");
   
     await detailsPage.locator("#lead_score").fill("8");
     await detailsPage.locator("#deals").fill("5");
     await detailsPage.locator("#total_value").fill("4");
   
     await detailsPage.getByRole("checkbox", { name: "CRM" }).check();
     await detailsPage.locator("#priority").selectOption("High");
   
     await detailsPage.locator("#last_contact").fill("2026-02-03");
     await detailsPage.locator("#notes").fill("person details");
   
     await detailsPage.getByRole("button", { name: "Add" }).click();
   
     await expect(detailsPage.getByText("Lead added successfully!")).toBeVisible();
   
     await detailsPage.close();
   
     await expect(page.getByText("lavanyak", { exact: true })).toBeVisible();
   
     console.log("Lead added successfully");

    

})

test("crm - create lead fields fill 3",async({page,context})=>{
  await page.getByRole("link", { name: "Contacts / Leads" }).click();
     
  const newPagePromise = context.waitForEvent("page");
     await page.getByRole("link", { name: "Add New Contact" }).click();
     const detailsPage = await newPagePromise;
     await detailsPage.locator("#contact_name").fill("lavanyak1");
     await detailsPage.locator("#email").fill("Lavanya96@gmail.com");
     await detailsPage.locator("#phone").fill("9789109430");
     await detailsPage.locator("#company").fill("TechM");
   
     await detailsPage.getByRole("radio", { name: "Female" }).check();
     await detailsPage.locator("#status").selectOption("Active");
     await detailsPage.locator("#source").selectOption("Website");
   
     await detailsPage.locator("#lead_score").fill("8");
     await detailsPage.locator("#deals").fill("5");
     await detailsPage.locator("#total_value").fill("4");
   
     await detailsPage.getByRole("checkbox", { name: "CRM" }).check();
     await detailsPage.locator("#priority").selectOption("High");
   
     await detailsPage.locator("#last_contact").fill("2026-02-03");
     await detailsPage.locator("#notes").fill("person details");
   
     await detailsPage.getByRole("button", { name: "Add" }).click();
   
     await expect(detailsPage.getByText("Lead added successfully!")).toBeVisible();
   
     await detailsPage.close();
   
     await expect(page.getByText("lavanyak1", { exact: true })).toBeVisible();
   
     console.log("Lead added successfully");

    

})

test.afterEach("Delete the created lead",async({page})=>{

   
  const leadName = "lavanyak1";
  const leadRow = page.getByRole("row", { name: leadName });

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  await leadRow.first().locator("button", { hasText: "Delete" }).click();


})

