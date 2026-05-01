// import test from "@playwright/test";


// test.beforeAll("Before All Hooks ",async()=>{

//     console.log("-------  Before All   --------")

// })

// test("test-1",async()=>{

//     console.log("^^^^   test -1   ^^^^^")

// })

// test("test-2",async()=>{

//     console.log("^^^^   test -2   ^^^^^")

// })


// test.afterAll("After All Hooks ",async()=>{

//     console.log("-------  After All   --------")

// })

// ----------------------------------------------------------
// import test from "@playwright/test";
// runs before all the test  - run once

// test.beforeAll("Before All Hooks ",async()=>{

//     console.log("-------  Before All   --------")

// })

//before each  - runs before every test  - run count depends on num of test
// test.beforeEach("Before each ",async()=>{

//     console.log("before each");
// })

//after each - runs after every test  - run count depends on num of test
// test.afterEach("after each ",async()=>{

//     console.log("after each");
// })

// test("test-1",async()=>{

//     console.log("^^^^   test -1   ^^^^^")

// })

// test("test-2",async()=>{

//     console.log("^^^^   test -2   ^^^^^")

// })

//run after the test   - run once
// test.afterAll("After All Hooks ",async()=>{

//     console.log("-------  After All   --------")

// })

// -----------------------------------------

import test from "@playwright/test";


test.beforeEach("Before each ",async()=>{
//login
//contact/lead
//add new contact
    console.log("before each");
})


test.afterEach("after each ",async()=>{

    console.log("after each");
})

test("CRM - create lead valid name",async({page})=>{

   //create lead----------
   
   //switch to window  fill the req field   --- valid
   //add
   //lead added successfully

})


test("CRM - create lead valid email",async({page})=>{

   //create lead----------
  
   //switch to window  fill the req field   --- invalid
   //add
   //lead added successfully

})

test("CRM - create lead  valid phn num",async({page})=>{

   //create lead----------
 
   //switch to window  fill the req field   --- empty
   //add
   //lead added successfully

})

test("test-2",async({page})=>{

    //delete lead
   

})


