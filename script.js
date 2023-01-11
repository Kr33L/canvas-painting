const { canvas, ctx } = getCanvas();
const { radius1, radius2, radius3, radius4, radius5 } = getRadiusButtons();
const { clearButton } = getFunctionalButtons();

let mousePosition = { x: 0, y: 0 };
let lineThickness = radius1;
let lineColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
let isDrawing = false;
let moveTimer = 0;

radius1.addEventListener('click', () => changeRadius(4));
radius2.addEventListener('click', () => changeRadius(6));
radius3.addEventListener('click', () => changeRadius(8));
radius4.addEventListener('click', () => changeRadius(10));
radius5.addEventListener('click', () => changeRadius(12));

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
	moveTimer++;
	console.log(moveTimer);

	if (moveTimer >= 25) {
		lineColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
		moveTimer = 0;
	}

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

// function downloadCanvas() {

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
