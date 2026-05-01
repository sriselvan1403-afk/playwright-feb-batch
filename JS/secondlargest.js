//find out the second largest in array

// [12,45,67,43]      -  frst largest  -67   - second largest - 45

// let arr=[567,12,45,67,43];
// let largest=arr[0];
// let secondLargest=0;
// //              4
// for(let i=1 ;i<arr.length;i++){

//     if(arr[i]>largest){

//         secondLargest=largest;
//         largest=arr[i];
//     }

//     else if(arr[i]>secondLargest  &&  arr[i]!==largest){
//         secondLargest=arr[i];
//     }
// }
// console.log(`first largest  ${largest}`);
// console.log(`Second largest   ${secondLargest}`);
//i=1    1<4    true   arr[1]  45>12   sec=12   lar=45  i++ i=2
//i=2    2<4    true   arr[2]  67>45    sec=45   lar=67  i++ i=3
//i=3    3<4     true  arr[3]  43>67    43> 45  X


// let arr=[567,12,45,67,43];
// function secLar(num){

// let largest=arr[0];
// let secondLargest=0;
// //              4
// for(let i=1 ;i<arr.length;i++){

//     if(arr[i]>largest){

//         secondLargest=largest;
//         largest=arr[i];
//     }

//     else if(arr[i]>secondLargest  &&  arr[i]!==largest){
//         secondLargest=arr[i];
//     }
    
//     return secondLargest;
// }

// }
// let second=secLar(arr);
// console.log(`Second largest   ${second}`);