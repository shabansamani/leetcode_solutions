def singleNumber(nums):
    res = 0
    for i in nums:
        res ^= i
    return res