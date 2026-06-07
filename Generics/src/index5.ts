// ! GENERIC CLASS


class Storage<T>{

  private data :T[] = [];

  add(item :T){
    this.data.push(item);
  }

  getAll(){
    return this.data;
  }
}

const user = new Storage<Number>();

user.add(1);
user.add(2);
user.add(3);

console.log(user.getAll())