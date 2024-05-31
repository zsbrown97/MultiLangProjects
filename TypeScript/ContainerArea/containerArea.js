function maxArea(height) {
    var maximum = 0;
    for (var i = 0; i < height.length; i++) {
        var width = 1;
        for (var j = i + 1; j < height.length; j++) {
            var maxHeight = height[j];
            if (height[i] < maxHeight)
                maxHeight = height[i];
            var area = maxHeight * width;
            if (area > maximum)
                maximum = area;
            width += 1;
        }
    }
    return maximum;
}
var case1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var case2 = [1, 1];
console.log(maxArea(case1)); // Expecting 49
console.log(maxArea(case2)); // Expecting 1
