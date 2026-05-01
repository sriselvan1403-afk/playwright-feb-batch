//synchronous  --one by one
// console.log("start");
// console.log("middle");
// console.log("end");


//Asynchronous  - parallel
// console.log("start");

// setTimeout(()=>{
// console.log("middle");
// },2000);   //2-sec

// console.log("end");


//promises   -- success   --failure
// promises  -- resolve   --reject

// let promise=new Promise((resolve,reject)=>{
// let success=false;
// if(success){

//     resolve("data fetched successfully");
// }
// else{
//     reject("error while fetching data");
// }
// });

// promise.then((a)=>{
//     console.log(a);
// })

// .catch((b)=>{
//     console.log(b);
// });


// promise
// |
// |
// Cond
// |
// |
// success   -resolve  - then(a)   - c.l(a)

// failure   -reject   - catch(b)   - c.l(b)

//without await&async
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }
//   function getData() {
//   let data = fetchData();  //resolve("Data received");  after 2 sec
//   console.log(data);
// }

// getData();
// console.log("i can execute ");




//with await &async

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }
//  async function getData() {
//   let data =await fetchData();  //resolve("Data received");  after 2 sec
//   console.log(data);
// }

// getData();
// console.log("i can execute ");
