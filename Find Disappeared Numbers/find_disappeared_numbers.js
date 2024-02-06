function findDisappearedNumbers(nums) {
    nums.foreach(el => {
        const n = abs(i) - 1;
        nums[n] = -1 * abs(nums[n])
    });

    let res = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) res.push(i + 1);
    }

    return res;
}