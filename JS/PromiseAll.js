
function promise1(){
    return new Promise((resolve,reject)=>{
        let isPassed=false;
        setTimeout(()=>{
                if(isPassed){
                    resolve("Promise 1 resolved")     //then (var)
                }
                else{
                    reject("Promise 1 rejected")     //catch(var)
                }
        },2000)
    })
}

function promise2(){
    return new Promise((resolve,reject)=>{
        let isPassed=true;
        setTimeout(()=>{
                if(isPassed){
                    resolve("Promise 2 resolved")     //then (var)
                }
                else{
                    reject("Promise 2 rejected")     //catch(var)
                }
        },5000)
    })
}

Promise.all([promise1(),promise2()]).then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})

// promise1().then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })
