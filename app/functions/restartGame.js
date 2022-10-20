"use strict";
import { casa_tabuleiro } from "../app.js";
import { arrayParam } from "../app.js";

export const restartGame = (limparTimer) => {
  casa_tabuleiro.forEach((casa) => {
    const findClass1 = casa.classList[1];
    const findClass2 = casa.classList[2];
    if (findClass1 !== undefined && findClass2 !== undefined) {
      casa.classList.remove(findClass1);
      casa.classList.remove(findClass2);
    }
  });
  limparTimer(arrayParam);
};
//remove as classas de cada casa, fazendo tudo ficar vazio após ter preenchido todas