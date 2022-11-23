"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


window.onmousemove = (drawBouncingBall);


drawBouncingBall();

function drawBouncingBall() {
    let Xpos = 0;
    let Ypos = 0;
    context.fillStyle = "blue";
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            Utils.fillCircle(Xpos + i * 10, Ypos + j * 10, 3);
        }
    }
}


//requestAnimationFrame(NaamFunctie)
//framecount++;