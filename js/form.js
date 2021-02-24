const formLink = document.querySelector(".hotel-search");
const formPopup = document.querySelector(".hotel-selection-modal");
const formIn = formPopup.querySelector(".hotel-modal-in");
const formOut = formPopup.querySelector(".hotel-modal-out");
const formSubmit = formPopup.querySelector(".selection-submit");
const formAdult = formPopup.querySelector(".adult");
const formChildren = formPopup.querySelector(".children");

let isStorageSupport = true;
let storageAdult = "0";
let storageChildren = "2";
let count = 0;

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
  if (!formIn.value || !formOut.value) {
    evt.preventDefault();
    if(count >= 1) {
      alert("Поля формы дата заезда и выезда обязательны для заполнения!");
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

