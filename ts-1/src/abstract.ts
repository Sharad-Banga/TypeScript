
abstract class User{
  name:string;
  constructor(name:string){
    this.name = name;
  }

  abstract greet(): string;

  hello(){
    console.log("hi there");
  }
  // we cant create default fxn in interface like hello fxn here
}

class Employee extends User{
  
  name : string;
  constructor(name :string){
    super(name);
    this.name = name;
  }

  greet(){
    return "hi "+this.name;
  }

}