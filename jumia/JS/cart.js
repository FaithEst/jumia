window.onload = function (){
    var queryStringB = decodeURIComponent(window.location.search);
    var receivedIdB = queryStringB.substring(1);

    console.log("Cart.js is loading");
    console.log(receivedIdB);

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


        if(receivedIdB == shoes.id){ 
            document.getElementById("imageToBuy").src = shoes.image;
        }
        if(receivedIdB == phone.id){ 
            document.getElementById("imageToBuy").src = phone.image;
        }
        if(receivedIdB == usb.id){ 
            document.getElementById("imageToBuy").src = usb.image;
        }
        if(receivedIdB == tshirts.id){ 
            document.getElementById("imageToBuy").src = tshirts.image;
        }
        if(receivedIdB == cap.id){ 
            document.getElementById("imageToBuy").src = cap.image;
        }
        if(receivedIdB == dress.id){ 
            document.getElementById("imageToBuy").src = dress.image;
        }
}