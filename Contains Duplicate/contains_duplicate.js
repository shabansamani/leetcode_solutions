function containsDuplicate(nums) {
    seen = new Set();

    nums.arrays.forEach(element => {
        if(set.has(element)) return true;
        set.add(element);
    });

    return false;
}