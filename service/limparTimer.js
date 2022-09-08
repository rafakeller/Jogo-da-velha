"use strict";
import { paraTempo } from "./paraTempo.js";

export const limparTimer = (arrayParam) => {
  //Zera o cronômetro interno á cada click
  clearTimeout(arrayParam.temporizador);
  
  
  clearInterval(arrayParam.intervalo);

  //Zera o cronometro externo a cada click
  paraTempo(arrayParam);
};
