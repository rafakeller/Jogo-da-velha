"use strict";
import { tempoJogada } from "./tempoJogada.js";
import { passaTempo } from "./passaTempo.js";

export const ativarTimer = (arrayParam) => {
  
  //Ativa uma função de trocar o "id" em determinado intervalo de tempo(ms)
  //Cronômetro interno
  arrayParam.temporizador = setTimeout(tempoJogada, 5000);

  //Chama a função "passa tempo" a cada 1s.
  //Cronômetro externo
  arrayParam.intervalo = setInterval(passaTempo, 1000);
};

//Ativa o cronometro externo para somar de 1 em 1 segundo 
//Ativa a função tempoJogada á cada 5 segundos