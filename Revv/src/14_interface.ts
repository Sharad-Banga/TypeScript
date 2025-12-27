interface Car{
  name :string;
  model : number;
  seats? : number;
  readonly launchDate : string;
}


interface keyValueType {
  [key : string] : number
}

let obj : keyValueType = {
  sharad : 1,
  rahul : 2,
  rana : 3
}


