"use strict";
export const fechaModal = (event) => {
  const modal = event.target.parentElement.parentNode;
  modal.classList.add("invisivel");
};
const modal = document.querySelector(".modal");

export const closeModal = () => {
  modal.classList.add("invisivel");
};
//ambos fezem o modal sumir


export const showModal = () => {
  modal.classList.remove("invisivel");
};
//faz o modal aparecer

