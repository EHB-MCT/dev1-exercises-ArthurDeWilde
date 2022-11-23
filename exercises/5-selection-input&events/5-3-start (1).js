"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

document.getElementById('cardsButton').onclick = drawCards;
drawCards();

function drawCards() {

    let value = Number(document.getElementById('cardsAmount').value);
    console.log(value);
    for (let i = 0; i < value; i++) {
        drawCard(50 + i % 8 * 150, 50 + Math.floor(i / 8) * 225);
    }

}

function drawCard(x, y) {
    context.fillStyle = "white";
    context.strokeStyle = "#00000";
    context.fillRect(x, y, 125, 200);
    context.strokeRect(x, y, 125, 200);
    let randomNumber = Math.ceil(Math.random() * 13);
    context.fillStyle = "red";
    console.log(randomNumber);
    context.font = "32px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (randomNumber == 11) {
        context.fillText("J", x + 125 / 2, y + 150);
    } else if (randomNumber == 12) {
        context.fillText("Q", x + 125 / 2, y + 150);
    } else if (randomNumber == 13) {
        context.fillText("K", x + 125 / 2, y + 150);
    } else
        context.fillText(randomNumber, x + 125 / 2, y + 150);
    let randomShape = Math.floor(Math.random() * 4);
    if (randomShape == 0) {
        drawHeart(x + 60, y + 60);
    } else if (randomShape == 1) {
        drawClover(x + 60, y + 60);
    } else if (randomShape == 2) {
        drawPike(x + 60, y + 60);
    } else if (randomShape == 3) {
        drawDiamond(x + 60, y + 60);
    }
}

function drawHeart(x, y) {
    context.fillStyle = "red";

    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    context.fillStyle = "black";

    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}