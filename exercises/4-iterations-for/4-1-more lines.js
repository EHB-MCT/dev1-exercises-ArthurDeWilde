"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 600;
let height = 300;

drawbackground();

function drawbackground() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    drawLines();
}

function drawLines() {
    for (let i = 0; i < 60; i++) {
        Utils.drawLine(0 + (10 * i), 0, width - (10 * i), height);
    }
    for (let i = 0; i < 30; i++) {
        Utils.drawLine(0, 0 + (10 * i), width, height - (10 * i));
    }
}