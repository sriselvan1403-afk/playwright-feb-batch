//abstarct class
//two methods   - implemented , unimplemented

//who extends the abstract class can implement the unimplemeted methods 

 export abstract class Seller{

    shipment:string;
    waranty:string;
    refund:string;


    constructor(shipment:string,waranty:string,refund:string){
        this.shipment=shipment;
        this.waranty=waranty;
        this.refund=refund;

    }

    //umimplemented method
    abstract shipmentMethod():void;

    abstract warantyPeriod():void;

    //implemented method
    cancellation(){

        console.log(`within 24 hrs cancel  - 100% refund`)

    }

}