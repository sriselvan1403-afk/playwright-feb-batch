//basic function
// function detail(){
// console.log("Hai sri");
// console.log("Hai jai");
// console.log("Hai ram");
// console.log("Hai sai");

// }
// detail();



// function add(a,b){  //parameters
// console.log(a+b);
// }
// add(3,5);
// add(10,20);



// function add(){  
//     let a=20;
//     let b=40;
// console.log(a+b);
// }
// add();
// add();

//reusability  - maintainence
// function personDetails(name,address){

//     console.log(`name is ${name}  address is ${address}`)
// }

// personDetails("sri","chennai");
// personDetails("jai","Trichy");
// personDetails("ram","mumbai");

//To calulate gst   price*0.18 =total

// function calulateGst(amount){
//         let gst=amount*0.18;
//         console.log(gst);
// }
// calulateGst(1000);     //180  
// calulateGst(5000);     //900
// calulateGst(50000);    //9000

//  function calulateGst(amount){
//         let gst=amount*0.18;   
//         return gst;
// }

// let price=10000;
// let gstAmount= calulateGst(price)

// console.log("Price :"+price);
// console.log("Gst 18% :"+gstAmount);
// console.log("Total is : "+(price+gstAmount));


// function percentage(sum,count){
//     per=sum/count;
//     return per;
// }

// console.log(percentage(400,5));   
// console.log(percentage(500,5));
// console.log(percentage(454,5));

// let a=percentage(455,5);
// console.log(a);


//Gst calculate without return

// function productPrice(p1,p2,p3){
//  const price=p1+p2+p3;
//  console.log(`Product price : ${price}`);
//  return price;
// }

// function calculateGst(price){
// const gst=price*0.18;
// console.log(`Gst  amount is: ${gst}`);
// return gst;

// }

// function totalPrice(price,gst){
//     const total=price+gst;
//     console.log(`Total amount is :  ${total}  `)
// }


// let price1=productPrice(1000,2000,3000);  //return 6000
// let gst=calculateGst(price1);
// totalPrice(price1,gst);

//Basic function

// function fname(){
//     console.log("hai sri");
// }
// fname();

//Anonymous function  - nameless function

// let lable1=function (){
//     console.log("hai meenu");
// }

// lable1();

// let lable2=function (a,b){
//     console.log(`sum of two : ${a+b}`);
// }

// lable2(2,5);

//Arrow function

// let arr=()=>{
// console.log("hai jai");
// }

// arr();

// let arr1=(name,address)=>{
//     console.log(`name is :${name} address is : ${address}`);
// }
// arr1("meenu","Chennai");

//call back function   eg.1

// function printName(name){
//     console.log(`My name is : ${name}`);
// }

// function personDetail(name1,callback)
// {
//     printName(name1);
// }

// personDetail("sri",printName);


// eg.2

// function output(result){
//     console.log(`Result is :${result}`);
// }
//                 // 2,3,output(result)
// function calculate(a,b,res)
// {
// const value =a+b;
// res(value);
// }

// calculate(2,3,output)

// function  print(name,address){
//     console.log(`Detail is name:${name} address : ${address}`);
// }

// function  print1( name1,address1, det){   //det =print(name,address)
 
//     let n=name1;
//     let a=address1;
//     det(n,a);


// }
// print1("jai","Mumbai",print)
// print1("Ram","Chennai",print)


// Task:
// calculate gst with return
// call back function explain
// call back example with definition
// Local & global variable  with example

//object     var ={key:value}


// let detail={
//     name1:"sai",
//     age:23,
//     Gender:"Male",
//     address:"chennai",
//     district:{
//         d1:"Trichy",
//         d2:"Thanjavur",
//         d3:"Kumbakonam"
//     }
// }

// console.log(detail)
// console.log(detail.address);
// console.log(detail.age);
// console.log(detail.district.d2);

// console.log(Object.keys(detail));
// console.log(Object.values(detail));

