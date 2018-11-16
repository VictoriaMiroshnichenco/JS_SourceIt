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

function isPointInTheScope(p1, p2) {
    return ((Math.abs(p1)<=4&&p2<=4))&&( p2 >= 0 &&(((p1<=0)&&(p2<=4+p1))||((p1>=0)&&(p2<=4-p1))));
}
/*function isPointInTheScope(p1, p2) {
    return ((Math.abs(p1)<=4&&p2<=4))&&((p2 <= 4 && p2 >= 0)&&(((p1<=0)&&(p2<=4+p1))||((p1>=0)&&(p2<=4-p1))));
}*/
if(isNaN(x)||isNaN(y)){
    msg=errorMsg;
}else {
    if (isPointInTheScope(x, y)) {
        msg = intoTheScope;
    } else {
        msg = outTheScope;
    }
}
console.log(msg);