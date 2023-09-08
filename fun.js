const canvas = document.getElementById('pixel-canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');
const colorPicker = document.getElementById('color-picker');
const pixelSizeInput = document.getElementById('pixel-size');

let painting = false;

canvas.addEventListener('mousedown', () => {
    painting = true;
});

canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', drawPixel);

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value;
});

pixelSizeInput.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value;
});

function drawPixel(e) {
    if (!painting) return;

    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
