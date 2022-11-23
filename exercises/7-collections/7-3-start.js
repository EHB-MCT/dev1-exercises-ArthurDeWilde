"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}

function drawlanes() {
    let space = height / 5;
    for (let i = 0; i < 5; i++) {
        if (i % 2) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "lightgray";
        }
        context.fillRect(0, 0 + i * space, width, space);

    }
}

function draw() {
    drawlanes();
    let space = height / 5;
    drawSnail(space / 2, space / 2, space, 1);
    drawSnail(space / 2, space / 2 + 125, space, 2);
    drawSnail(space / 2, space / 2 + 250, space, 3);
    drawSnail(space / 2, space / 2 + 375, space, 4);
    drawSnail(space / 2, space / 2 + 500, space, 5);


}

function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}