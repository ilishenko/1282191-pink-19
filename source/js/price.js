var price = document.querySelector('.slider-price__list');
var toggleLeft = document.querySelector('.slider__toggle--1');
var toggle = document.querySelector('.slider__toggle--2');
var toggleRight = document.querySelector('.slider__toggle--3');

toggleLeft.addEventListener('click', function() {
  if (price.classList.contains('slider-price__list--left')) {

  } else {
    price.classList.remove('slider-price__list--center');
    price.classList.remove('slider-price__list--right');
    price.classList.add('slider-price__list--left');
  }
});

toggle.addEventListener('click', function() {
  if (price.classList.contains('slider-price__list--center')) {

  } else {
    price.classList.remove('slider-price__list--left');
    price.classList.remove('slider-price__list--right');
    price.classList.add('slider-price__list--center');
  }
});

toggleRight.addEventListener('click', function() {
  if (price.classList.contains('slider-price__list--right')) {

  } else {
    price.classList.remove('slider-price__list--left');
    price.classList.remove('slider-price__list--center');
    price.classList.add('slider-price__list--right');
  }
});
