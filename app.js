"use strict";

const btnLogin = document.querySelectorAll(".btn__login");
const btnCloseModal = document.querySelector(".close__login");
const loginModal = document.querySelector(".login__modal");
const overlay = document.querySelector(".overlay");
const inputLoginDiv = document.querySelector(".input__login");
const btnSendOTP = document.querySelector(".btn__sendotp");
const inputNumber = document.querySelector(".input__number");
const divOTP = document.querySelector(".otp");
const inputOTP = document.querySelector(".input__otp");
const continueLogin = document.querySelector(".btn__continue--login");

// functions

const openLogin = function () {
  // remove hidden class from modal
  loginModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeLogin = function () {
  // add hidden class modal
  loginModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const OTP = Math.trunc(Math.random() * 10000);

btnSendOTP.addEventListener("click", function () {
  const number = inputNumber.value ? inputNumber.value : 0;
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
});

// Event handlers

btnLogin.forEach((item) => {
  item.addEventListener("click", openLogin);
});
btnCloseModal.addEventListener("click", closeLogin);
