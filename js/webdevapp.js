"use strict";

const overlay = document.querySelector(".overlay");
const userIcon = document.querySelector(".user__icon");
const hoverUser = document.querySelector(".hover__on__user");
const searchModal = document.querySelector(".search__modal");
const categoriesModal = document.querySelector(".categories__modal");
const cssFrameworks = document.querySelector(".css__frameworks");
const javascriptFrameworks = document.querySelector(".javascript__frameworks");
const backend = document.querySelector(".backend");

const searchHere = document.querySelector(".click__to__search");
const closeSearch = document.querySelector(".close__search");
const categories = document.querySelector(".categories");
const closeCategories = document.querySelector(".close__categories");
const btnFrontend = document.querySelector(".frontend__btn");
const btnBackend = document.querySelector(".backend__btn");
const btnFullStack = document.querySelector(".fullStack__btn");

const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector(".input");
const suggBox = document.querySelector(".autocom-box");

// Categories
categories.addEventListener("click", function () {
  categoriesModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden"; // lock scroll
});

closeCategories.addEventListener("click", function () {
  // add hidden class modal
  categoriesModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible"; // enabled scroll
});

// Search bar
inputBox.onkeyup = (e) => {
  let userData = e.target.value; // user entered dataa
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user char to lowercase and return only those word/sentec which are starts with user entered word
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active"); // show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); // hide autocomplete box
  }
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; // passing the user selected list data in textfield
  searchWrapper.classList.remove("active"); // hide autocomplete box
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

// Applying button for search
searchHere.addEventListener("click", function () {
  // remove hidden class from modal

  searchModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden"; // lock scroll
});

closeSearch.addEventListener("click", function () {
  // add hidden class modal
  searchModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible"; // enabled scroll
});

// Applying the 3 buttons for suggestions
btnFrontend.addEventListener("click", function () {
  if (cssFrameworks.classList.contains("hidden")) {
    cssFrameworks.classList.remove("hidden");
    javascriptFrameworks.classList.remove("hidden");
  }
  backend.classList.add("hidden");
});

btnBackend.addEventListener("click", function () {
  if (backend.classList.contains("hidden")) {
    backend.classList.remove("hidden");
  }
  cssFrameworks.classList.add("hidden");
  javascriptFrameworks.classList.add("hidden");
});

btnFullStack.addEventListener("click", function () {
  if (backend.classList.contains("hidden")) {
    backend.classList.remove("hidden");
  }
  if (cssFrameworks.classList.contains("hidden")) {
    cssFrameworks.classList.remove("hidden");
    javascriptFrameworks.classList.remove("hidden");
  }
});
