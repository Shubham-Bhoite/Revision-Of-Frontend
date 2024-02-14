function login(){
    var h3 = document.getElementById("msg");
}

function checkmail(){
    var e = document.getElementById("uname").value

    var emailRegex = /\S+@\S+\.\S+/.test(e);

    if (emailRegex) {
        document.getElementById("echeck").innerHTML="Email is correct"
    } else {
        document.getElementById("echeck").innerHTML="Email is Incorrect"
    }
}