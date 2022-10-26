"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles() {
    for (let i = 0; i < 100; i++) {
        context.fillStyle = Utils.hsla(Utils.randomNumber(100, 255), 100, 75, 50);
        Utils.fillCircle(Utils.randomNumber(200, width - 200), Utils.randomNumber(200, height - 200), Utils.randomNumber(10, 70));
    }
}