// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

/*
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. 
*/

/*
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/


// with O(n) complexity 

function sortedSquares(A) {
    let result = [];
    // Left and right pointer
    let l = 0;
    let r = A.length - 1;
    // Position to add squared number to A
    let p = r;

    // Add the higher number to the array and then decrease the pointer
    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]))

