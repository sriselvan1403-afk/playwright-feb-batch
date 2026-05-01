// []   -array  - To store multiple data in single variable

// let a=[12,34,56,67,89];   
// console.log(a);

// let b=[123,45,"js",34.4556,true];
// console.log(b);
// console.log(typeof(b));  //object

// let c=[];
// c[0]=100;
// c[1]=200;
// c[3]=300;
// console.log(c[3]);


// let d= new Array();   //not recommended
// d[0]=23;
// d[1]=454;
// d[2]="sri";
// console.log(d);

//push  --add value at last
// let num=[1,2,3]
// num.push(4);
// console.log(num);

//pop  - Remove the last value
// let num=[1,2,3];
// num.pop();
// console.log(num);

// unshift  -- add value at frst
// let num=[2,3]
// num.unshift(1);
// console.log(num);

//shift     -- remove the frst value
// let num=[2,3,4];
// num.shift();
// console.log(num);

//lenght
// let coll=["javascript",123,565.76,true];
// let len=coll.length;
// console.log(len);

//includes
// let fruits=["apple","kiwi","orange"];
// let inc=fruits.includes(55);
// console.log(inc);

// let fruits=["apple","kiwi","orange"];
// let inc=fruits.includes("kiwi");
// console.log(inc);

// indexOf
// let company=["Tcs","infosys","Tcs","Cts"];
// console.log(company.indexOf("Tcs"));

// // lastIndexOf
// let company=["Tcs","infosys","Tcs","Cts"];
// console.log(company.lastIndexOf("Tcs"));

//slice
// let num=[23,45,786,"js",true,6788,"jj","aa"];
// let sl=num.slice(3,7);
// console.log(sl);

//splice
// let num=[23,45,86,"js",true,6788,"jj","aa"];

// let spl=num.splice(2,4);
// console.log(num);

//slice,splice
// let num=[23,45,86,"js",true,6788,"jj","aa"];
// console.log(num.slice(1,4));
// console.log(num.splice(2,4));
// console.log(num);

//join
// let sentence=["Feel ","like ","magic "];
// let sentence1=sentence.join(" ");
// console.log(sentence1);

//spread operator
// let a=[20,40,60];
// let b=[30,7i0,90];
// let c=[...a,68,89,56];
// let d=[...a,...b,...c]
// console.log(c);   //20 40 60 68 89 56
// console.log(d);   //20 40 60  30 70 90  20 40 60 68 89 56

// Task:
// Create the array find largest Number
// [4556,676,34,2,125687,23,78]


///for loop

// let arr=["jj",23,78.67,"aa",true];
                  
// for(let i=0 ;i<arr.length;i++){

//     console.log(arr[i]);
// }

//i=0   0<5    arr[i]  arr[0]   --jj
//i=1   1<5            arr[1]   --23
//i=2   2<5             arr[2]  --78.67
//i=3   3<5             arr[3]  --aa
//i=4   4<5             arr[4]  --true
//i=5   5>5    X

//for
// let arr=["jj",23,78.67,"aa",true];

// for(let x in arr){  // - returns the index

//     console.log(` Index - ${x} Value - ${arr[x]}    `);
    
// }

// for(let y of  arr){    //returns value directly

//     console.log(`value - ${y}`);
// }


// ()   
// []
// {}

let arr=["jj",23,78.67,"aa",true];
// console.log(arr);

// console.log(arr[3]);


// console.log("hai" +arr );
// console.log('hai'+arr+' This is array');
// console.log(`hai  ${arr}   this is array `);


// if(){

// }

// for(--------------){

// }
// else{

// }

// Task:
// Create a array and iterate it:
// Its a palindrome or not  -  mom  -palindrome  tester - not a palindrome

// let a=[34,"java",23.45,true];
// console.log(a.includes(23.45));

// stud_Name
// meenu_Tamil=78
// meenu_English=90

// A-Z   a-z   word   

// a=23
// A=23
// num=45
// a1=456
// num2=67
// num_2=77
// aa=34
// m_History=67
// m1_History=45

// camel  


// 23<45  t

// 200>100  t

// 34==56   F

// 56!=90  T

// 234>=567  X

// 234<=567  T










