/* Rest params practice
Write a function getMax(...nums) that returns the largest number passed in, 
using rest params (don't use Math.max — loop through manually to practice).*/

function getMax(...nums){
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        if (nums[i]>max){
            max=nums[i];
        }
    }
    return max
}

console.log(getMax(10,20,30))