//largest number in the array

// let a=[23,45,155,47]     -155

//index  -0123

let arr=[12,45,676,67,34,234,567]
let largest=arr[0]   //12

for(let i=1 ;i<arr.length ;i++){

    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log("largest number in the array :"+largest)
//i=1   1<4   arr[1]>largest     45 >12    largest=45    i++   i=2
//i=2   2<4   arr[2]>largest      67>45    largest= 67   i++   i=3
//i=3   3<4   arr[3]>largest       34>67   largest=67     i++   i=4
//i=4   4<4       X  
