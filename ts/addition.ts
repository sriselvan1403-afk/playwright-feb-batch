// let brand="ford";

// brand=100;


//for compile    - tsc  <filename>   js create
// npx tsx filename

// function addition(a:number,b:number){

//     console.log(a+b);
// }
// addition(3,5);


// let batch:boolean=true;


// function addition(a:number,b:number):number{

//     // console.log(a+b);
//     return a+b;
// }
// addition(3,4);


// function addition(a:number,b:number):number{

//     // console.log(a+b);
//    return a+b;
// }
// addition(3,4);


// -------------------------------------------------
//array   multiple values [ string,number,mixed]
// any
// unknown
//tuple
// object

// optional parameter
// default value of a parameter

// never
// union

// type alias
// intersection

// enum


// let batch :string ="feb2026";



//array
// let names:string[]=["jai", "ram","sai" ];  //string

// let name1:number[]=[23,45,567 ];  //number

// let name2:any[]=["jai", 34,true];  //any allow all type of data

//any
// let result:any="success";
// // result=200;

// console.log(result.toUpperCase());



//unknown
// let result1:unknown="success";
// result=200;
// if(typeof result1 =="string"){
// console.log(result1.toUpperCase());
// }


////tuple  -  order of element type is declared
// fixed num of elements as well as the type variable
// let person:[string ,number,string]=["jai",45,"gg"];

//object
// let details={
//     name:"jai",
//     age:23,
//     city:"chennai"
// }

 

// let details1:{name:string,age:number,city:string}={
//     name:"ram",
//     age:23,
//     city:"chennai"
// }

//optional  --> ?
// function detail(name1:string,id?:number){

//     console.log(`${name1}    ${id}`);
// }
// detail("jai");


//default value of a parameter
// function detail(name1:string,id:number=344){

//     console.log(`${name1}    ${id}`);
// }
// detail("jai",222);
// detail("jai");


// function add(a:number,b:number){
//     console.log(a+b)
// }

// add(2,34);

// ----------------------------
//never   -Throws an error  / keeps working without stoping
// function crash():never{
//     throw new Error("Something went wrong");
// }

// function forever():never{
//     while(true){
//         console.log("still working...............")
//     }
// }

// --------------------------------------------
// union  - either this or that   |

// let  status1:string | boolean="pass";


// function testResult(status2:string|boolean){

//     console.log(`${status2}`)
// }
// testResult("pass");
// testResult(false);
// testResult(100);   //  X error

// let result:"pass"|100    //we can also fix a value
// result=100;
// result="pass";

// result="fail"   //x error

// -----------------------------------------
//type alias    - to repeat the pattern

// let productDetail:{

//      productName:string,
//      productCategory:string,
//      price:number

// }

// productDetail={
//     productName:"laptop",
//     productCategory:"electronics",
//     price:80000
// }


// let customerInvoice:{
//       productName:string,
//      productCategory:string,
//      price:number

// }

// customerInvoice={
//     productName:"laptop",
//     productCategory:"electronics",
//     price:80000
// }


// type productTemplate={

//      productName:string,
//      productCategory:string,
//      price:number

// }

// let productDetail:productTemplate={
//     productName:"laptop",
//     productCategory:"electronics",
//     price:80000
// }



// let customerInvoice:productTemplate={
//     productName:"laptop",
//     productCategory:"electronics",
//     price:80000
// }

// -------------------------------------------------

//Intersection     -  &     

// type product={
//     productName:string,
//     productCategory:string,
//     price:number
// }

// type sellerDetail={
//     sellerName:string,
//     sellerAddress:string,
// }

// let customerInvoice3:product  & sellerDetail;

// customerInvoice3={
//     productName:"mobile",
//     productCategory:"electronics",
//     price:50000,
//     sellerName:"Raj",
//     sellerAddress:"Mumbai"
// }

// ----------------------------------------------

//enum
// enum browser{
//     "CHROMIUM",
//     "WEBKIT",
//     "FIREFOX"
// }


// function launch(browserName:browser){

//     if(browserName==browser.CHROMIUM){
//         console.log("launch chromium");
//     }
//      else if(browserName==browser.FIREFOX){
//         console.log("launch firefox");
//     }
//     else  if(browserName==browser.WEBKIT){
//         console.log("launch webkit");
//     }
// }
// launch(browser.FIREFOX);

// --------------------


// let personName="sai";
// personName=123;

// console.log(personName.toUpperCase());

// function add(a:number,b:number):void{
//     // return a
// }
// add(2,3);


// -------------------------------------------------------



