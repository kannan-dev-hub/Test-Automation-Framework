// console.log(fname);
let fname = "Kannan";
console.log(fname);
fname = "Siva";
console.log(fname);

console.log(lname); // Hoisting
var lname = "Mohan";
// console.log(lname);
var lname = "Dinesh";
console.log(lname);



var a = 10;
const pi = 3.14;
// pi = 4;
// console.log(pi);

// let, var, const scope
for(var i=0; i<5; i++) { // global scope
    console.log(i);    
}; 

console.log("Outside of the for loop " + i);

for(let j=5; j>0; j--){ // Block scope
    console.log(j);    
};
// console.log("Outside of the for loop " + j);

// for(const k=0; k<5; k++) {
//     console.log(k);
// };

var a;
let b;
const c=0;

console.log(a);
console.log(b);
console.log(c);

var college = "Anna University";
console.log(college);

let boo = true;

if(boo) {
    var college = "IIT"
    console.log(college);
}

console.log("Outside if condition " + college);

let college = "Anna University";

if(true) {
    let college = "IIT"  // initialize
    console.log(college);    
}

console.log("Outside if condition " + college);








