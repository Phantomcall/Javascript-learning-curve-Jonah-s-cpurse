"use strict";

const modal = document.querySelector(`.modal`);
const overLay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overLay.classList.remove(`hidden`);
};

const closeMOdal = function () {
  modal.classList.add(`hidden`);
  overLay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeMOdal);
overLay.addEventListener(`click`, closeMOdal);

document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeMOdal();
  }
});
