interface Car<T> {
  name : string;
  model : number;
  data : T
}

const jaguar : Car<{color : string}> = {

  name : "jaguar e",
  model : 2021,
  data : {
    color : "green"
  }
}