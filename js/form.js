const formLink = document.querySelector(".hotel-search");
const formPopup = document.querySelector(".hotel-selection-modal");
let formIn = formPopup.querySelector(".hotel-modal-in");
let formOut = formPopup.querySelector(".hotel-modal-out");
let formSubmit = formPopup.querySelector(".selection-submit");

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
    formPopup.classList.add("form-error");
    alert("Поля формы дата заезда и выезда обязательны для заполнения!")
  }
});
