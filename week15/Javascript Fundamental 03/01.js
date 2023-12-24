const car={
    make:"Mahindra",
    model:"XUV700",
    year:2021
}


function properties(car) {
    for (const property in car) {
        console.log(`${property} : ${car[property]}`);
    }
}

properties(car);


