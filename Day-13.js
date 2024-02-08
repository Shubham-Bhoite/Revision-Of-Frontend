function change(){
    console.log("Button clicked..")
    var h1 = document.querySelector(".head")
if (h1.innerHTML == "Day 13 - Introduction to DOM") {
    h1.innerHTML = "Learning DOM... "
    h1.style.backgroundColor = "red"
    
} else if(h1.innerHTML == "Learning DOM... ") {
    h1.innerHTML = "DOM Manipulation"
    h1.style.backgroundColor = "grey"
}else{
    h1.innerHTML = "Day 13 - Introduction to DOM"
    h1.style.backgroundColor = "yellow"
}
   
}