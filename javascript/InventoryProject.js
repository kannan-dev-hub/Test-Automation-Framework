/* PROJECT: Smart Inventory Management System
   Topics Covered: Arrays, Objects, Functions, Loops, Conditionals, Operators
*/

// 1. DATA STRUCTURE
// TODO: Create an array named 'inventory'. 
// It should contain 2 initial objects. Each object must have: id, name, price, stock
let inventory = [
    { id: 1, name: "Apple", price: 1.5, stock: 10 },
    { id: 2, name: "Banana", price: 0.5, stock: 3 }
];


// 2. ADD ITEM FUNCTION (Arrow Function)
// TODO: Write an arrow function named 'addItem' that takes (id, name, price, stock).
// Inside the function, create an object and PUSH it into the 'inventory' array.
const addItem = (id, name, price, stock) => {
    // Write your code here
    
};


// 3. REMOVE ITEM FUNCTION (Standard Function)
// TODO: Write a function named 'removeLastItem'.
// It should remove the LAST element of the array using pop() or remove a specific element using splice().
function removeSpecificItem(index) {
    // Write your code here to remove 1 element at the specific index using splice
    // Hint: array.splice(index, 1);

}


// 4. INVENTORY REPORT & ALERTS
function generateReport() {
    console.log("--- INVENTORY REPORT ---");
    
    // TODO: Write a 'for' loop that runs from 0 to inventory.length.
    // Inside the loop:
    // 1. Log the product name.
    // 2. Check IF stock is less than 5. If true, log "ALERT: Low Stock!"
    
    for (let i = 0; i < inventory.length; i++) {
        // Access current item: let item = inventory[i];
        
        // Print Name
        
        // Check Stock logic (if statement)
    }
}


// 5. CALCULATE TOTAL VALUE
function calculateTotalValue() {
    let totalValue = 0;
    
    // TODO: Loop through the array and add (price * stock) to totalValue.
    // Hint: totalValue += inventory[i].price * inventory[i].stock
    
    console.log("Total Inventory Value: $" + totalValue);
}


// --- TEST CASES (Do not edit below this line) ---
console.log("1. Initial Inventory:");
console.log(inventory);

console.log("\n2. Adding 'Orange'...");
addItem(3, "Orange", 2.0, 20);
console.log(inventory);

console.log("\n3. Removing Item at index 1...");
removeSpecificItem(1); // Should remove Banana
console.log(inventory);

console.log("\n4. Running Report...");
generateReport(); // Should show Apple and Orange, and no low stock alerts (since Banana is gone)

console.log("\n5. Calculating Total...");
calculateTotalValue();