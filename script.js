const canvas = document.querySelector("canvas");
const clearButton = document.querySelector("#clear");

const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const clearCanvas = () => ctx.clearRect(0, 0, width, height);

function draw(event) {
  ctx.beginPath();
  ctx.arc(event.clientX, event.clientY, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

clearButton.addEventListener("click", clearCanvas);

canvas.addEventListener("mousedown", (event) => {
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", draw);
  });
});
