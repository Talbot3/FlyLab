extern crate failure;
extern crate rand;
use failure::{err_msg, Error};
use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);
    println!("The secret number is: {}", secret_number);
    loop {
        println!("Please input you guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        let guess = Guess::new(guess);
        let guess = match guess {
            Ok(value) => value.value,
            Err(_) => {
                print!("Guess value must be between 1 and 100");
                continue;
            }
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
pub struct Guess {
    value: u32,
}

impl Guess {
    pub fn new(value: u32) -> Result<Guess, Error> {
        if value > 100 || value < 1 {
            // 由作者抛出的应用异常
            return Err(err_msg("Guess value must be between 1 and 100"));
        };
        let guess = Guess { value };
        Ok(guess)
    }
    pub fn value(&self) -> u32 {
        self.value
    }
}
