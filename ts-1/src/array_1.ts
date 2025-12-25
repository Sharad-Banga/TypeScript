
function findMax(nums:number[]){
  let max = -10000000;

  for(let i = 0 ; i<5 ; i++){
    if(nums[i]>max){
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([1,2,4,6,3,2]));
