// for loop example
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

let arr = [10, 20, 30, 40, 50]; // elemnts with index 0,1,2,3,4
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);


/*
arr.length = 5
// First iteration
i = 0
i = 0 (i++)
arr[0] = 10

// Second iteration
i = 1
i = 1 (i++)
arr[1] = 20

// Third iteration
i = 2
i = 2 (i++)
arr[2] = 30

// Fourth iteration
i = 3
i = 3 (i++)
arr[3] = 40

// Fifth iteration
i = 4
i = 4 (i++)
arr[4] = 50

// Sixth iteration
i = 5
i < arr.length (5 < 5) false
*/
console.log("*****************Before for loop****************");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


for(let i = 0; i < 5; i++) {
    arr.push(i)
} 

console.log("*****************After for loop****************");

console.log(arr);


for (let i = 0; i <= 10; i++) {
    console.log("Kannan");    
}