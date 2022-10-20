"use strict";
import { paraTempo } from "./paraTempo.js";

export const limparTimer = (arrayParam) => {
  clearTimeout(arrayParam.temporizador);

  clearInterval(arrayParam.intervalo);

  paraTempo(arrayParam);
};

//Zera os cronometros internos e externos á cada click (jogada)
