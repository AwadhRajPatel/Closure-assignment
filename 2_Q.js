let order ={
    orderId :"124563",

    productName: "Laptop",

    quality:2
    
}

/*  without destructring  */

console.log("without destructring :")
console.log("Order Id", order.orderId);
console.log("Product Name", order.productName);
console.log("Quality", order.quality)

/* with destructring */

console.log("\nwithout destructring ")
let { orderId,productName,quality} = order;
console.log("Order Id", orderId);
console.log("Product Name",  productName);
console.log("Quality", quality)

