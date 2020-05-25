var link = document.querySelector('.form__button');
var popup = document.querySelector('.page-main');
var popupGood = document.querySelector('.popup--good');
var popupError = document.querySelector('.popup--error');
var login = popup.querySelector('[name=surname]');
var name = popup.querySelector('[name=name]');
var form = popup.querySelector('form');
var email = popup.querySelector('[name=email]');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}
