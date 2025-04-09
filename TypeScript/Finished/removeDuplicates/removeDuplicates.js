function removeDuplicates(nums) {
    var arr = nums;
    var size = 0;
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] == nums[i + 1]) {
            nums.splice(i, 1);
        }
        size++;
    }
    console.log(arr);
    return size;
}
var test1 = [1, 1, 2];
var test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(test1));
console.log(removeDuplicates(test2));
