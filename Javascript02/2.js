
function calculateTotalCartValue(...itemPrice) {
    let  sumCart=itemPrice.reduce(
        function(acc,crr){
            return acc+crr
        },0
    )
    return sumCart
}

let totalPrice=calculateTotalCartValue(125,20,30);
console.log(`Total Cart Value is ${totalPrice}`);