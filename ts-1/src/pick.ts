
interface Ujer {
  id : number;
  name :string;
  age : number;
  email : string;
  password : string;
}

// ujer is used to add all values of user
// i now want to display info on user on screen but not all , only 
type display = Pick<Ujer,'name'|'age'|'email'>;

function ss(user : display){
  console.log(user.age );
  
}

const uu :display ={
  name :"sharad",
  age : 21,
  email : "saefhow@gmail.com"
}

ss(uu);