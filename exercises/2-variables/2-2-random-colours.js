"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
let canvasWidth = context.canvas.width;

drawRandom();

function drawRandom() {
    drawSquare(0, 900);
    drawSquare(50, 800);
    drawSquare(100, 700);
    drawSquare(150, 600);
    drawSquare(200, 500);
    drawSquare(250, 400);
    drawSquare(300, 300);
    drawSquare(350, 200);
    drawSquare(400, 100);

}

function drawSquare(pos, size) {
    let red = Math.random() * 255;
    let blue = Math.random() * 255;
    let green = Math.random() * 255;

    context.fillStyle = "rgb(" + red + "," + blue + "," + green + ")";
    context.fillRect(pos + 100, pos + 100, size, size);
}