

var searchInsert = function(nums, target) {
  
  let left = 0, right = nums.length
  while(left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if(nums[mid]===target) {
         return mid
      } else if(nums[mid] > target){
          right = mid
      } else {
          left = mid + 1
      }
  }
  
  return left
};
console.log("target : ",3)
console.log("nums : ",[1,3,5,6])
console.log(searchInsert([1,3,5,6],3))

console.log("target : ",5)
console.log("nums : ",[1,3,5,6])
console.log(searchInsert([1,3,5,6],5))

console.log("target : ",7)
console.log("nums : ",[1,3,5,6])
console.log(searchInsert([1,3,5,6],7))

console.log("target : ",2)
console.log("nums : ",[1,3,5,6])
console.log(searchInsert([1,3,5,6],2))