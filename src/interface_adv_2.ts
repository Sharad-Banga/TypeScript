//implementing interfaces in java script

//diff b/w interface and type is that interface can be implemented by class

interface People{
  name :string;
  age:number;
}

class Manager implements People{
  name : string;
  age : number;

  constructor(name:string , age:number){
    this.name = name;
    this.age = age;
  }
}

const m = new Manager("sharad",222);
console.log(m.age);

