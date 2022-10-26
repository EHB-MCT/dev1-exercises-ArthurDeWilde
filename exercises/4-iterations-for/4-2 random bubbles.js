"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let innerWidth = context.canvas.width;
let innerHeight = context.canvas.height;

drawBackground();

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, innerWidth, innerHeight);
    drawBubbles();
}

function drawBubbles() {
    context.fillStyle = Utils.hsla(Utils.randomNumber(0, 350), 50, 100, 50);
    for (let i = 0; i < 200; i++) {
        Utils.fillCircle(Utils.randomNumber(200 + (10 * i), innerWidth - 200), Utils.randomNumber(200 + (10 * i), innerWidth - 200));
    }
}