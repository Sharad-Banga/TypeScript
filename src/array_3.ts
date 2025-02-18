interface HUser {
  firstName:string;
  lastName: string;
  age:number;
}

function printt(Husers:HUser[]){
  for(let i=0 ; i< Husers.length ; i++){
    if(Husers[i].age>18){
      console.log(Husers[i].firstName+" "+Husers[i].lastName);
    }
  }
}

const Husers : HUser[] = [
  {
  firstName:"sharad",
  lastName: "banga",
  age:21
},{
  firstName:"sam",
  lastName: "banga",
  age:19
}];

printt(Husers);