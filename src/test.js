function twoSum(nums, target) {
    for (let i = 0 ; i < nums.length; i++) {
        const searchedNumber = target - nums[i];
        if (searchedNumber < 0) continue;
        const secondNumber = nums.indexOf(searchedNumber, i);
        if (secondNumber != -1) {
            return [i, secondNumber]
        }
    }
    return [0]
};

console.log(twoSum([2,5,11,15],13))