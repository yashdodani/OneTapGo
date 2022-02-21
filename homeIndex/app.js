"use strict";
var suggestions = [
  "Facebook",
  "Google",
  "type",
  "Instagram",
  "Yash",
  "Code",
  "Programming",
  "Javascript",
  "Web Development",
  "Android Development",
  "Android Development",
  "Android Development",
  "Android Development",
  "Android Development",
  "Ethical Hacking",
];

const loginModal = document.querySelector(".login__modal");
const overlay = document.querySelector(".overlay");
const userIcon = document.querySelector(".user__icon");
const hoverUser = document.querySelector(".hover__on__user");
const searchModal = document.querySelector(".search__modal");
const categoriesModal = document.querySelector(".categories__modal");

const inputLoginDiv = document.querySelector(".input__login");

const btnLogin = document.querySelectorAll(".btn__login");
const btnCloseModal = document.querySelector(".close__login");
const btnSendOTP = document.querySelector(".btn__sendotp");
const inputNumber = document.querySelector(".input__number");
const divOTP = document.querySelector(".otp");
const inputOTP = document.querySelector(".input__otp");
const continueLogin = document.querySelector(".btn__continue--login");
const searchHere = document.querySelector(".click__to__search");
const closeSearch = document.querySelector(".close__search");
const categories = document.querySelector(".categories");
const closeCategories = document.querySelector(".close__categories");

const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector(".input");
const suggBox = document.querySelector(".autocom-box");

// functions

const openLogin = function () {
  // remove hidden class from modal
  loginModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden"; // lock scroll
};

const closeLogin = function () {
  // add hidden class modal
  loginModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible"; // enabled scroll
};

const OTP = Math.trunc(Math.random() * 10000);
let inputValue;

// Event handlers

btnSendOTP.addEventListener("click", function () {
  const number = inputNumber.value ? inputNumber.value : 0;
  inputValue = Number(inputNumber.value);

  console.log(number);

  if (number > 0) {
    console.log(OTP);

    alert(`Your OTP is ${OTP}`);
    divOTP.classList.remove("hidden");
    btnSendOTP.classList.add("hidden");
    continueLogin.classList.remove("hidden");
  }
});

continueLogin.addEventListener("click", function () {
  if (Number(inputOTP.value) === Number(OTP)) {
    loginModal.classList.add("hidden");
    overlay.classList.add("hidden");
    inputNumber.value = "";
    divOTP.classList.add("hidden");
    btnSendOTP.classList.remove("hidden");
    continueLogin.classList.add("hidden");
    btnLogin.forEach((item) => {
      item.textContent = "Let's go!";
      item.classList.add("hidden");
      item.style.width = "150px";
      console.log(item.classList.contains("btn__login"));
    });
  } else {
    alert("Please enter the correct OTP");
  }
  document.getElementsByTagName("body")[0].style.overflow = "visible"; // enabled scroll
});

btnLogin.forEach((item) => {
  item.addEventListener("click", openLogin);
});
btnCloseModal.addEventListener("click", closeLogin);

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
  if (inputValue > 0) {
    searchModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.getElementsByTagName("body")[0].style.overflow = "hidden"; // lock scroll
  } else {
    loginModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
});

closeSearch.addEventListener("click", function () {
  // add hidden class modal
  searchModal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible"; // enabled scroll
});

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
