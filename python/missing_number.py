def missingNumber(nums):
    result, i = 0

    while i < len(nums):
        result ^= i ^ nums[i]
        i += 1
    
    return result
