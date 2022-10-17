const incrfeaseEl = document.getElementById('increas');
const decreaseEl = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const cleanEl = document.getElementById('clean');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = colorEl.ariaValueMax;
let isPressed = false;
let x;
let y;

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();

}
//drawCircle(200,500);

canvas.addEventListener('mousedown',(e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    // console.log(isPressed,x,y);
})