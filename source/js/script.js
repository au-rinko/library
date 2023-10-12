'use strict';

//меню-бургер

const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header-menu");
const headerButton = document.querySelector(".nav-toggle");
const headerMenuLink = document.querySelectorAll(".header-menu__item");

const closeMenu = ()=>{
    headerNav.classList.remove("header__nav--opened");
    headerNav.classList.add("header__nav--closed");
}

const openMenu = ()=>{
    headerNav.classList.remove("header__nav--closed");
    headerNav.classList.add("header__nav--opened");
}

headerButton.addEventListener("click", (evt)=>{
    evt.preventDefault();
    if(headerNav.classList.contains("header__nav--opened")){
        closeMenu();
    }else{
       openMenu(); 
    }
})

headerMenuLink.forEach((item, key, arr)=>{
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

radio.forEach((item, key, arr)=>{
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
      sliderBtn = document.querySelectorAll(".about-slider__button"),
      sliderLeftArrow = document.querySelector('.about-slider__side-control--left'),
      sliderRightArrow = document.querySelector('.about-slider__side-control--right');

const removeClasses = (i)=>{
    slide[i].classList.remove("about-slider__item--active");
    sliderBtn[i].classList.remove("about-slider__button--active");
}


sliderBtn.forEach(function(item, key){
    item.addEventListener("click", function(evt){
        evt.preventDefault();
        for(let i = 0; i < sliderBtn.length; i++){
            removeClasses(i);
        }
        if(window.innerWidth < 1280){ 
            sliderBtn[key].classList.add("about-slider__button--active");
            slide[key].classList.add("about-slider__item--active");
        }else{
            sliderBtn[key].classList.add("about-slider__button--active");
            for(let i = 0; i < sliderBtn.length; i++){
                switch(key){
                    case 0: 
                        slide[i].style.order = i; 
                        break;
                    case 1:
                        slide[i].style.order = i; 
                        if(i == 0){
                            slide[i].style.order = sliderBtn.length;
                        }
                        break;
                    case 2: 
                        slide[i].style.order = i - 2;
                        if(i < 2){
                            slide[i].style.order = sliderBtn.length - i;
                        } 
                        break;
                }
            }
        }
     })
 });


sliderLeftArrow.addEventListener("click", (evt)=>{
    evt.preventDefault();
    for(let i = 0; i < slide.length; i++){
        if(slide[i].classList.contains("about-slider__item--active") && i == 0){
            removeClasses(i);
            slide[slide.length - 1].classList.add("about-slider__item--active");
            sliderBtn[slide.length - 1].classList.add("about-slider__button--active");
            break;
        }else if(slide[i].classList.contains("about-slider__item--active") && i > 0){
            removeClasses(i);
            slide[i - 1].classList.add("about-slider__item--active");
            sliderBtn[i - 1].classList.add("about-slider__button--active");
            break;
        }
    }
});

sliderRightArrow.addEventListener("click", (evt)=>{
    evt.preventDefault();
    for(let i = 0; i < slide.length; i++){
        if(slide[i].classList.contains("about-slider__item--active") && i == slide.length - 1){
            removeClasses(i);
            slide[0].classList.add("about-slider__item--active");
            sliderBtn[0].classList.add("about-slider__button--active");
            break;
        }else if(slide[i].classList.contains("about-slider__item--active") && i < slide.length - 1){
            removeClasses(i);
            slide[i + 1].classList.add("about-slider__item--active");
            sliderBtn[i + 1].classList.add("about-slider__button--active");
            break;
        }
    }
});


//модальные окна

const userMenuLogin = document.querySelector('.profile__link--login');
const userMenuRegister = document.querySelector('.profile__link--register');
const popup = document.querySelectorAll('.popup');
const popupLogin = document.querySelector('.login-popup');
const login = document.querySelector('[name=reader-email]');
const password = document.querySelector('[name=reader-pass]');
const popupLinkLogin = document.querySelector('.register-popup__link');
const libraryCardLogin = document.querySelector('.library-cards__button--login');
const popupRegister = document.querySelector('.register-popup');
const firstName = document.querySelector('[name=name]');
const lastName = document.querySelector('[name=last-name]');
const email = document.querySelector('[name=email]');
const signUpPassword = document.querySelector('[name=password]');
const popupLinkRegister = document.querySelector('.login-popup__link');
const libraryCardSignUp = document.querySelector('.library-cards__button--signup');
const bg = document.querySelector('.page-bg');
const closeButton = document.querySelectorAll('.close');


//открыть окно логина
const openLoginPopup = () =>{
    popupLogin.classList.remove('form-error');
    popupLogin.classList.remove('invisible');
    bg.classList.remove('invisible');
    login.focus();
};

//открыть окно регистрации
const openRegisterPopup = () =>{
    popupRegister.classList.remove('form-error');
    popupRegister.classList.remove('invisible');
    bg.classList.remove('invisible');
    firstName.focus();
};

//закрыть модальное окно
const closeModal = (popupName) =>{
    popupName.classList.add('invisible');
    bg.classList.add('invisible');
};


userMenuLogin.addEventListener("click", (evt)=>{
    evt.preventDefault();
    openLoginPopup();
});

userMenuRegister.addEventListener("click", (evt)=>{
    evt.preventDefault();
    openRegisterPopup();
});

popupLinkLogin.addEventListener("click", (evt)=>{
    evt.preventDefault();
    closeModal(popupRegister);
    openLoginPopup();
});

popupLinkRegister.addEventListener("click", (evt)=>{
    evt.preventDefault();
    closeModal(popupLogin);
    openRegisterPopup();
});

libraryCardSignUp.addEventListener("click", (evt)=>{
    evt.preventDefault();
    openRegisterPopup();
});

libraryCardLogin.addEventListener("click", (evt)=>{
    evt.preventDefault();
    openLoginPopup();
});

closeButton.forEach(function(item, key, arr){
    arr[key].addEventListener("click", ()=>{
        closeModal(popup[key]);
    })
});

bg.addEventListener("click", ()=>{
    popup.forEach(popup=>{
        closeModal(popup);
    })
});

window.addEventListener("keydown", (evt)=>{
    if(evt.keyCode === 27){
        evt.preventDefault();
        popup.forEach(popup=>{
            closeModal(popup);
        })
    }
});

//ошібка в форме

popupLogin.addEventListener("submit", (evt)=>{
    if(!login.value || !password.value){
        evt.preventDefault();  
        popupLogin.classList.remove('form-error');
        popupLogin.focus();
        popupLogin.classList.add('form-error');
    } 
})

popupRegister.addEventListener("submit", (evt)=>{
    if(!firstName.value || !lastName.value || !email.value || !signUpPassword.value){
        evt.preventDefault();  
        popupRegister.classList.remove('form-error');
        popupRegister.focus();
        popupRegister.classList.add('form-error');
    } 
})
