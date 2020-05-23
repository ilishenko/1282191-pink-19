var setingsFoto = document.querySelector('.post-form__setings');

if (setingsFoto) {
  var setingsCrop = document.querySelector('.post-form__block--crop');
  var setingsFill = document.querySelector('.post-form__block--fill');
  var setingsContrast = document.querySelector('.post-form__block--contrast');
  var toggleCrop = document.querySelector('.post-form__button--crop');
  var toggleFill = document.querySelector('.post-form__button--fill');
  var toggleContrast = document.querySelector('.post-form__button--contrast');

  toggleCrop.addEventListener('click', function() {
    if (setingsCrop.classList.contains('post-form__block--active')) {
      return;
    } else {
      setingsFill.classList.remove('post-form__block--active');
      setingsContrast.classList.remove('post-form__block--active');
      setingsCrop.classList.add('post-form__block--active');
    }
  });

  toggleFill.addEventListener('click', function() {
    if (setingsFill.classList.contains('post-form__block--active')) {
      return;
    } else {
      setingsCrop.classList.remove('post-form__block--active');
      setingsContrast.classList.remove('post-form__block--active');
      setingsFill.classList.add('post-form__block--active');
    }
  });

  toggleContrast.addEventListener('click', function() {
    if (setingsContrast.classList.contains('post-form__block--active')) {
      return;
    } else {
      setingsCrop.classList.remove('post-form__block--active');
      setingsFill.classList.remove('post-form__block--active');
      setingsContrast.classList.add('post-form__block--active');
    }
  });
};
