import test from "@playwright/test";

test("DropDown",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const dropDown=page.getByRole("combobox",{name:"Country"});

dropDown.selectOption({value:"australia"}) //default value attribute

await page.waitForTimeout(2000);

dropDown.selectOption({label:"India"})

await page.waitForTimeout(2000);

dropDown.selectOption({index:1});

//gender
await page.locator("#female").check();

await page.getByRole("checkbox",{name:"Tuesday"}).check();

page.getByRole("listbox",{name:"Colors"}).selectOption(["red","blue","green"]);

await page.locator("#datepicker").fill("25/03/2026");

await page.locator("#txtDate").fill("27/03/2026");

await page.locator("#start-date").fill("27/03/2026 ")


await page.pause();





})