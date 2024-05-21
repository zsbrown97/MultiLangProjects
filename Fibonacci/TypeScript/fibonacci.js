function fibonacci(length) {
    var result = [1, 1];
    for (var i = 2; i < length; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}
console.log(fibonacci(5));
