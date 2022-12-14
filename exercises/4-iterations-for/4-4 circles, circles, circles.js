"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;


//drawCircles();
//drawCirclesHorizontal();
//drawCirclesVertical();
drawCirclesCrissCross();



function drawCircles() {
    context.fillStyle = Utils.hsla(178, 98, 78, 50);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            Utils.fillCircle(0 + i * 125, 0 + j * 90, 10 + j * 10);
        }
    }
}

function drawCirclesHorizontal() {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.rgb(255 * (j % 2), 0, 255 - 255 * (j % 2));
            Utils.fillCircle(0 + i * 128, 0 + j * 128, 64);
        }
    }
}

function drawCirclesVertical() {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.rgb(255 * (i % 2), 0, 255 - 255 * (i % 2));
            Utils.fillCircle(0 + i * 128, 0 + j * 128, 64);
        }
    }
}


function drawCirclesCrissCross() {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.fillStyle = Utils.rgb(255 * (j % 2 + i % 2), 0, 255 - 255 * (j % 2 + i % 2));
            Utils.fillCircle(0 + i * 128, 0 + j * 128, 64);
        }
    }
}