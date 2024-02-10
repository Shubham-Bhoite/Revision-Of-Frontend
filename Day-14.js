function login(){
var uname = document.getElementById("email").value;
var pass = document.getElementById("password").value;
var h3 = document.getElementById("msg");

if (uname=="") {
    h3.innerHTML="Enter Email";
    h3.style.color = "red"
} else if(pass==""){
    h3.innerHTML="Enter Password";
    h3.style.color = "red"
}else{
    if(uname=="jbk" && pass=="123"){
        h3.innerHTML="Login Successfully.."
        h3.style.color = "blue"
    }else{
        h3.innerHTML="Invalid username or password"
        h3.style.color = "red"
    }
}

}