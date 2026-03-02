// for loop
/*
First iteration:
 i = 0  // Initialization
 0 < 5 - True
 Using for loop 0

Second iteration:
 i = 1  // update
 1 < 5 - True
 Using for loop 1

Fourth iteration:
 i = 3  // update
 3 < 5 - True
 Using for loop 3

Fifth iteration:
 i = 5  // update
 5 < 5 - False
 Comes out of the loop
*/
for(let i = 0; i <= 5; i++) 
{
    console.log("Using for loop ", i);
}

for(let i = 5; i <= 5; i++) 
{
    console.log("Using for loop ", i);
}

for(let i = 1; i <= 5; i=i+3) 
{
    console.log("Odd number ", i);
}

for(let i = 5; i >= 0; i=i-2) 
{
    console.log("Using for loop ", i);
}

let y = 0;
for(; y<=5; y++) 
{
    console.log(y);
    
};

let z = 0;
for(; z<=5;) 
{
    console.log(z);
    z++;   
};

let arr = [12, 15, "Murali", true, undefined]
console.log(arr.length);

for(let i = 0; i<arr.length; i++)
{
    console.log(arr[i]);    
}

arr.forEach(element => {
    console.log("Using for each ", element);
})

let arr1 = [1, 2, 3, 4, 5]

arr1.forEach(element => {
    console.log(element + 5)
});

console.log("************************************");

// for of
for(let value of arr)
{
    console.log(value);
    
}

// for in
for(let index in arr) 
{
    console.log(index);
    
}

let address = "Tambaram Chennai"
for(let char of address)
{
    console.log(char);
    
}

let myObj = {
    "fname": "Murali",
    "lname": "M",
    "city": "Dindigul"
};
console.log(myObj);

for(let key in myObj)
{
    console.log(key);
    console.log(myObj[key]);  
}

// while loop
let i = 0;
while (i < 5) {
    console.log("Using while loop", i);
    i++;  
}

// do while
let j = 0;
do {
    console.log("Using do while ", j);
    j++;    
} while(j > 5);

// break
for(let i = 0; i<=10; i++) {

    if (i === 5) {
        console.log("coming out of the loop");        
        break;
    }

    console.log("Value ", i);
    
}

// continue
for(let i = 0; i<=10; i++) {

    if (i === 5) {
        // console.log("skipping this iteration");        
        continue;
    }

    console.log("Value ", i);
    
}

console.log("*********************************************");


let sum = 4;
while(sum <= 15) {
    
    sum++;
    if(sum === 10) {
        continue;    
    } 
    
    console.log(sum);
    
}


