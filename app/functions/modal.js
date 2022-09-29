"use strict"
export const fechaModal = (event) => {
  const modal = event.target.parentElement.parentNode;
  modal.classList.add("invisivel");
};

export const closeModal = ()=>{
  const modal = document.querySelector(".modal");
  modal.classList.add("invisivel");
}
