import { test, expect } from "@playwright/test";

test("Delete existing lead", async ({ page }) => {
  await page.goto("https://apps.theauto-mate.com/crm/login.php");

  await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
  await page.getByRole("textbox", { name: "Password" }).fill("test@123");
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByRole("link", { name: "Contacts / Leads" }).click();

  const leadName = "lavanyak";
  const leadRow = page.getByRole("row", { name: leadName });

  await expect(leadRow.first()).toBeVisible();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });



  await leadRow.first().locator("button", { hasText: "Delete" }).click();

  console.log("Lead deleted successfully");
});