var link = document.querySelector(".form__button");
var popup = document.querySelector(".page-main");
var popupGood = document.querySelector(".popup__good");
var popupError = document.querySelector(".popup__error");
var closeGood = popupGood.querySelector(".popup__button-good");
var closeError = popupError.querySelector(".popup__button-error");
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

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!login.value || !email.value) {
    popupError.classList.add("popup__error--open");
  } else {
    popupGood.classList.add("popup__good--open");
  }
}




/*link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
  login.value = storage;
  email.focus();
} else {
  login.focus();
}
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
form.addEventListener("submit", function (evt) {
if (!login.value || !email.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
}
});

/* Нажатие на ESC */
/*
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});*/
