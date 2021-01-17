"use strict";
var container = document.querySelector('.container');
var url = 'https://source.unsplash.com/random/';
var rows = 5;
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}
function getRandomSize() {
    return getRandomNumber() + "x" + getRandomNumber() + " ";
}
for (var i = 0; i < rows * 3; i++) {
    var randomSize = getRandomSize();
    var img = document.createElement('img');
    img.src = "" + url + randomSize;
    container.appendChild(img);
}
