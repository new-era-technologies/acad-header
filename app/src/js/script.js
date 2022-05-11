'use strict';

//declare elements
const buttons = document.querySelectorAll('.nav__button');
const subLists = document.querySelectorAll('.nav__sub_list');
const searchField = document.querySelector('.search');

//show/hide dropdown menu by clicking the button link
buttons.forEach(it => it.addEventListener('click', function(e) {
    if (!it.nextElementSibling.classList.contains('visible')) {
        for (let j = 0; j < buttons.length; j++) {
            if (e.target.parentNode.parentNode.children[j].children[1]) {
                e.target.parentNode.parentNode.children[j].children[1].classList.remove('visible');
            }
        }
    }
    it.nextElementSibling.classList.toggle('visible');
}));


//close dropdown/search menu if clicking outside
document.addEventListener('click', function(e) {
    if ((!e.target.matches('.nav__button')) && (!e.target.matches('.search__input'))) {
        for (let i = 0; i < subLists.length; i++) {
            subLists[i].classList.remove('visible');
            searchField.classList.remove('visible');
        }
    }
});