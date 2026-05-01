import { BrowserContext, Locator, Page } from "@playwright/test";


export interface BrowserInteraction{

    page:Page;
    context:BrowserContext;

    click(locator:Locator,elementName:string):Promise<void>;

    fill(locator:Locator,data:string,elementName:string):Promise< void>;

    selectDropDown(locator:Locator,label:string,elementName:string): Promise<void>;

    switchToPage(locator:Locator,elementName:string):Promise<Page>;




}