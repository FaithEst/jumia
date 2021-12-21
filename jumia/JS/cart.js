window.onload = (event) => {
    console.log('cart.js is fully loaded');


    document.getElementById("addToCart").onclick = function(){
        window.location.href = "cart.html" + "?" + shoes.id;
    }
    
    var queryStringA = decodeURIComponent(window.location.search);
    var receivedIdA = queryString.substring(1);
  };
