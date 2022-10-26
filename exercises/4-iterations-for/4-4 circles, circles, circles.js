"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


drawCircles();

function drawCircles() {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.rgb(255 * (j % 2), 0, 255 - 255 * (j % 2));
            Utils.fillCircle(0 + i * 128, 0 + j * 128, 64);
        }
    }
}