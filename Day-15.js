
function login(){
    window.open("login.html")
}

function checkmail(){
    var uname = document.getElementById("uname").value

    var emailRegex = /\S+@\S+\.\S+/.test(uname);

    if (emailRegex) {
        document.getElementById("echeck").innerHTML="Email is correct"
        return true;

    } else {
        document.getElementById("echeck").innerHTML="Email is Incorrect"
        return false;
    }
}

function checkpass(){
    var pass = document.getElementById("pass").value

    var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(pass);

    if (passRegex) {
        document.getElementById("pmsg").innerHTML="Password is strong"
        return true;

    } else {
        document.getElementById("pmsg").innerHTML="Password is weak"
        return false;
    }
}

function checkmob(){
    var mob = document.getElementById("mob").value

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