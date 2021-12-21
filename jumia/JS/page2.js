var queryString = decodeURIComponent(window.location.search);
var receivedId = queryString.substring(1);

// console.log(receivedId);


document.getElementById("addToCart").onclick = function(){

    window.location.href = "cart.html" + "?" + receivedId
}

//item 1: SHOES
let shoes = {
    id:"shoesId",
    image:"1.jpg"
}
document.getElementById("shoes").onclick = function(){
    window.location.href = "products.html" + "?" + shoes.id;
}

if(receivedId == shoes.id){
    console.log(receivedId);
    document.getElementById("displayPhones").src = shoes.image;
    // document.getElementById("imageToBuy").src = shoes.image;
}

// item 2: PHONE
let phone = {
    id: "phoneId",
    image: "IMAGES/2.jpg"
}
if(receivedId == phone.id){
    document.getElementById("displayPhones").src = phone.image;
}

// item 3: USB
let usb = {
    id: "usbId",
    image: "IMAGES/3.jpg"
}
if(receivedId == usb.id){
    document.getElementById("displayPhones").src = usb.image;
}

// item 4: T-SHIRTS
let tshirts = {
    id: "tshirtsId",
    image: "IMAGES/4.jpg"
}
if(receivedId == tshirts.id){
    document.getElementById("displayPhones").src = tshirts.image;
}

// item 5: CAP
let cap = {
    id: "capId",
    image: "IMAGES/5.jpg"
}
if(receivedId == cap.id){
    document.getElementById("displayPhones").src = cap.image;
}

// item 6: DRESS
let dress = {
    id: "dressId",
    image: "IMAGES/6.jpg"
}
if(receivedId == dress.id){
    document.getElementById("displayPhones").src = dress.image;
}

// code to display products on cart.html



