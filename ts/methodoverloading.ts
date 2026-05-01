
// basic - username -password

//method overloading
function  authentication(arg1:string):void;
function  authentication(arg1:string,arg2:string):void;
function  authentication(arg1:string,arg2?:string):void{

  if(arg2){    //username - password
    console.log(`authentication - username  and password`)
  }

  else{
    console.log(`authentication   - token  ${arg1}`)
  }
}
authentication("admin");



