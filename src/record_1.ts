
interface UUser {
  name : string;
  roll : number;
}

type objj = {
  [key : string] : UUser;
}

const uuuuuu : objj = {
  "shaa" : {name : "sharad" , roll : 21}
}

console.log(uuuuuu.shaa);
