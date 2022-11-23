'use strict';

let text = document.getElementById('text');

let val;
let d_val = parseFloat(window.getComputedStyle(text).getPropertyValue('font-size'));


function init() {
    text.style.fontSize = d_val + "px";
}

function add() {
    val = parseFloat(window.getComputedStyle(text).getPropertyValue('font-size')) + 2;
    text.style.fontSize = val + "px";
}

function minus() {
    val = parseFloat(window.getComputedStyle(text).getPropertyValue('font-size')) - 2;
    text.style.fontSize = val + "px";
}

clear.addEventListener('click', () => {
    init();
})