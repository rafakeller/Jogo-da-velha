"use strict";
import { casa_tabuleiro } from "../app.js";
import { arrayParam } from "../app.js";

export const restartGame = (limparTimer) => {
  casa_tabuleiro.forEach((casa, id) => {
    const findClass = casa.classList[1];
    if (findClass !== undefined) {
      casa.classList.remove(findClass);
    }
  });
  limparTimer(arrayParam);
};
