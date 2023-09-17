const profileToggle = document.querySelector(".header__profile-toggle"),
      profileList = document.querySelector(".profile__list");

profileToggle.addEventListener("hover", function(evt){
    evt.preventDefault();
    profileList.classList.remove("profile__list--closed");
})