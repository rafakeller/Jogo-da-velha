"use strict";
import { tempoJogada } from "./tempoJogada.js";
import { passaTempo } from "./passaTempo.js";

export const ativarTimer = (arrayParam) => {
  
  //Ativa uma função de trocar o "id" em determinado intervalo de tempo(ms)
  //Cronômetro interno
  arrayParam.temporizador = setTimeout(tempoJogada, 15000);

  //Chama a função "passa tempo" a cada 1s.
  //Cronômetro externo
  arrayParam.intervalo = setInterval(passaTempo, 1000);
};
