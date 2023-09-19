// Print out every number that ends in a 7 from 7-1007.
for (let i = 7; i <= 1007; i++) {
    if(i.toString().slice(-1) === '7') {
        console.log(i);
    } 
}

// if customerPayment is greater than the totalCheckoutCost, calculate the customer's change and print a statement like this:
//	Your change is $3.25. Thank you for shopping with us today.

// if customerPayment is less than the totalCheckoutCost, calculate the remaining balance and print a statement like this:
//	There is still $2.75 remaining on your balance.

// if customerPayment is equal to the totalCheckoutCost, print a statement wishing the customer a nice day.
//  Thanks and have a nice day!


let customerPayment = 20.0;
let totalCheckoutCost = 25.0;

function cashRegister(customerPayment, totalCheckoutCost) {
    const difference = customerPayment - totalCheckoutCost;
    if (difference < 0) {
        console.log(`There is still $${Math.abs(difference)} remaining on your balance`);
    } else if(difference == 0) {
        console.log('Thanks and habve a nice day'); 
    } else {
        console.log(`Your change is $${difference}`);
    }
}

cashRegister(customerPayment, totalCheckoutCost)

// If you got one grain of rice on day 1, two grains of rice on day 2, and four grains of rice on day 3, and it kept doubling like that, print out a daily report of how much rice you’d receive on each day for 30 days.
let grains = 1;
for (let i = 2; i < 31; i++) {
    grains += grains * 2;
}
console.log(grains);

// SUPER CHALLENGE: Print out the first 40 numbers in the Fibonacci sequence.
// function fib(n) {
    let a = 0;
    let b = 1
    console.log(a)
    console.log(b)
    
    for(let i = 0; i<40; i++) {
        let c = a + b
        console.log(c);
        a = b
        b = c
    }
// }