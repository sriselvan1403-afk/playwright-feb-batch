import { test } from "@playwright/test";

test("Add Lead", async ({ page, context }) => {
  await page.goto("https://apps.theauto-mate.com/crm/login.php");

  await test.step("enter username ", async () => {
    await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
  });

  await test.step("enter password", async () => {
    await page.getByRole("textbox", { name: "Password" }).fill("test@123");
  });

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByRole("link", { name: "Contacts / Leads" }).click();

  const newPagePromise = context.waitForEvent("page");
  await page.getByRole("link", { name: "Add New Contact" }).click();
  const detailsPage = await newPagePromise;

  await detailsPage.locator("#contact_name").fill("lavanya");
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
});
