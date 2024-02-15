
function login(){
    window.open("login.html")
}

function checkmail(){
    var e = document.getElementById("uname").value

    var emailRegex = /\S+@\S+\.\S+/.test(e);

    if (emailRegex) {
        document.getElementById("echeck").innerHTML="Email is correct"
        return true;

    } else {
        document.getElementById("echeck").innerHTML="Email is Incorrect"
        return false;
    }
}

function checkpass(){
    var p = document.getElementById("pass").value

    var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(p);

    if (passRegex) {
        document.getElementById("pmsg").innerHTML="Password is strong"
        return true;

    } else {
        document.getElementById("pmsg").innerHTML="Password is weak"
        return false;
    }
}

function checkmob(){
    var m = document.getElementById("mob").value

    var mobRegex = /^\d{10}$/.test(mob);

    if (mobRegex) {
        document.getElementById("mmsg").innerHTML="Mobile number is valid"
        return true;

    } else {
        document.getElementById("mmsg").innerHTML="Mobile number Invalid"
        return false;
    }
}

function login(){
    if (checkmail() && checkpass() && checkmob()){
        window.open("login.html")
    }else{
        document.getElementById("msg").innerHTML = "Invalid Id or Password"
    }
}