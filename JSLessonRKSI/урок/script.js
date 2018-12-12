
let button = document.querySelectorAll(".button")[0];
let button2 = document.querySelectorAll("button")[0];



button.onmouseover = function(){
    let randomX = Math.random()*500 + "px";
    let randomY = Math.random()*500 + "px";
    button.style.left = randomX;
    button.style.top = randomY;
}
button2.onclick = function (){
    alert("Krasava");
}

