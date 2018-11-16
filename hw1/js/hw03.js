'use strict';
const intoTheScope = "Точка попадает в область";
const outTheScope = "Точка НЕ попадает в область";
const errorMsg = "Invalid data";
const typeX = "Type  X ";
const typeY = "Type Y";
let msg;
let x = prompt(typeX);
x = parseFloat(x);
while (isNaN(x)) {
    alert(errorMsg);
    x = prompt(typeX);
}
let y = prompt(typeY);
y = parseFloat(y);
while (isNaN(y)) {
    alert(errorMsg);
    y = prompt(typeY);
}

function isPointInArealBottomRight(p1, p2) {
    return (p1 >= 0 && p2 <= 0 && p2 <= -p1);
}

function isPointInAreaBottomLeft(p1, p2) {
    return (p1 <= 0 && p2 <= 0 && p2 <= p1);
}

function isPointInAreaTopLeft(p1, p2) {
    return (p1 <= 0 && p2 >= 0 && p2 >= -p1);
}

function isPointInAreaTopRight(p1, p2) {
    return (p1 >= 0 && p2 >= 0 && p2 >= p1);
}

function isPointInTheScope(p1, p2) {
    return (Math.abs(p1) <= 1 && Math.abs(p2) <= 1) && (isPointInArealBottomRight(p1, p2)
        || isPointInAreaBottomLeft(p1, p2) || isPointInAreaTopLeft(p1, p2)
        || isPointInAreaTopRight(p1, p2));
}

if (isNaN(x) || isNaN(y)) {
    msg = errorMsg;
} else {
    if (isPointInTheScope(x, y)) {
        msg = intoTheScope;
    } else {
        msg = outTheScope;
    }
}
console.log(msg);