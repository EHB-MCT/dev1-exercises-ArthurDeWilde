"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (y < height / 4 * 3 && x < width / 4 * 3 && y > height / 4 && x > width / 4) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = "white";
        }
        /*  let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
          if (distance < 100) {
              context.fillStyle = "red";
          } else {
              context.fillStyle = "white";
          }*/
        Utils.fillCircle(x, y, 5);

    }
    /* for (let i = 0; i < 10000; i++) {
         let x = Math.random() * width;
         let y = Math.random() * height;
         if (y < height / 3) {
             context.fillStyle = "red";
         } else if (y < height / 1.5) {
             context.fillStyle = "white";
         } else {
             context.fillStyle = "blue";
         }
         Utils.fillCircle(x, y, 5);
     }*/
}