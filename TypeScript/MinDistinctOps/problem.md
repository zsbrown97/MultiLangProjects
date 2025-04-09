## Minimum Number of Operations to Make Elements in Array Distinct
You are given an int array `nums`. You need to ensure that the elements in the array are **distinct**.

To achieve this, remove the first 3 elements of the array. If the array has <3 elements, remove all remaining elements

**Note:** An empty array is considered distinct. As such, the minimum number of operations needed to make the elements in the array distinct

### Example
**Input:** `nums = [1,2,3,4,2,3,3,5,7]`
**Output:**: 2
- In the first operation, we remove the first 3 elements, resulting in `[4,2,3,3,5,7]`
- In the second operation, the next 3 elements are removed, leaving behind `[3,5,7]`. These are distinct elements
Therefore, the answer is 2
