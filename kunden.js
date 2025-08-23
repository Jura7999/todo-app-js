let products = [
  { name: "E-Produkt 1", price: 300, inStock: true },
  { name: "Verpackung 3", price: 350, inStock: false },
  { name: "Bootsfahrschul Packet 1", price: 830, inStock: false },
];

function filterProductsByPrice(productList, maxPrice) {
  let affordableProducts = [];
  for (let i = 0; i < productList.length; i++) {
    if (maxPrice >= productList[i].price) {
      affordableProducts.push(productList[i]);
    }
  }
  return affordableProducts;
}

let price50 = filterProductsByPrice(products, 50);
let price400 = filterProductsByPrice(products, 400);
let price5000 = filterProductsByPrice(products, 5000);

console.log(price50);
console.log(price400);
console.log(price5000);
