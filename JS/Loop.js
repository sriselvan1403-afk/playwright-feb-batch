// let a=45;

// if(a%2==0){

//     console.log("It is a even number");
// }

// else{

//     console.log("It is a odd number");
// }

// ------------------------------------------------
//Looping - set of instruction is repeated untill reached the certain condition

//for 
//while
//do while


//for 
//      1                 2              4
// for(initialization  ;  condition  ;  ince/dec){
// //    3
//     stmt
// }


// for(let i=1  ;  i<=5  ; i++){

//     console.log("hai sri");
// }

// // i=1   1<=5  hai sri   i++  i=i+1   1+1  i=2
// // i=2   2<=5  hai sri                 2+1 i=3
// //i=3    3<=5  hai sri                  3+1 i=4
// //i=4    4<=5  hai sri                  4+1  i=5
// //i=5    5<=5  hai sri                  5+1  i=6
// //i=6    6<=5   X

// ---------------------------------------------

// for(let i=1  ;  i<=5  ; i++){

//     console.log(i);
// }

// i=1   1<=5  1   i++  i=i+1   1+1  i=2
// i=2   2<=5  2                 2+1 i=3
//i=3    3<=5  3                  3+1 i=4
//i=4    4<=5    4                 4+1  i=5
//i=5    5<=5  5                 5+1  i=6
//i=6    6<=5   X

// ----------------------------------------

// for(let i=5  ; i>=1 ; i--){

//     console.log(i);
// }

//i=5      5>=1   5     5-1  i=4
//i=4      4>=1   4     4-1  i=3
//i=3      3>=1   3     3-1   i=2
//i=2      2>=1   2     2-1   i=1
//i=1      1>=1    1     1-1  i=0
//i=0      0>=1   X
// --------------------------------------------

//while loop  --->entry check loop

// let a=1;
// while(a<=5){

//     console.log(a);
//     a++;

// }

//-----------------------------------

// //do while  -- exit check loop
// let b=1;

// do{

//     console.log(b);
//     b++;

// }
// while(b<1);    //2<=5

// -------------------------------

// template literal

// for (i=1  ;i<=5 ;i++){

//     console.log(` Its a frst five number  - ${i}`)
// }

//break   --- imediately stop the loop
// for (let i=1  ; i<=10  ;i++ ){

// if(i==5){
//     break;
// }
//     console.log(i)
// }

//continue  - SKip the current iteration
// for (let i=1  ; i<=10  ;i++ ){

// if(i==5){
//     continue;
// }
//     console.log(i)
// }

// -----------------readline-sync  --- to get  value from user
const req=require("readline-sync");

// let a=req.questionInt("Enter any value");

// let b=req.questionInt("enter any value")

// let c=a+b;

// console.log(c);


// let age=req.questionInt("enter your age")

// if(age>=18){
//     console.log("Eligible to vote");
// }
// else{

//     console.log("Not eligible to vote")
// }

// looping
//for 
//while loop
//do while
//break
//continue
//readline sync


for(let i=1  ;i<=50 ;i++){

    if(i==25){
        continue;
    }
console.log(i)
}


// let a=10;
// do{
//     console.log(a);
//     a++;  //a=a+1    10+1  =11
// }

// while(a==10)

//a=10   10!=10  X