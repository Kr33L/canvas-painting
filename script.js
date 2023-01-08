const clearButton = document.querySelector("#clear");
let isDrawing = false;

function getCanvas() {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	return { canvas, ctx };
}

function clearCanvas({ ctx, canvas }) {
	const { width, height } = canvas;
	ctx.clearRect(0, 0, width, height);
}

function drawCircle(ctx, x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.fill();
}

function onMouseMove(event) {
	if (!isDrawing) return;
	const { ctx } = getCanvas();
	drawCircle(ctx, event.clientX, event.clientY, 5);
}

function changeBrushSize() {}

clearButton.addEventListener("click", clearCanvas(getCanvas()));

const canvas = getCanvas().canvas;
canvas.addEventListener("mousedown", () => {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mouseup", () => {
		canvas.removeEventListener("mousemove", onMouseMove);
	});
});
