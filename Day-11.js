a="Hello js"
console.log(a);

var fruits = ["mango", "banana", "grapes", 5, "orange"]
for(i=0; i<fruits.length; i++){
    if(fruits[i] == 5){
        continue;
    }else{
        console.log(fruits[i]);
    }
}

for(frt in fruits){
    console.log(fruits[frt]);
}

for(frt of fruits){
    console.log(frt);
}


var day = prompt("Enter only first 3 letters of a day...")
switch (day.toLowerCase()){
    case "mon": document.getElementById("msg").innerHTML = "MONDAY"
    break;
    case "tue": document.getElementById("msg").innerHTML = "TUESDAY"
    break;
    case "wed": document.getElementById("msg").innerHTML = "WEDNESDAY"
    break;
    case "thu": document.getElementById("msg").innerHTML = "THURSDAY"
    break;
    case "fri": document.getElementById("msg").innerHTML = "FRIDAY"
    break;
    case "sat": document.getElementById("msg").innerHTML = "SATURDAY"
    break;
    case "sun": document.getElementById("msg").innerHTML = "SUNDAY"
    break;
    default:("Enter a valid data...");
}