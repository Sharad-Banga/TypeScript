
interface Ujer {
  id : number;
  name :string;
  age : number;
  email : string;
  password : string;
}

// ujer is used to add all values of user
// i now want to display info on user on screen but not all , only 
type d = Pick<Ujer,'name'|'age'|'email'>;
type dd = Partial<d>;

function sss(user : dd){
  console.log(user.age );
  
}


sss({
  name :"sharad",
  age : 21
}
);