/**
 * String can either be primitive data type or an object
 */

// Primitive string
let primitiveStr = "Hello, World!";
console.log(typeof primitiveStr); // "string"

// String object
let objectStr = new String("Hello, Object World!");
console.log(typeof objectStr); // "object"

// Accessing string properties and methods
console.log(primitiveStr.length); // 13
console.log(objectStr.length);    // 20

// accesssing characters
console.log(primitiveStr[0]); // "H"
console.log(objectStr.charAt(0)); // "H"

// Search within strings
console.log(primitiveStr.includes("World")); // true
console.log(objectStr.startsWith("Hello")); // true  
// Note: Primitive strings are automatically converted to String objects when accessing properties or methods
// Case sensitivity
console.log(primitiveStr === "hello, world!"); // false

// string splitting
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(fruits[1]); // "banana"
console.log(fruits[3]); // undefined

// case conversion
console.log(primitiveStr.toUpperCase()); // "HELLO, WORLD!"
console.log(objectStr.toLowerCase());    // "hello, object world!"

// string trimming
let spacedStr = "   Hello, Trim!   ";
console.log(spacedStr.trim()); // "Hello, Trim!"

// string replacement
let newStr = primitiveStr.replace("World", "JavaScript");
console.log(newStr); // "Hello, JavaScript!"

// Parsing strings to numbers
let intStr = "42";
let floatStr = "3.14";
console.log(parseInt(intStr)); // 42
console.log(parseFloat(floatStr)); // 3.14

let msg = "The total price is 100 USD";
let price = msg.split(" ")[4];
console.log(parseInt(price)); // 100
console.log(typeof parseInt(price)); // "number"

// Template literals (string interpolation)
let fname = "Alice";
let age = 30;
let greeting = `My name is ${fname} and I am ${age} years old.`;
console.log(greeting); // "My name is Alice and I am 30 years old."

// Escape sequences
let escapeStr = "He said, \"Hello!\"\nNew line starts here.\tTabbed text.";
console.log(escapeStr);
/*
He said, "Hello!"
New line starts here.	Tabbed text.
*/

// Multi-line strings with template literals
let multiLineStr = `This is line one.
This is line two.
This is line three.`;
console.log(multiLineStr);
/*
This is line one.
This is line two.
This is line three.
*/



// String comparison

