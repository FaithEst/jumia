window.addEventListener('load', (event) => {
    console.log('page4 is fully loaded');


var queryString = decodeURIComponent(window.location.search);
var receivedId = queryString.substring(1);

console.log(receivedId);


if(receivedId == shoes.id){ 
    document.getElementById("displayPhones").src = shoes.image;
    document.getElementById("imageToBuy").src = shoes.image;
}
if(receivedId == phone.id){
    document.getElementById("displayPhones").src = phone.image;
}
if(receivedId == usb.id){
    document.getElementById("displayPhones").src = usb.image;
}
if(receivedId == tshirts.id){
    document.getElementById("displayPhones").src = tshirts.image;
}
if(receivedId == cap.id){
    document.getElementById("displayPhones").src = cap.image;
}
if(receivedId == dress.id){
    document.getElementById("displayPhones").src = dress.image;
}
  });


