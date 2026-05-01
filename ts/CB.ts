import { Seller } from "./CA";

class BuisnessSeller  extends Seller{

    sellProduct(){

        console.log(`${this.name}  - selling bulk items`);
    }


}

let buisnessSeller=new BuisnessSeller("raj","raj mart");
buisnessSeller.sellProduct();
buisnessSeller.addProduct("laptop");

let buisnessSeller1=new BuisnessSeller("Jai","Jai mart");
buisnessSeller1.sellProduct();
buisnessSeller1.addProduct("Honey");