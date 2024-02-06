function missingNumber(nums) {
    let xor = 0, i = 0;
    while(i < nums.length) {
        xor = xor ^ i++ ^ nums[i];
    }

    return xor ^ i;
}