'use strict';

//меню-бургер

const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header-menu");
const headerButton = document.querySelector(".nav-toggle");
const headerMenuLink = document.querySelectorAll(".header-menu__item");

const closeMenu = function(){
    headerNav.classList.remove("header__nav--opened");
    headerNav.classList.add("header__nav--closed");
}

const openMenu = function(){
    headerNav.classList.remove("header__nav--closed");
    headerNav.classList.add("header__nav--opened");
}

headerButton.addEventListener("click", function(evt){
    evt.preventDefault();
    if(headerNav.classList.contains("header__nav--opened")){
        closeMenu();
    }else{
       openMenu(); 
    }
})

headerMenuLink.forEach(function(item, key, arr){
    arr[key].addEventListener("click", function(){
        if(headerNav.classList.contains("header__nav--opened")){
            closeMenu();
        }
    });
});

window.addEventListener('click', e => {
    const target = e.target; // находим элемент, на котором был клик
    if (!target.closest(".header-menu") && !target.closest(".nav-toggle")) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        closeMenu();
    }
});




// слайдер

const slide = document.querySelectorAll(".about-slider__item"),
      sliderBtn = document.querySelectorAll(".about-slider__button");

sliderBtn[0].addEventListener("click", function(evt){
    evt.preventDefault();
    for(let i = 0; i < sliderBtn.length; i++){
        slide[i].classList.remove("about-slider__item--active");
        sliderBtn[i].classList.remove("about-slider__button--active"); 
        if(i == 4){
            slide[i].style.order = 0;
        }else{
            slide[i].style.order = i + 1;
        }
    };
    sliderBtn[0].classList.add("about-slider__item--active");
    slide[0].classList.add("about-slider__button--active");
});

sliderBtn[1].addEventListener("click", function(evt){
    evt.preventDefault();
    for(let i = 0; i < sliderBtn.length; i++){
        slide[i].classList.remove("about-slider__item--active");
        sliderBtn[i].classList.remove("about-slider__button--active");
        slide[i].style.order = i; 
    };
    sliderBtn[1].classList.add("about-slider__item--active");
    slide[2].classList.add("about-slider__button--active");
});