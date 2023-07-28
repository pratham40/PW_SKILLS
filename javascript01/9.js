array=[1,2,999,56,"Mithun",1234,"PW"]
for (let index = 0; index < array.length; index++) {
    element = array[index];
    if (typeof(element)=="string") {
        console.log("Found The First String:",element);
        break
    }
}