// let lang="java script";

// let lang1=lang.toUpperCase();

// console.log(lang1);

// let lang="JAVA SCRIPT";
// let lang1=lang.toLowerCase();
// console.log(lang1);

// let a="     welcome to my class    ";
// let b=a.trim();
// console.log(b);

// let a="     welcome to my class    ";
// let b=a.trimStart();
// console.log(b);

// let a="     welcome to my class    ";
// let b=a.trimEnd();
// console.log(b);

// let js="This javascript class is about javascript ";
// let js1=js.replace("javascript","js");
// console.log(js1);

// let js="This javascript class is about javascript ";
// let js1=js.replaceAll("javascript","js");
// console.log(js1);

// let a="Feel the magic";
// let x=a.includes("magic")
// console.log(x);

// let lang="java script";
// let len=lang.length;
// console.log(len);

// let lang="Encapsulation";
// console.log(lang.charAt(6));    //index value  char return
// console.log(lang.charAt());    //frst char
// console.log(lang.charAt(lang.length-1))    

// let lang ="java script";
// let ind=lang.indexOf("a");
// console.log(ind);

// let lang ="java script";
// let ind=lang.lastIndexOf("a");
// console.log(ind);

// let a="dec25- feb26 -mar23 -jan12";
// let b=a.split("-");
// console.log(b)

// let lang="java script";
// console.log(lang.substring(0,6));
// console.log(lang.substring(0));
// console.log(lang.substring(2));
// console.log(lang.substring(2,8));
// console.log(lang.substring(6,0));


// Task:
// To reverse the String;

// company="Auto-Mate"


// output=etaM-otuA











               
// let str = "hello";
// let reversed ="";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);


// let str = "madam";
// let reversed ="";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// if (reversed===str){
//     console.log("Its a palindrome");
// }


//
let a=[23,100,67,12];
let largest=a[0];
// let secondLargest=0;

for(let i=1 ;i<=a.length;i++){

       
    if(a[i]>largest){
        // secondLargest=largest;
        largest=a[i];  //100
    }

}
console.log(largest);
// console.log(secondLargest);


