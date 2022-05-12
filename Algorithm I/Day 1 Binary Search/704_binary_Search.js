// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/*
Pseudo Code:
1. Create variable "left" as a left pointer.
2. Create variable "right" as a right pointer.
3. Create while loop for while left <= right.
    a. Create middle variable by adding right and left /2 and round down.
    b. Create potential match variable with index of middle.
    c. Create condition if potential match = target, return the middle.
    d. Create condition if potential match is greater than target, change right pointer to middle - 1.
    e. Create condition if potential match is less than target, change left pointer to middle + 1.
4. Return -1. 
*/

function search(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while (left <= right){
        let middle = Math.floor((left + right)/2);
        let potentialMatch = nums[middle]
        if (potentialMatch === target){
            return middle;
        } else if (potentialMatch > target){
            right = middle -1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
};

console.log(search([1,3,4,5,7,9,10],7))

function find(isBadVersion) {
    // @param {integer} n Total versions
    // @return {integer} The first bad version
    
    return function(n) {
        // Min left start is 1
        let left = 1, right = n
        while(left < right) {
            const mid = left + Math.floor((right-left)/2)
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    };
};