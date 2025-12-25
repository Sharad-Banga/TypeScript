
interface add {
  city : string,
  state : string
}

interface SUser {
  name : string,
  age : number,
  address? : add
}

interface Office {
  address : add
}


let sUser: SUser = {
  name : "Sharad",
  age : 21,
  address : {
    city : "hsp",
    state : "Punjab"
  }
}

let office = {
  address : {
    city : "jal",
    state : "Punjab"
  }
}


function print(sUser: SUser){
  console.log(sUser.name);
  console.log(office.address.city);
  
}

print(sUser);