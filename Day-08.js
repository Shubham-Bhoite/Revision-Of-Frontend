a = 10;
a=20

a="Hello Sir"

var b = "var b"
b = 34
var b = "2nd var b"
var b = "3rd var b"
b = "4th b"
b = 34;

let d = "Hiii"
d = 55
d = 67 

const c = 100

console.log(a)
console.log(b)
console.log(d)
console.log(c)


x = 20
y = "Byee"
z = true
s = 84.80
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof s)

js = "global";
function change() {
    js = "local";  // Modifying the global variable 'js' to "local"
    console.log(js);  // Logging the updated value of 'js' ("local")
    console.log(this.js);  // Logging the value of 'js' using 'this' (also "local" because 'this' refers to the global object in this context)
}
// Calling the function 'change()'
change();


js = "global";  // Global variable initialized with the value "global"
function modify() {
    var js = "local";  // Create a local variable with the same name
    console.log(js);    // Log the local variable ('local')
    console.log(this.js);  // Log the global variable ('global')
}
// Calling the function 'change()'
modify();
