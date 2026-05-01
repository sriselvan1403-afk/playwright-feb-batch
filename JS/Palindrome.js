//palindrome

// madam   - madam   - palindrome
// test    -tset     - not a palindrome

//length 12345
//index  01234

let str="jai";
let reverse="";

for(let i=str.length-1 ; i>=0 ;i-- ){

    reverse+=str[i];
}
// console.log(reverse);

if(reverse===str){
    console.log("Its a palindrome" );
}
else{
    console.log("Its not a palindrome");
}



//i=4    4>=0    reverse+=str[i]   reverse=reverse+str[4]  -m   i--  i=3
//i=3    3>=0                      reverse=reverse+str[3]  ma    i-- i=2 
//i=2    2>=0                      reverse=reverse+str[2]  mad   i-- i=1
//i=1    1>=0                      reverse=reverse+str[1]  mada   i-- i=0
//i=0    0>=0                      reverse=reverse+str[0]  madam    i-- i=-1
//i=-1   -1>=0                          X

