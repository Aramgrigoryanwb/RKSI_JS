let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext('2d');
function drawSmile(){
let r = Math.round(Math.random()*(255-0)),
    g = Math.round(Math.random()*(255-0)),
    b = Math.round(Math.random()*(255-0)),
    r1 = Math.round(Math.random()*(255-0)),
    g1 = Math.round(Math.random()*(255-0)),
    b1 = Math.round(Math.random()*(255-0));
   let a = Math.round(Math.random()*(255-0));
   
   console.log(a);
   
ctx.beginPath()
ctx.fillStyle = `rgb(${r},${g},${b})`;
ctx.arc(65 ,67, 45, 0, Math.PI*2, true);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "black";
ctx.fillRect(150,90, 100,10);

ctx.beginPath();
ctx.fillStyle = `rgb(${r1},${g1},${b1})`;
ctx.arc(345 ,60, 55, 0, Math.PI*2, true);
ctx.fill();
ctx.closePath();
}
setInterval(drawSmile,500);