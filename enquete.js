let encremento = 0;
let largura = 0;
let mover = 540;
let count = 0;
let largura2 = 0;
let pegasus1 = 5;
let pegasus2 = 5;
function simpi(){
    encremento++;
    largura = largura + 20;
    document.getElementById("ify").innerHTML = encremento;
    document.querySelector("#ify").style.width = largura+"px";
    if (encremento > pegasus2){
        pegasus1 = encremento;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#ify").style.left = mover+"px";
        document.querySelector("#ifn").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    } 
    
   
}   

function naopi(){
    count++;
    document.getElementById("ifn").innerHTML = count;
    largura2 = largura2 + 20;
    document.querySelector("#ifn").style.width = largura2+"px";
    if (count > pegasus1){
        pegasus2 = count;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#ify").style.left = mover+"px";
        document.querySelector("#ifn").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    }
}   