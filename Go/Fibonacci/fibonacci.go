package main

import "fmt"

func fibonacci(ln int) (sequence []int) {
    if ln <= 0 {
        sequence = []int{0}
        return 
    }

    if ln == 1 {
        sequence = []int{1}
        return 
    } 

    sequence = make([]int, ln)
    sequence[0], sequence[1] = 1, 1

    for i := 2; i < ln; i++ {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }

    return 
}

func main() {
    fmt.Println(fibonacci(25))
}

