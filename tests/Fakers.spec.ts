import { BrowserInteractionImpl } from "../Utilities/BrowserInteractionImpl";
import { Loginpage } from "../Pages/LoginPage";
import { Dashboard } from "../Pages/Dashboard";
import { ContactLeadPage } from "../Pages/ContactLead";
import { AddNewContact } from "../Pages/AddNewContact";
import{test}from "../Utilities/crmFixture";
import {faker} from"@faker-js/faker";
import { FakerData } from "../Utilities/FakerData";


test("Add Lead", async ({ page,context,login }) => {
const dashboard=new Dashboard(page,context);
await dashboard.clickContact();

const contactLeadPage=new ContactLeadPage(page,context);
const newPage1=await contactLeadPage.clickAddNewContact();

const addNewContact=new AddNewContact(newPage1,context)

//Fakers

// const fullName=faker.person.fullName();
// const emailId=faker.internet.email();

// let fakerData=new FakerData()
await addNewContact.enterName(FakerData.personName());
await addNewContact.enterEmail(FakerData.PersonEmail());
await addNewContact.enterPhn("87654356789");

// await newPage1.pause();
})
