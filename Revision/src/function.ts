
function delayedCall(anotherFxn : (a:string)=>void){
  console.log("hiii");
  
    
}

let name = "sharadd";
function greet(name:string){
  console.log("hello");
}


delayedCall(greet);