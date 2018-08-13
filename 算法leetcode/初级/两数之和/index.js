/* 
# 要求

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

# 示例:

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15],
    target = 9;


/* var twoSum = function(nums, target) {
    let length = nums.length,
        arr = [];
        nums.forEach((ele,index) => {
            for(let i=index+1;i<length;i++){
                if(target==(nums[i]+nums[index])){
                    arr = [i,index];
                }
            }
        });
        return arr;
}; */

var twoSum = function (nums, target) {
    let length = nums.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 1; j < length; j++) {
            if (target == (nums[i] + nums[j])) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target))



