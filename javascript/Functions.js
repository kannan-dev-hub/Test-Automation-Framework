function sayHello() {
    console.log('Hello Js');  // Block of codes
    console.log("Hello Js");
    console.log("Hello Js");
}

sayHello()

function add(x, y) {
    console.log(x + y);    
}

add(4, 5);

let course = "JS";

let templateString = `Currently we are learning ${course}
It's very easy and interesting`;
console.log(templateString);


function testLog(testName) {
    console.log(`Currently ${testName} is running`); // Template string
}

testLog("Test 1")
testLog("Test 2")
testLog("Test 3")

function checkTitle(actualTitle, expectedTitle) { // actualTitle = Amazon  ExpectedTitle = Amazon
    if (actualTitle === expectedTitle) { // code block
        // console.log("The title is matching with expected title"); 
        return true;
    }  
    else {
        // console.log("The title is not matching with expected title");
        return false;
    } 
    
}

console.log("*******************************");
// let res = checkTitle("Amazon", "Amazon");
// console.log(res);
console.log(checkTitle("Amazon", "Amazon"));


console.log("*******************************");


let actualTitle = "Amazo"  // Comes from UI
let expectedTitle = "Amazon" 

checkTitle(actualTitle, expectedTitle)

function checkTitle1(actualTitle, expectedTitle) { // actualTitle = Amazon  ExpectedTitle = Amazon
    if (actualTitle === expectedTitle) {
        console.log(`The ${actualTitle} is matching with ${expectedTitle}`); 
        console.log("The test is passed");       
    }  
    else {
        console.log(`The ${actualTitle} is not matching with ${expectedTitle}`); 
    }  
}

checkTitle1(actualTitle, expectedTitle)

// console.log(checkTitle1);

function add(x, y) {
    let result = x + y
    return result
};

let result = add(4, 5)
console.log(result);

console.log(typeof add);

// Function expression
let myfunc = function () {
    console.log("Hi all")   
};

myfunc()

let addFunc = function (num1, num2) {
    return num1 + num2
} 

console.log(addFunc(20, 10))
console.log(typeof addFunc)

let myDetails = {  // object
    "First Name": "Murali",
    "Last Name": "M",
    "func": function () {
        console.log("This function is inside the object");        
    },
    "add": function (a, b) {
        return a + b;        
    }
};

myDetails["Last Name"] = "Mohan"

console.log(myDetails);


console.log(myDetails['First Name']);
myDetails.func()
let addtion = myDetails.add(4, 5)
console.log(addtion);

let products = [
    "Apple",  // str index 0
    "Samsung",  // str index 1
    "Realme", // str index 2
    function (a, b) {
        return a + b
    }, // function index 3
    true, // index 4
    45
] // Array
console.log(products[3](7, 7));

// Arrow function

let arrow = () => {
    console.log("This is arrow function")    
};

arrow();

let arrow1 = (a, b) => {
    let r = a + b
    return r;
}

console.log(arrow1(10, 20));

let addFun = (a, b) => a + b;
console.log(addFun(10, 40));




// let details = {
//     fname: "Murali",
//     lname: "M"
// };
// console.log(details['fname']);


// console.log(myDetails.First Name)


// function isEligibleToVote(age) {
//     if (age >= 18) {
//         return "Eligible to vote"
//     }
//     else {
//         return "Not eligible to vote"
//     }
// }

// let vote = isEligibleToVote(30)
// console.log(vote);

// // z = 2x + 3y + 4  

// function equation(x, y) {
//     let z = (2 * x) + (3 * y) + 4
//     return z
// }

// let answer = equation(2, 4)
// console.log(answer);
// console.log(equation(2, 5));






