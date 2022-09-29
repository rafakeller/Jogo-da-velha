"use strict";

import { casa_tabuleiro } from "../app.js";

const empatou = (element) => {
  return element !== undefined;
};

export const verificaEmpate = () => {
  const array_segundaClasse = new Array();

  for (let i = 0; i < 9; i++) {
    const segundaClasseEmpate = casa_tabuleiro[i].classList[1];

    array_segundaClasse.push(segundaClasseEmpate);
  }

  let verificaSegundaClasse = array_segundaClasse.every(empatou);

  if (verificaSegundaClasse === true) {
    return true;
  } else {
    return false;
  }
};
