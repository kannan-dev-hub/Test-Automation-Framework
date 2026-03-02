// Create product data (array of objects)
let products = [
    {"name": "Apple", "price": 50},
    {"name": "Banana", "price": 20},  
    {"name": "Orange", "price": 30},
    {"name": "Grapes", "price": 40},
    {"name": "Mango", "price": 60} 
];


// Create an empty array for the cart
let cart = [];

// Display product buttons
let productHtml = '';

for (let i = 0; i < products.length; i++) {
  productHtml += `
    <div class="product">
      <span>${products[i].name} - ₹${products[i].price}</span>
      <button id="btn${i}">Add to Cart</button>
    </div>
  `;
};

document.getElementById("product-list").innerHTML = productHtml;

document.getElementById('btn0').onclick = function() { // try with for loop
    cart.push(products[0]);
    console.log(cart);
    updateCart();
};

document.getElementById('btn1').onclick = function() {
    cart.push(products[1]);
    console.log(cart);
    updateCart();
};

document.getElementById('btn2').onclick = function() {
    cart.push(products[2]);
    console.log(cart);
    updateCart();
};

document.getElementById('btn3').onclick = function() {
    cart.push(products[3]);
    console.log(cart);
    updateCart();
};

document.getElementById('btn4').onclick = function() {
    cart.push(products[4]);
    console.log(cart);
    updateCart();
};

var updateCart = () => {
  let cartText = "";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    cartText += cart[i].name + ' - ₹' + cart[i].price + "<br>";  // Try with template string
    total += cart[i].price; // total = total + cart[i].price
  }

  // Apply 10% discount if total exceeds 200
  if(total > 200) {
    let oldTotal = total;
    total = total - (total * .1);
    cartText += `<p>🎉 10% discount applied! (₹${oldTotal} → ₹${total})</p>`;
  }


  document.getElementById("cart-items").innerHTML = cartText || "Your Cart is empty";
  document.getElementById("total").innerHTML = `Total: ₹ ${total}`; // template string

};

let clearCartButton = document.createElement("button");
clearCartButton.innerHTML = "Clear Cart";
clearCartButton.onclick = function() {
  cart = [];
  updateCart();
};
document.getElementById("cart").appendChild(clearCartButton);