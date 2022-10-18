const increaseEl = document.getElementById('increase');
const decreaseEl = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const cleanEl = document.getElementById('clean');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = colorEl.value;
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

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}
//drawLine(200,500,500,600);

colorEl.addEventListener('change',(e) =>{
    color = e.target.value;
})

increaseEl.addEventListener('click',() =>{
    size +=5;
    if(size>50){
        size = 50;
    }
    updateSizeOnScreen();
})

decreaseEl.addEventListener('click',() =>{
    size -=5;
    if(size<5){
        size = 5;
    }
    updateSizeOnScreen();
})

cleanEl.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

canvas.addEventListener('mousedown',(e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    // console.log(isPressed,x,y);
})

canvas.addEventListener('mousemove',(e) =>{
    if(isPressed) {
       const x2 = e.offsetX;
       const y2 = e.offsetY;

       drawCircle(x2, y2);
       drawLine(x, y, x2, y2);

       x = x2;
       y = y2;
    
    }
})

canvas.addEventListener('mouseup',(e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
    // console.log(isPressed,x,y);
})

function updateSizeOnScreen(){
    sizeEl.innerText = size;
}

