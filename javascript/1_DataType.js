/*
Primitive Data Types in JavaScript

In JavaScript, there are several primitive data types that are used to represent simple values. These include:

1. **Number**: Represents both integer and floating-point numbers.
2. **String**: Represents a sequence of characters used for text.
3. **Boolean**: Represents a logical entity and can have two values: true or false.
4. **Undefined**: A variable that has been declared but not assigned a value has the value undefined.
5. **Null**: Represents the intentional absence of any object value.
6. **Symbol**: A unique and immutable primitive value used as the key of an object property.
7. **BigInt**: Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.

*/

// Example of each primitive data type in JavaScript

// Number
let num = 42;
let floatNum = 3.14;
console.log(typeof num); // "number"
console.log(typeof floatNum); // "number"

// String
let str = "Hello, World!";
console.log(typeof str); // "string"

// Boolean
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // "boolean"
console.log(typeof isFalse); // "boolean"

// Undefined
let undef;
console.log(typeof undef); // "undefined"

// Null
let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // "object" (this is a known quirk in JavaScript)

// Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// BigInt
let bigIntNum = 9007199254740991n;
console.log(typeof bigIntNum); // "bigint"

// Non-primitive Data Type

// Object
// Without quotes (standard way when property names are valid identifiers)
let person1 = { name: "Alice", age: 30 };
console.log(person1); // { name: "Alice", age: 30 }

// With quotes (both ways work the same)
let person2 = { "name": "Alice", "age": 30 };
console.log(person2); // { name: "Alice", age: 30 }

// Example where quotes are required
let specialObject = {
    "first name": "Alice",    // needs quotes because of space
    "2ndProperty": "value",   // needs quotes because starts with number
    "special-char": "value"   // needs quotes because of hyphen
};
console.log(specialObject);
console.log(typeof specialObject); // "object"

// Array (another non-primitive data type)
let numbers = [1, 2, 3];     // Array literal syntax
console.log(numbers);        // [1, 2, 3]
console.log(typeof numbers); // "object" (Arrays are special objects)
console.log(Array.isArray(numbers)); // true - way to check if something is an array

// Arrays can hold mixed types
let mixed = [1, "hello", true, { name: "Bob" }, [4, 5]];
console.log(mixed);         // [1, "hello", true, { name: "Bob" }, [4, 5]]

// Common array operations
console.log(numbers.length);  // 3 - get array length
console.log(numbers[0]);     // 1 - access first element (zero-based indexing)
numbers.push(4);            // add element to end
console.log(numbers);       // [1, 2, 3, 4]

let arr = [1, 2, 3];
arr.length;        // get length
arr[0];           // access element by index
arr.push(4);      // add to end
arr.pop();        // remove from end
arr.unshift(0);   // add to beginning
arr.shift();      // remove from beginning



