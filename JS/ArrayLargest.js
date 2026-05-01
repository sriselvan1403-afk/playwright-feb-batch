let numbers=[23 ,45 ,1200 ,89 ,15 ,35,445665];
let largest=numbers[0];

for(let i=1  ; i<numbers.length ;i++){

    if(numbers[i] >  largest){

        largest=numbers[i]; 
    }
}
console.log(largest);

// i=1   1<6      45>23   lar =45
//i=2    2<6      12>45   lar=45
//i=3    3<6      89>45    lar=89
//i=4    4<6      15>89    lar=89
//i=5    5<6      35>89    lar =89