'use strict';

const buttons = document.querySelectorAll('.nav__button');
const subLists = document.querySelectorAll('.nav__sub_list');

buttons.forEach(it => it.addEventListener('click', function() {
    it.nextElementSibling.classList.toggle('visible');
}));

window.onclick = function(e) {
    if (!e.target.matches('.nav__button')) {
        for (let i = 0; i < subLists.length; i++) {
            subLists[i].classList.remove('visible');
        }
    }
};