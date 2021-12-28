window.onload = function (){
    console.log('products page is loading');

    var queryString = decodeURIComponent(window.location.search);
    var receivedId = queryString.substring(1);

    console.log(receivedId);

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
    


    if(receivedId == shoes.id){ 
        document.getElementById("displayPhones").src = shoes.image;
    //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + shoes.id;

            return false;
        }        
    }
    if(receivedId == phone.id){
        document.getElementById("displayPhones").src = phone.image;
        //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + phone.id;

            return false;
        } 
    }
    if(receivedId == usb.id){
        document.getElementById("displayPhones").src = usb.image;
        //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + usb.id;

            return false;
        } 
    }
    if(receivedId == tshirts.id){
        document.getElementById("displayPhones").src = tshirts.image;
        //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + tshirts.id;

            return false;
        } 
    }
    if(receivedId == cap.id){
        document.getElementById("displayPhones").src = cap.image;
        //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + cap.id;

            return false;
        } 
    }
    if(receivedId == dress.id){
        document.getElementById("displayPhones").src = dress.image;
        //add to cart loading page
        document.getElementById("addToCart").onclick = function(){
            window.location.href = "cart.html" + "?" + dress.id;

            return false;
        } 
    }

}