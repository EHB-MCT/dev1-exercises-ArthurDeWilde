"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawWarpedEllipses();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawWarpedEllipses() {
    let i = 0;
    let gray = 250;
    context.strokeStyle = "black";
    while (i <= 5) {
        context.fillStyle = Utils.rgb(gray - i * 50, gray - i * 50, gray - i * 50);
        Utils.fillAndStrokeEllipse(200, 200, 30 + i * 24, 150 - i * 25);
        i++;
    }
}