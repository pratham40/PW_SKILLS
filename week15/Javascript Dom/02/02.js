const ele= document.getElementById("text")

function changeColor() {
    const color=document.body.style.backgroundColor;
    if (color=="black") {
        document.body.style.backgroundColor="white"
        ele.innerText="This is Light Mode"
        ele.style.color="black"
    } else {
        document.body.style.backgroundColor="black"
        ele.innerText="This is Dark Mode";
        ele.style.color="white"  
    }
}