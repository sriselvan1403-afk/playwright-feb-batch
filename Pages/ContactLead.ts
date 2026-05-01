import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";

export class ContactLeadPage extends BrowserInteractionImpl{

    addToContact:Locator;

    constructor(page:Page,context:BrowserContext){
        super(page,context);
        this.addToContact=page.getByRole("link", { name: "Add New Contact" })
    }


    async clickAddNewContact():Promise<Page>{

       return await  this.switchToPage(this.addToContact,"switch to page")

    }
}