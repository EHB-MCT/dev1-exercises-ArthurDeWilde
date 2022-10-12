"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;


drawSunset();

function drawSunset() {
    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "darkorange";
    context.fillRect(0, canvasHeight / 4, canvasWidth, canvasHeight / 4);
    context.fillStyle = "darkred";
    context.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
    context.beginPath();
    context.fillStyle = "white";
    context.arc(canvasWidth / 2, canvasHeight / 2, 300, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "blue";
    context.fillRect(0, canvasHeight * 3 / 4, canvasWidth, canvasHeight * 3 / 4);
}