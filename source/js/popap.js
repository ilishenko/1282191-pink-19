var link = document.querySelector(".form__button");
var popup = document.querySelector(".page-main");
var popupGood = document.querySelector(".popup--good");
var popupError = document.querySelector(".popup--error");
//var closeGood = popupGood.querySelector(".popup__button--good");
//var closeError = popupError.querySelector(".popup__button--error");
var login = popup.querySelector("[name=surname]");
var name = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

/*link.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!login.value || !email.value) {
    popupError.classList.add("popup--show");
  } else {
    popupGood.classList.add("popup--show");
  }
});*/
