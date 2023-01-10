const { canvas, ctx } = getCanvas();
const { radius1, radius2, radius3, radius4, radius5 } = getRadiusButtons();
const { clearButton } = getFunctionalButtons();

let mousePosition = { x: 0, y: 0 };
let lineThickness = 10;
let lineColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
let isDrawing = false;

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp);

clearButton.addEventListener('click', clearCanvas);

function drawLine(event) {
	ctx.beginPath();
	ctx.moveTo(mousePosition.x, mousePosition.y);
	ctx.lineTo(event.clientX, event.clientY);
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineThickness;
	ctx.stroke();
	ctx.closePath();
}

function onMouseDown(event) {
	isDrawing = true;
	mousePosition = { x: event.clientX, y: event.clientY };
}

function onMouseMove(event) {
	if (isDrawing === false) return;
	drawLine(event);
	lineColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
	mousePosition = { x: event.clientX, y: event.clientY };
}

function onMouseUp() {
	isDrawing = false;
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeRadius(radius) {
	lineThickness = radius;
}

// The Returners™

function getCanvas() {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	return { canvas, ctx };
}

function getRadiusButtons() {
	const radius1 = document.querySelector('#thickness-1');
	const radius2 = document.querySelector('#thickness-2');
	const radius3 = document.querySelector('#thickness-3');
	const radius4 = document.querySelector('#thickness-4');
	const radius5 = document.querySelector('#thickness-5');
	return { radius1, radius2, radius3, radius4, radius5 };
}

function getFunctionalButtons() {
	const clearButton = document.querySelector('#clear');
	return { clearButton };
}
