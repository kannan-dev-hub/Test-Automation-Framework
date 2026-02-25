let arr = [10, 20, 30, 40, 50];
console.log(typeof arr);
console.log(arr);

let arr1 = [10, 20, 'Murali', true, null]
console.log(arr1[0]);
console.log(arr1[2]);
console.log(typeof arr1[3]);

console.log(arr1.length); // size of the array or number of elements  array length = 5
console.log(arr1[arr1.length - 1]); // last element array length - 1, last index number
console.log(arr1[arr1.length - 2]); // second last element

arr1.push('New Element'); // add element at the end
console.log(arr1);
arr1.unshift('First Element'); // add element at the beginnin
console.log(arr1);









