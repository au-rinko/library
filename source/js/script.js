// const profileToggle = document.querySelector(".header__profile-toggle"),
//       profileList = document.querySelector(".profile__list");

// profileToggle.addEventListener("hover", function(evt){
//     evt.preventDefault();
//     profileList.classList.remove("profile__list--closed");
// })

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

//кнопка меню

const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector(".header-menu");
const headerButton = document.querySelector(".nav-toggle");
const headerMenuLink = document.querySelectorAll(".header-menu__item");

headerButton.addEventListener("click", function(evt){
    evt.preventDefault();
    if(headerNav.classList.contains("header__nav--opened")){
        headerNav.classList.remove("header__nav--opened");
        headerNav.classList.add("header__nav--closed");
    }else{
        headerNav.classList.remove("header__nav--closed");
        headerNav.classList.add("header__nav--opened");
    }
})

headerMenuLink.forEach(function(item, key, arr){
    arr[key].addEventListener("click", function(){
        if(headerNav.classList.contains("header__nav--opened")){
            headerNav.classList.remove("header__nav--opened");
            headerNav.classList.add("header__nav--closed");
        }
    });
});