//parent class
export class Seller{

    // private name:string;
    protected name:string;
    storeName:string;

    constructor(name:string,storeName:string){
        this.name=name;
        this.storeName=storeName;
        
    }

    addProduct(product:string){

        console.log(`${product}  added by  ${this.name} `)
    }

}
