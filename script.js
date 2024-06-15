"use strict";

const navToggleButton = document.querySelector(".header__nav-toggle");
const navMenu = document.querySelector(".nav-collapse");
const dropdownToggle = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelectorAll(".nav__dropdown");
const headerNavIcon = document.querySelector(".header__nav-icon");
const dropdownToggleIcon = document.querySelectorAll(".nav__arrow-icon");

navToggleButton.addEventListener("click", function () {
  if (!navMenu.classList.contains("collapse")) {
    navMenu.classList.add("collapse");
    headerNavIcon.src = "images/icon-close-menu.svg";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    navMenu.classList.remove("collapse");
    headerNavIcon.src = "images/icon-menu.svg";
    document.querySelector("body").style.overflow = "visible";
  }
});

dropdownToggle.forEach((toggle, index) => {
  toggle.addEventListener("click", function () {
    if (!dropdownMenu[index].classList.contains("drop")) {
      dropdownMenu[index].classList.add("drop");
      dropdownToggleIcon[index].src = "images/icon-arrow-up.svg";
    } else {
      dropdownMenu[index].classList.remove("drop");
      dropdownToggleIcon[index].src = "images/icon-arrow-down.svg";
    }
  });
});
