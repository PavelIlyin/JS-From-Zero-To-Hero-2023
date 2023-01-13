'use strict'

let menuBlock = document.querySelector('.menu-block');
let menuBtn = document.querySelector('.menu__btn')
let menu = document.querySelector('.menu');

menuBlock.addEventListener('click', function () {
    menuBlock.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})