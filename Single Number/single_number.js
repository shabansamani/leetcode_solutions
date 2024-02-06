function singleNumber(nums) {
    let res = 0;
    nums.foreach(num => {
        res ^= num;
    });
    return res;
}