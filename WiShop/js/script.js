var buy = document.getElementsByClassName("btnbuy");
var card= document.getElementById("card");

var items = 0;

for(let i=0; i<=buy.length; i++){

    buy[i].onclick = function(){
        card.innerHTML = ++items;
    }
}