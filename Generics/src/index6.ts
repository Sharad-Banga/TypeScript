//!  TYPE INFER



//! When we declare generc type , we need to create another type from it by adding generic type
//? example
/* 
    type a<T> = {
      name : T
    }

    type real = a<String>;

*/


//? create a type named ReturnTypeCustom 

type ReturnTypeCustom<T> = T extends ( (...args: any[]) => infer R ) 
                            ? R : never;

function test(){
  return "sharad"
}

type Result = ReturnTypeCustom< typeof test >;

//! typeof test is () => string
//! which matches the -> ( (...args: any[]) => infer R ) 
//! so R become string
//! as condition is true , so the RESULT = R i.e. String