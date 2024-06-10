var arr = [5, 4, 3, 2, 1];
var value = 4;
arr = arr.filter(function (n) { return n != value; });
console.log(arr);
