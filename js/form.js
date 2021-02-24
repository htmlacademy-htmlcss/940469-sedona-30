const formLink = document.querySelector(".hotel-search");
const formPopup = document.querySelector(".hotel-selection-modal");
const formIn = formPopup.querySelector(".hotel-modal-in");
const formOut = formPopup.querySelector(".hotel-modal-out");
const formSubmit = formPopup.querySelector(".selection-submit");
let isStorageSupport = true;
let storage = "";
let count = 0;

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.toggle("hotel-form-show");
  formPopup.classList.toggle("hotel-form-animate");
  formPopup.classList.remove("form-error");
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
  }
});

