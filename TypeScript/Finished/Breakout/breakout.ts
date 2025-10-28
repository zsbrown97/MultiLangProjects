function breakout(nums: number[]): number {
    let ans: number = 0;
    let starts: number[] = nums
        .flatMap((e,i) => (e == 0 ? [i] : []));

    starts.forEach((ind) => {
        let leftHP: number = nums
            .slice(0, ind)
            .reduce((a,b) => a + b, 0)
        let rightHP: number = nums
            .slice(ind + 1)
            .reduce((a,b) => a + b, 0)

        if (leftHP == rightHP) ans += 2;
        if (Math.abs(leftHP - rightHP) == 1) ans += 1;
    })
    return ans;
}

let case1: number[] = [1,0,2,0,3];
let case2: number[] = [2,3,4,0,4,1,0];
let case3: number[] = [16,13,10,0,0,0,10,6,7,8,7];
let case4: number[] = [0];

console.log(breakout(case1)); // Expectation: 2
console.log(breakout(case2)); // Expectation: 0
console.log(breakout(case3)); // Expectation: 3
console.log(breakout(case4)); // Expectation: 2
