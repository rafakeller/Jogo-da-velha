"use strict";

import { arrayParam } from "../app/app.js";
import { paraTempo } from "./paraTempo.js";

export const passaTempo = () => {
  if(arrayParam.tempo < 15){
    //adciona 1 unidade á "tempo"
    arrayParam.tempo += 1;
  }else{
    //Zera cronometro externo depois de 15s
    paraTempo(arrayParam);
  }

  //Mostra essa adição na tela html
  arrayParam.timer.innerHTML = arrayParam.tempo;
};


