let c = 0

var images=["Images/download (1).jpg", "Images/download (2).jpg", "Images/download (3).jpg"]

function changeimg(){
    c = (c+1) % images.length;
    document.getElementById("changeimage").innerHTML= "<img src='"+images[c]+"'>"
}