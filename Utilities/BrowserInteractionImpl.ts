import { test, Locator, Page, BrowserContext } from "@playwright/test";
import { BrowserInteraction } from "./BrowserInteractions";

export class BrowserInteractionImpl implements BrowserInteraction {
  page: Page;
  context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async click(locator: Locator, elementName: string): Promise<void> {
    await test.step(`click  ${elementName} `, async () => {
      await locator.click();
    });
  }
  async fill(
    locator: Locator,
    data: string,
    elementName: string,
  ): Promise<void> {
    await test.step(`Enter value in  ${elementName} `, async () => {
      await locator.clear();
      await locator.fill(data);
    });
  }

  async selectDropDown(
    locator: Locator,
    label: string,
    elementName: string,
  ): Promise<void> {
    await test.step(`Select dropdown value ${label}  in  ${elementName} `, async () => {
      await locator.selectOption({ label: label });
    });
  }

//   async switchToPage(locator:Locator,elementName:string):Promise<Page |undefined> {
// let newPage;
// await test.step(`clicked on    ${elementName} and switched to page `, async () => {
//          [newPage]= await Promise.all([
//             this.context.waitForEvent("page"),
//             locator.click()
//           ]) ;
           
//         });

//         return newPage;
//   }
   async switchToPage(locator: Locator, elementName: string): Promise<Page> {
     return await test.step(`clicked on    ${elementName} and switched to page `, async () => {
                 const[newPage]= await Promise.all([
                   this.context.waitForEvent("page"),
            locator.click() 
                  ]);
      return newPage;
     })

   }



}
