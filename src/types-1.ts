
type hUser = {
  name : string;
  age : number;
}

function isLegal(huser:hUser){
  return huser.age>18;
}

const huser={
  name :"sharad",
  age : 21
};

console.log(isLegal(huser));
