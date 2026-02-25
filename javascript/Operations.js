console.log(20 / 2);
console.log(20 * 2);
console.log(20 + 2);
console.log(20 - 2);
console.log(20%3); // modulus operator
console.log(2**3); // exponentiation operator 2 x 2 x 2 = 8
console.log(10/0); // infinity

let a = 10 + 100 + "Murali"; 
console.log(a);
console.log(typeof a);

let b = "Murali" + 10 + 100;
console.log(b);
console.log(typeof b);

// coercion 
console.log('5' + 3);
console.log('5' - 3);
console.log('5' * 3);
console.log('5' / 3);  

console.log(10 / true); // true = 1, false = 0
console.log(10 / false);

// Adding boolean
console.log(10 + true); // 11 - true is converted to 1
console.log(10 + false); // 10 - false is converted to 0

// == ===
console.log('5' == 5); // true
console.log('5' === 5); // false

console.log(0 === false);
console.log(0 == true);
console.log(null == undefined);

// comparison operators
console.log(10 > 5); // Is 10 greater than 5 - true
console.log(10 < 5); // Is 10 less than 5 - false
console.log(18 >= 10); // Is 18 greater than or equal to 10 - true
console.log(5 <= 5); // Is 5 less than or equal to 5 - true
console.log(10 != 5); // Is 10 not equal to 5 - true
console.log(10 !== '10'); // Is 10 not equal to '10' - true
console.log(10 != '10');

// logical operators
console.log(true && false);
console.log(false && false);
console.log(true && true);

let x = 10;
console.log(x > 5 && x < 15); // true
console.log(x < 5 || x > 15); // false
console.log(x > 5 || x > 15);

console.log(x > 5 && x < 15 && x === 10); // true
console.log(x > 5 || x < 15 || x === 20); // true

console.log((x > 7 && x < 15) || x != 10);

// Increment and Decrement operators
let count1 = 2;
console.log(count1);
console.log(++count1);
console.log(count1);
console.log(count1++);
console.log(count1);

console.log("*****************Pre decrement*******************");

let count2 = 2;
console.log(count2);
console.log(--count2);
console.log(count2);
console.log(count2--);
console.log(count2);

let num = 10;
num = num + 5; // 15
console.log(num);
num += 5; // shorthand operator  20
console.log(num);

num -= 5; // 15
console.log(num);

num *= 2; // 30
console.log(num);

num /= 3; // 10
console.log(num);

console.log('kk' - 2)












