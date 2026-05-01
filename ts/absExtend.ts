import { Seller } from "./abs";

class ElectronicShipment    extends Seller {
    shipmentMethod(): void {
       console.log(`Mode of delivery  ${this.shipment}`);
    }
    warantyPeriod(): void {
        console.log(`Waranty period -${this.waranty}`)
    }

}
let electronicShipment=new ElectronicShipment("truck","2+years","7days");
electronicShipment.shipmentMethod();
electronicShipment.warantyPeriod();
electronicShipment.cancellation();