const Products=[
    {name:"Laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"Laptop Bag",price:20000},
    {name:"Watch",price:20000},
    {name:"Mobile Charger",price:1500}
]

let minAmountProduct={name:"",price:Number.MAX_VALUE}
let maxAmountProduct={name:"",price:Number.MIN_VALUE}

for (let Product of Products) {
    if (Product.price>maxAmountProduct.price) {
        maxAmountProduct=Product
    }
    if (Product.price<minAmountProduct.price) {
        minAmountProduct=Product
    }
}
console.log(`The product with maximum amount is ${maxAmountProduct.name} which is priced at Rs.${maxAmountProduct.price}`);
console.log(`The product with minimum amount is ${minAmountProduct.name} which is priced at Rs.${minAmountProduct.price}`);
