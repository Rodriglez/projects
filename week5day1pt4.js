// Problem 1
// Below we have an array of objects.
// Loop through the array of objects and add up all the prices if the
// item is in stock.
// Must use forEach on shoppingCart
// Have the totalPrice function return the total price
// DO NOT modify the original shoppingCart array. The tests will not pass If
// you do so.

let shoppingCart = [
    {
      itemName: "TV",
      inStock: true,
      price: 799.99,
    },
    {
      itemName: "Controller",
      inStock: true,
      price: 49.99,
    },
    {
      itemName: "Phone case",
      inStock: false,
      price: 19.99,
    },
    {
      itemName: "Pencils",
      inStock: true,
      price: 5.99,
    }
  ];

function totalPrice() {
  //write code here
let total = 0;
if (shoppingCart.inStock = true) {
    shoppingCart.splice(2, 1)
}
  
shoppingCart.forEach ((item) => total += (item.price))
return total;
}
console.log(totalPrice())