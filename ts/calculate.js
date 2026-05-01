
// function add(a,b){

//     console.log(a+b);
// }
// add(2,true);


// function upperCase(name1){
// console.log(name1.toUpperCase());

// }
// upperCase("sri");
// upperCase(123);



// let brand="ford";

// brand=233


// let personName="sai";
// personName=123;

// console.log(personName.toUpperCase());


let count = 0;
let num = 2;

while (count < 50) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}

//                              if(2)   c=1   num=3
// 2<50    2<3     3%2    1     3       c=2   num=4
// 
