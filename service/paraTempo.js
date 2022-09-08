"use strict";

export const paraTempo = ( arrayParam) => {

  //Zera o crômetro externo 
  arrayParam.tempo = 0;
  
  //Mostrando isso na tela html
  arrayParam.timer.innerHTML = arrayParam.tempo;
};

//variaveis estao no parametro pqnao consegui importar