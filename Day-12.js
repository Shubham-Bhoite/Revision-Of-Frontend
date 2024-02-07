var fruits = ["Mango", "Banana", "Orange", "Strawberry"]
for(frt of fruits){
    //var h2 = document.getElementById("msg");
    //h2.innerHTML = "Hii I am h1 tag"

    document.getElementById("msg").innerHTML += frt + "<br>"
}




// function change(){
//     var h1 = document.querySelector(".head")
    
//     h1.innerHTML = "Learning DOM... "
//     h1.style.backgroundColor = "yellow"
// }


function change(){
    var h1 = document.querySelector(".head")
if (h1.innerHTML == "Day 12 - Introduction to DOM") {
    h1.innerHTML = "Learning DOM... "
    h1.style.backgroundColor = "red"
    
} else {
    h1.innerHTML = "Day 12 - Introduction to DOM"
    h1.style.backgroundColor = "yellow"
}
   
}