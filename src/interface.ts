
// passing object as argument and defining its type


interface userType{
  "name" : string,
  "age":number
}

let user:userType = {
  "name" : "sharad",
  "age" : 21
}



function car(user: userType){

  console.log("name",user.name);
  
}

car(user);