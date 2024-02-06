def findDisappearedNumbers(nums):
    for i in nums:
        n = abs(i) - 1
        nums[n] = -1 * abs(nums[n])
    
    res = []
    for i in range(len(nums)):
        if nums[i] > 0:
            res.append(i + 1)
    
    return res