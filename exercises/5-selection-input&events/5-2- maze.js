"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


drawMaze();

function drawMaze() {
    context.lineWidth = 5;
    context.lineCap = "square";
    let space = 10;
    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            let r = Math.round(Math.random() * 2);
            if (r == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);

            }
        }
    }
}