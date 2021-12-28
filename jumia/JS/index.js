window.onload = function() {
    console.log('index.html is fully loaded');
    // item 1: SHOES
    let shoes = {
        id:"shoesId",
        image:"1.jpg"
    }

    // item 2: PHONE
    let phone = {
        id: "phoneId",
        image: "IMAGES/2.jpg"
    }

    // item 3: USB
    let usb = {
        id: "usbId",
        image: "IMAGES/3.jpg"
    }

    // item 4: T-SHIRTS
    let tshirts = {
        id: "tshirtsId",
        image: "IMAGES/4.jpg"
    }

    // item 5: CAP
    let cap = {
        id: "capId",
        image: "IMAGES/5.jpg"
    }

    // item 6: DRESS
    let dress = {
        id: "dressId",
        image: "IMAGES/6.jpg"
    }



    document.getElementById("shoes").onclick = function(){
        window.location.href = "products.html" + "?" + shoes.id;
    }
    
    document.getElementById("phone").onclick = function(){
        window.location.href = "products.html" + "?" + phone.id;
    }
    document.getElementById("usb").onclick = function(){
        window.location.href = "products.html" + "?" + usb.id;
    }
    document.getElementById("tshirts").onclick = function(){
        window.location.href = "products.html" + "?" + tshirts.id;
    }
    document.getElementById("cap").onclick = function(){
        window.location.href = "products.html" + "?" + cap.id;
    }
    document.getElementById("dress").onclick = function(){
        window.location.href = "products.html" + "?" + dress.id;
    }    
};







