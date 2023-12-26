const ele=document.getElementById("count")
function increament() {
    ele.innerText=Number(ele.innerText)+1
}

function decreament() {
    if(Number(ele.innerText)>0){
        ele.innerText=Number(ele.innerText)-1
    }
    else{
        alert("Counter is going beyond 0")
    }
}