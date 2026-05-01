

class GroceriesItems implements  AmazonProductService  {
    installation(): void {
       console.log(`Grocery - No Installation`);
    }
    damage(): void {
        console.log(`Grocery - damage  `)
       
    }
    refund(): void {
        console.log(`Grocery - No refund`)
       
    }

}
let groceriesItems   = new GroceriesItems();
groceriesItems.installation();
groceriesItems.refund();