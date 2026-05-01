/**
 * Amazon seller - productType ,category, certification,basePrice
 * to avoid repeating the code/ maintainence
 * 
 */

// // seller1
// let productType="mobile";
// let category="electronic";
// let certification=false;
// let basePrice=20000;

// // seller2
// let productType1="Honey";
// let category1="food";
// let certification1=true;
// let basePrice1=500;


// // seller3
// let productType2="Laptop";
// let category2="electronic";
// let certification2=false;
// let basePrice2=50000;

//pascal notation  - each wrod of fst letter should be in capital
//class   - varaibles (property)   -  actions (methods)


// class AmozonSeller{

//      productType:string="mobile";
//     category:string="electronic";
//     certification:boolean=false;
//     basePrice:number=20000;



//     // productDetail(){

//     //     console.log(`seller details: ${this.productType} ${this.category}  ${this.basePrice}`)

//     // }

// }
// //object creation - to acces the variable and its function
// //new <classname>
// //constructor ()
// //object creation
// let amazonSeller=new AmozonSeller();
// // amazonSeller.productDetail();
// // amazonSeller.productDetail();
// // amazonSeller.productDetail();


// ----------------------------------------

// class AmozonSeller{

//      productType:string="mobile";
//     category:string="electronic";
//     certification:boolean=false;
//     basePrice:number=20000;

//     //its a special function
// constructor(){
//     console.log("im constructor")

// }


//     // productDetail(){

//     //     console.log(`seller details: ${this.productType} ${this.category}  ${this.basePrice}`)

//     // }

// }
// //object creation - to acces the variable and its function
// //new <classname>
// //constructor ()
// //object creation
// let amazonSeller=new AmozonSeller();

// ------------------------------------------------

// class AmozonSeller{

//     productType:string;
//     category:string;
//     basePrice:number;
//     inventory:number;

//     //its a special function  - automatically invoked when object is created
//     //constructor  name must be constructor
//     //its optional one
//     //object creation -- value passed

// constructor(sellerProductType:string,sellerCategory:string,sellerBasePrice:number,sellerInventory:number){
//     this.productType= sellerProductType;
//      this.category=sellerCategory;
//     this.basePrice =sellerBasePrice;
//     this.inventory=sellerInventory;
// }



//     productDetail(){

//         console.log(`seller details: ${this.productType} ${this.category}  ${this.basePrice}`)

//     }

// }

// let amazonSeller1=new AmozonSeller("mobile","electronics",20000,1000);
// amazonSeller1.productDetail();

// let amazonSeller2=new AmozonSeller("Honey","food",500,1001);
// amazonSeller2.productDetail();

// let amazonSeller3=new AmozonSeller("laptop","electronics",50000,1002);
// amazonSeller3.productDetail();


/**
 * Purpose of class  - property (variable)  - action (method)
 * object creation   - syntax
 * constructor
 * this keyword
 *
 * 
 */


// ----------------------------------------------

// class AmozonSeller{

//     productType:string;
//     category:string;
//     basePrice:number;
//     readonly sellerName:string;
  

  
// constructor(sellerProductType:string,sellerCategory:string,sellerBasePrice:number,sellerName:string){
//     this.productType= sellerProductType;
//      this.category=sellerCategory;
//     this.basePrice =sellerBasePrice;
//     this.sellerName=sellerName;
    
// }



//     productDetail(){
//         // this.sellerName="yyyy";//

//         console.log(`seller details: ${this.sellerName} ${this.productType} ${this.category}  ${this.basePrice}`)

//     }
// }

// let amazonSeller1=new AmozonSeller("mobile","electronics",20000,"raj");

// amazonSeller1.basePrice=30000;
// amazonSeller1.sellerName="jai";  //cant change bcoz of read only property
// amazonSeller1.productDetail();


// ----------------------Access specifier--------------------
// ------------------public,private, protected-----------------------

class  Bank{

        personAcc=8543256788543;
       readonly personName="jai";
        private amount=50000;

        deposit(){
            this.amount=70000;
            console.log(`${this.amount}`)

        }

}

let bank=new Bank();

// bank.amount=80000;//cant modify bcoz private
// console.log(bank.amount)  //cant accessible
bank.personName;   

bank.deposit();


