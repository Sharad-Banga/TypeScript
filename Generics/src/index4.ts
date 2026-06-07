// *! WITHOUT GENERIC CONSTRAINTS

/* 
  function wrap<T>(val:T):void{
    console.log(val.length)  // *! it will give error
  }
  wrap(2) 
*/


//! T must be the one which have length prop . exmple : string , arr

/* function wrap<T extends {length:number}>(val:T):void{
    console.log(val.length)
}

wrap("1") */


//! a and b must be objects
/* function merge<T extends object, U extends object>(
  a: T,
  b: U
){

}

merge({},{}) */


//! keyof 

/* type obj = {
  name : string,
  age : number
}
type o = keyof obj */ //? "name" || "age"


function car<T, K extends keyof T>(a:T,b:K):void{
     console.log(a,b);
}

let a= {
  name : "sharad"
}

car(a,"name");

