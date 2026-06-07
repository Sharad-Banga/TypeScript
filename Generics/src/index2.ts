
type ApiResponse<T> = {
  name : string,
  data : T
}


let obj : ApiResponse<number> ={
  name :"sharad",
  data : 1
}


//! CREATE A TYPE WITH GENERIC , AND WRITE THE TYPE OF GENERIC WHEN CALLING IT 
