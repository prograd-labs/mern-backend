
// Adds two given numbers..
export const add = (a,b)  => a + b;

// Multiply two given numbers...
export const multiply = (a,b) => a * b;

// Divide two given numbers b != 0
export const divide = (a,b) => a / b;

// check prime...
export const checkPrime = (n) =>  {
    for(let i = 2; i*i <= n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
export const subtract = (a,b) => a - b;

export const decimalToBinary = (n) => {
    let bits = [];
    while(n) {
        if(n & 1) bits.push(1);
        else bits.push(0);

        n >>= 1;
    }
    bits = bits.reverse();
    bits.forEach((bit) => console.log(bit));
}