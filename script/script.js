var num = document.getElementById("number");
var Price1 = document.getElementById("Price1");
var itemprice = document.getElementById("itemPrice");
var priceTotal = document.getElementById("priceTotal");

function goModal() {    // 사용자정의 함수명
    document.getElementById("modalArea").style.display="block";
}

function popUpClose() {
    document.getElementById("modalArea").style.display="none";
}

function numUp(){

    num.value = parseInt(num.value) + 1;
    itemprice.innerText = parseInt(Price1.innerText)*(num.value);
    priceTotal.innerText = itemprice.innerText;
}

function numDown(){

    if(parseInt(num.value) > 1 ){
    num.value = parseInt(num.value) - 1;
    itemprice.innerText = parseInt(Price1.innerText)*(num.value);
    priceTotal.innerText = itemprice.innerText;
    }
}
