"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


drawBricks();

function drawBricks() {
    context.fillStyle = "darkred";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            context.fillRect(50 + i * 105 + 50 * (j % 2), 50 + j * 55, 100, 50);
        }
    }
}