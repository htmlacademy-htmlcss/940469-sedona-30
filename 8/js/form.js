const formLink = document.querySelector(".hotel-search");
const formPopup = document.querySelector(".hotel-selection-modal");
let formIn = formPopup.querySelector(".hotel-modal-in");
let formOut = formPopup.querySelector(".hotel-modal-out")

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.toggle("hotel-form-show");
  formPopup.classList.toggle("hotel-form-animate");
  formIn.focus();
});

formPopup.addEventListener("click", function (evt) {
  if (!formIn.value || !formOut.value) {
    evt.preventDefault();
    alert("Не заполнены обязательные поля дата заезда и дата выезда.");
  }
});
