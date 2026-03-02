function test(){
    console.log("Hi");    
}

test();

function greet(name) {
    console.log(`Hello, ${name}!. Welcome to the JS course`);
}

greet("Kannan");

function add(a, b) {
    console.log(a + b);    
}

add(10, 20);

function multiply(x, y) {
    return x * y;
}
let answer = multiply(5, 4); // 20
console.log(answer);

console.log(multiply(1, 2))

let hi = function() {
    console.log("Hi there!");
}

hi();

// Arrow function

function add(a, b) {
    console.log(a + b);    
}

let sum = (a, b) => {
    return a + b;
}

let greet1 = () => {
    console.log("Hello there!");
}

greet1();
console.log(sum(10, 20));


