function Delayed(fn: ()=> void){
  setTimeout(fn,1000);
}

Delayed(()=>{
  console.log("hello");
  
});

// type of a function is ()=> void
// type of a int is number
// type of a string is string


//void is written coz fn is not returning anything
//if there is any argument in fn , (a:number) => void