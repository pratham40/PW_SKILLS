let obj={
    name:"lucifer",
    age:23,
    job:"Gamer"
}

function checkProperty(obj) {
    for (const value in obj) {
        console.log(`${value} : ${Object.hasOwn(obj,value)}`);
    }
}

checkProperty(obj)