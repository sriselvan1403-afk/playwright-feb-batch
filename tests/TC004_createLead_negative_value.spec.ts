import { test, expect } from "@playwright/test";

test("Add contact  lead", async ({ page }) => {
  await page.goto("https://apps.theauto-mate.com/crm/login.php");

  await page.getByRole("textbox", { name: "Username" }).fill("automate.crm");
  await page.getByRole("textbox", { name: "Password" }).fill("test@123");
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.locator("#userDropdownButton").click();
  await page.getByText("automate.crm", { exact: true }).click();

  const fileInput = page.locator("input[name='profile_image']");
  await fileInput.setInputFiles("./resources/PW_Logo.jpg");

  await page.getByText("Upload Photo").click();

});