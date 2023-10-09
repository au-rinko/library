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


//радио батоны

const radio = document.querySelectorAll(".radio");
const favouriteItems = document.querySelectorAll(".favorites__item");
const makeInvisible = (className)=>{
    favouriteItems.forEach(function(item, key, arr){
        arr[key].classList.add("invisible");
        if(arr[key].classList.contains(className)){
            arr[key].classList.remove("invisible");
        }
    })
}

radio.forEach(function(item, key, arr){
    arr[key].addEventListener("change", function(){
        if(arr[key].checked){
            switch (arr[key].value){
                case 'winter': 
                    makeInvisible('favorites__item--winter');
                    break;
                case 'spring':
                    makeInvisible('favorites__item--spring');
                    break;
                case 'summer':
                    makeInvisible('favorites__item--summer');
                    break;
                case 'autumn':
                    makeInvisible('favorites__item--autumn');
                    break;
            }
        }
    });
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


//модальные окна

const userMenuLogin = document.querySelector('.profile__link--login');
const userMenuRegister = document.querySelector('.profile__link--register');
const popup = document.querySelectorAll('.popup');
const popupLogin = document.querySelector('.login-popup');
const popupRegister = document.querySelector('.register-popup');
const bg = document.querySelector('.page-bg');
const closeButton = document.querySelectorAll('.close');
// const popupClose = (popupName)=>{
    
// }

const closeModal = (popupName) =>{
    popupName.classList.add('invisible');
    bg.classList.add('invisible');
};

userMenuLogin.addEventListener("click", (evt)=>{
    evt.preventDefault();
    popupLogin.classList.remove('invisible');
    bg.classList.remove('invisible');
});

userMenuRegister.addEventListener("click", (evt)=>{
    evt.preventDefault();
    popupRegister.classList.remove('invisible');
    bg.classList.remove('invisible');
});

closeButton.forEach(function(item, key, arr){
    arr[key].addEventListener("click", ()=>{
        closeModal(popup[key]);
    })
});

