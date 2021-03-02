const details = document.querySelector('details');
const formLink = document.querySelector(".hotel-search");
const formPopup = document.querySelector(".hotel-selection-modal");
const formIn = formPopup.querySelector(".hotel-modal-in");
const formOut = formPopup.querySelector(".hotel-modal-out");
const formSubmit = formPopup.querySelector(".selection-submit");
const formAdult = formPopup.querySelector(".adult");
const formChildren = formPopup.querySelector(".children");

// Эта часть констант для работы кнопок полей number

const minusAdult = formPopup.querySelector(".hotel-selection-minus");
const plusAdult = formPopup.querySelector(".hotel-selection-plusone");
const minusChild = formPopup.querySelector(".hotel-selection-minustwo");
const plusChild = formPopup.querySelector(".hotel-selection-plustwo");

let isStorageSupport = true;
let storageAdult = 0;
let storageChildren = 2;
let count = 0;

// Эта часть переменных для работы кнопок полей number

let countChildren;
let countAdults;

formPopup.classList.add("hotel-form-show");

try {
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.toggle("hotel-form-show");
  formPopup.classList.toggle("hotel-form-animate");
  formPopup.classList.remove("form-error");

  if (storageAdult || storageChildren) {
    formAdult.value = storageAdult;
    formChildren.value = storageChildren;
  }

  formIn.focus();
});

formSubmit.addEventListener("click", function (evt) {
  if (!formIn.value || !formOut.value || !formAdult.value || !formChildren.value) {
    evt.preventDefault();
    if(count >= 1) {
      alert("Все поля формы являются обязательными для заполнения!");
    }
    formPopup.classList.add("form-error");
    count++;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", formAdult.value);
      localStorage.setItem("children", formChildren.value);
    }
  }
});

// Эта часть скрипта для работы кнопок полей number

minusAdult.addEventListener("click", function (evt) {
  countAdults = formAdult.value;
  if(countAdults > 0) {
    formAdult.value = Number(countAdults) - 1;
  } else {
    formAdult.value = 0;
  }
});

plusAdult.addEventListener("click", function (evt) {
  countAdults = formAdult.value;
  formAdult.value = Number(countAdults) + 1;
});

minusChild.addEventListener("click", function (evt) {
  countChildren = formChildren.value;
  if(countChildren > 0) {
    formChildren.value = Number(countChildren) - 1;
  } else {
    formChildren.value = 0;
  }
});

plusChild.addEventListener("click", function (evt) {
  countChildren = formChildren.value;
  formChildren.value = Number(countChildren) + 1;
});
