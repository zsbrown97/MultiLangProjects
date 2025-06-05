package main

import "fmt"

func maxArea(height []int) (maximum int) {
    maximum = 0
    var l, r int = 0, len(height) - 1

    for l < r {
        maximum = max(maximum, (r - l) * min(height[l], height[r]))

        if height[l] < height[r] {
            l++
        } else {
            r--
        }
    }
    return
}

func main() {
    case1 := [9]int{1,8,6,2,5,4,8,3,7}
    case2 := [2]int{1,1}

    fmt.Println(maxArea(case1[:]))
    fmt.Println(maxArea(case2[:]))
}
