function greet(name , pass){
    if (name == "jbk" && pass === "123") {
        console.log("welcome to TKA")
    } else {
        console.log("Not TKA user")
    }
}
greet("jbk" , 123)

// in JS == compares values with not respect to datatype
// in JS === compares values with respect to datatype



function m(num){
    return num
}
m("learning return")
console.log(m())



v = 32 
do{
   v += 6 
}
while(v < 40)
console.log(v)