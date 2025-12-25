type axa = {
   name : string;
  readonly age: number;
}


const us:axa = {
  name : "jhon",
  age : 21
}

// us.age = 22;
// we cannot change value of readonly
us.name = "sss";