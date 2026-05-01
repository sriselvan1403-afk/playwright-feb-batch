// How To reverse a String

// test    reverse  - tset


//length 12345
//index  01234

let a="Encapsulation" ;     //olleh
let reverse="";

for(let i=a.length-1; i>=0 ;i--){

    reverse+=a[i];
}
console.log(reverse);

//i=4   4>=0   reverse+=a[i]  reverse= reverse+a[4]   - o  i--    i=3
//i=3   3>=0                  reverse=reverse+a[3]     -ol  i--   i=2
//i=2   2>=0                  reverse=reverse+a[2]     -oll  i--   i=1
//i=1   1>=0                  reverse=reverse+a[1]     -olle  i--   i=0
//i=0   0>=0                  reverse=reverse+a[0]     -olleh  i--   i=-1
//i=-1  -1>=0                   X


