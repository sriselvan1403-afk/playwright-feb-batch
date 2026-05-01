import { BrowserContext, Locator, Page } from "@playwright/test";
import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";

export class Loginpage extends BrowserInteractionImpl {
  userName: Locator;
  password: Locator;
  signin: Locator;

  constructor(page: Page,context:BrowserContext) {
    super(page,context);
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.signin = page.getByRole("button", { name: "Sign In" });
  }

  async enterUserName(data: string): Promise<void> {
    await this.fill(this.userName, data, "username");
  }

  async enterPassword(data: string): Promise<void> {
    await this.fill(this.password, data, "password");
  }

  async clickSignin(): Promise<void> {
    await this.click(this.signin, "click sign-in");
  }
}
