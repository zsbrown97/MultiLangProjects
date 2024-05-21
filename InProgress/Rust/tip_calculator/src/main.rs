use std::io;

fn tip_calc(x:u32) {
    println!("First number is {x}");
}

fn main() {
    println!("Enter a number: ");
    let mut firstNum = String::new();

    io::stdin().read_line(&mut firstNum).expect("Error");

    tip_calc(firstNum);
}
