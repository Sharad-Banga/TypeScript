function Delayed(fn: ()=> void){
  setTimeout(fn,1000);
}

Delayed(()=>{
  console.log("hello");
  
});