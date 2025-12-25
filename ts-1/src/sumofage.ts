interface xUser {
  name : string;
  age: number;
}

function summ(user1 :xUser , user2:xUser){
  return user1.age+user2.age;
}

const user1 = {
  name:"sharad",
  age : 21
}

const user2 = {
  name :"rahul",
  age : 20
}

const j = summ(user1,user2);
console.log(j);
