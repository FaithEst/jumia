// the code below is for display products div (small images)
let phone1 = document.getElementById("phone1");
let phone2 = document.getElementById("phone2");
let phone3 = document.getElementById("phone3");
let phone4 = document.getElementById("phone4");

// let displayPhones = document.getElementById("displayPhones");
// phone1.onclick = function(){
    

//     displayPhones.src = "/IMAGES/phone1.jpg"
// }
// phone2.onclick = function(){
//     // let displayPhones = document.getElementById("phones");

//     displayPhones.src = "/IMAGES/phone2.jpg"
// }
// phone4.onclick = function(){
//     // let displayPhones = document.getElementById("phones");

//     displayPhones.src = "/IMAGES/phone4.jpg"
// }
// phone5.onclick = function(){
//     // let displayPhones = document.getElementById("phones");

//     displayPhones.src = "/IMAGES/phone5.jpg"
// }
// end of displaying small images

// code below is for displaying different object images
// item 1: SHOES
let shoes = {
    id:"shoesId",
    image:"1.jpg"
}

document.getElementById("shoes").onclick = function(){
    window.location.href = "products.html" + "?" + shoes.id;
}

// item 2: PHONE
let phone = {
    id: "phoneId"
}
document.getElementById("phone").onclick = function(){
    window.location.href = "products.html" + "?" + phone.id;
}

// item 3: USB
let usb = {
    id: "usbId"
}
document.getElementById("usb").onclick = function(){
    window.location.href = "products.html" + "?" + usb.id;
}

// item 4: T-SHIRTS
let tshirts = {
    id: "tshirtsId"
}
document.getElementById("tshirts").onclick = function(){
    window.location.href = "products.html" + "?" + tshirts.id;
}

// item 5: CAP
let cap = {
    id: "capId"
}
document.getElementById("cap").onclick = function(){
    window.location.href = "products.html" + "?" + cap.id;
}

// item 6: DRESS
let dress = {
    id: "dressId"
}
document.getElementById("dress").onclick = function(){
    window.location.href = "products.html" + "?" + dress.id;
}

var queryString = decodeURIComponent(window.location.search);
var receivedId = queryString.substring(1);

if(receivedId == shoes.id){
    console.log(receivedId);
    document.getElementById("displayPhones").src = shoes.image;
    // document.getElementById("imageToBuy").src = shoes.image;
}

// document.getElementById("addToCart").onclick = function(){
//     window.location.href = "cart.html" + "?" + shoes;
// }