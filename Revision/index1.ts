function Aa(fn:()=>void){
  fn();
  console.log("red");
  
}

Aa(function(){
  console.log("hello");
  
})