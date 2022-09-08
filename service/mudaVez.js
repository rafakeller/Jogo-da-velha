"use strict"

import { inputVezJogador, painelJogador } from "../app/app.js";

export const mudaVez = (tabuleiro) =>{
   //Alterando o valor do painel á cada "click"
   inputVezJogador.value = tabuleiro.getAttribute("id");

   const textoFormatado = `${inputVezJogador.value[0].toUpperCase() + inputVezJogador.value.substr(1).replace("_", " ")}`
 
   painelJogador.innerHTML = textoFormatado;
}