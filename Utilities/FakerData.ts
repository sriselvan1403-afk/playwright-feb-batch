
import {faker} from "@faker-js/faker";

export class FakerData{

    static personName():string{
        return faker.person.fullName()
    }

    static PersonEmail():string{
        return faker.internet.email()
    }


   

}