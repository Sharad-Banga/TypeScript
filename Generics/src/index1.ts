
//! ++++ 1

// function car<T>(name:T):T {
//   return name;
// }
// let x = car(12);
// console.log(x)


//! ++++ 2

// function first<T>(arr : T[]):T|undefined {
//   if(arr[0]==0){
//     return arr[0];
//   }
// }
// console.log(first(["0","1","2","3","4"]))


function wrap<T>(value : T) :{data:T}{

  return {data:value}
}

console.log(wrap(2))