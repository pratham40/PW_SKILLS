const ProductDetails={
    name:"Apple 2020 Macbook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256 GB"
}
console.log("Below are the product details:");
for (const values of Object.values(ProductDetails)) {
    console.log(`${values} : ${ProductDetails[values]}`);
}