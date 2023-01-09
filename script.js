const clearButton = document.querySelector('#clear');
const { canvas, ctx } = getCanvas();

const LINE_THICKNESS = 5;

let isDrawing = false;

clearButton.addEventListener('click', () => {
	clearCanvas(getCanvas());
});

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp);

function getCanvas() {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	return { canvas, ctx };
}

function clearCanvas({ ctx, canvas }) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(ctx, x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.fill();
}

function onMouseDown() {
	isDrawing = true;
}

function onMouseMove(event) {
	if (isDrawing === false) return;
	drawCircle(ctx, event.clientX, event.clientY, LINE_THICKNESS);
}

function onMouseUp() {
	isDrawing = false;
}

//function changeBrushSize() {}
