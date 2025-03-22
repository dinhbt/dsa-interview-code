# Task

Given an array arr[] of n integers and a target value,
the task is to find whether there is a pair of elements in the array whose sum is equal to target.

# Examples:

`
Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.
`

1. Solution nested loop

   - Pair Sum O(n^2) time and O(1) space
   - Loop nested array and sum 2 element and then check value match with target

2. Solution with sorting, binnary search

   - O(n\*log(n)) time and O(1) space
   - Searching element in sorted array would take O(log(n)) time

3. Solution using Hash Set

   - O(n) time and O(n) space
