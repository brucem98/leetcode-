// You are a product manager and currently leading a team to develop a new product. 
// Unfortunately, the latest version of your product fails the quality check. 
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. 
// Implement a function to find the FIRST bad version. 
// You should minimize the number of calls to the API.

//We implement a binary search to find the left most bad version this will take 0(logn)

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

//figure out how to implement API's and the sort