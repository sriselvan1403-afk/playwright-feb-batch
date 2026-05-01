import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";

export class Dashboard extends BrowserInteractionImpl {
  contactAndLead: Locator;

  constructor(page: Page,context:BrowserContext) {
    super(page,context);
    this.contactAndLead = page.getByRole("link", { name: "Contacts / Leads" });

  }

  async clickContact(): Promise<void> {
    await this.click(this.contactAndLead, "contact/Lead");
  }
  
}
