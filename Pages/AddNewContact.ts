import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";


export class AddNewContact extends BrowserInteractionImpl{

    name:Locator;
    email:Locator;
    phoneNum:Locator;

    constructor(page:Page,context:BrowserContext){
        super(page,context);
        this.name=page.locator("#contact_name");
        this.email=page.locator("#email");
        this.phoneNum=page.locator("#phone");
    }

    async enterName(name:string):Promise<void>{
       await this .fill(this.name,name,"Name")
    }

    async enterEmail(email:string):Promise<void>{
       await this .fill(this.email,email,"Email")
    }

    async enterPhn(num:string):Promise<void>{
       await this .fill(this.phoneNum,num,"Phn num")
    }

    


}