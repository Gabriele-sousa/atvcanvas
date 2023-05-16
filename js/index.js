const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle='green';
ctx.fillRect(200,200,300,200);


ctx.fillStyle="red";
ctx.arc(700, 300, 110, 0, Math.PI * 2);
ctx.fill();


ctx.beginPath();
ctx.lineTo(825,400);
ctx.lineTo(1000,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20,20);
ctx.bezierCurveTo(100, 200, 400, 200, 400, 100);
ctx.stroke();

var img = new Image();
img.addEventListener('load', function(){
	ctx.drawImage(img, 900, 300);
} , false);
img.src = 'img/myImage.png';

