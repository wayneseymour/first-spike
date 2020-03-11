
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(30, 30, 50, 50);

let canvasX = 0;
canvas.addEventListener('mousedown', function(event) {
	canvasX += 5;
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.setTransform(1, 0, 0, 1, canvasX, 0);
	ctx.fillStyle = "red";
	ctx.fillRect(10, 10, 50, 50);
	ctx.fillStyle = "blue";
	ctx.fillRect(30, 30, 50, 50);
}, false);


