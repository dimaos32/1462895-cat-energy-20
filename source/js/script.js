let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

let programForm = document.querySelector('.program-selection__form');
let programFormName = document.querySelector('.program-selection__input--name');
let programFormWeight = document.querySelector('.program-selection__input--weight');
let programFormEmail = document.querySelector('.program-selection__input--email');
let programFormPhone = document.querySelector('.program-selection__input--phone');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (programForm) {
  programForm.addEventListener('submit', function(evt) {
    if (!programFormName.value || !programFormWeight.value || !programFormEmail.value || !programFormPhone.value) {
      evt.preventDefault();

      if (!programFormPhone.value) {
        programFormPhone.classList.add('program-selection__input--error');
        programFormPhone.focus();
      }

      if (!programFormEmail.value) {
        programFormEmail.classList.add('program-selection__input--error');
        programFormEmail.focus();
      }

      if (!programFormWeight.value) {
        programFormWeight.classList.add('program-selection__input--error');
        programFormWeight.focus();
      }

      if (!programFormName.value) {
        programFormName.classList.add('program-selection__input--error');
        programFormName.focus();
      }
    }

    programFormPhone.addEventListener('input', function() {
      programFormPhone.classList.remove('program-selection__input--error');
    });

    programFormEmail.addEventListener('input', function() {
      programFormEmail.classList.remove('program-selection__input--error');
    });

    programFormWeight.addEventListener('input', function() {
      programFormWeight.classList.remove('program-selection__input--error');
    });

    programFormName.addEventListener('input', function() {
      programFormName.classList.remove('program-selection__input--error');
    });
  });
}
