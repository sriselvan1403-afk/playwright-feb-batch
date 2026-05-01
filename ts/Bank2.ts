import { IndianBank } from "./Bank1";

class BOI extends IndianBank{


    goldInterest(): void {
        console.log(`Gold Interest is 15%`)
    }


}

let boi=new BOI();
boi.goldInterest();

let indianBank= new IndianBank();
indianBank.goldInterest();