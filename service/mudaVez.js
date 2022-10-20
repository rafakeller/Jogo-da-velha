"use strict"

import { inputVezJogador, painelJogador } from "../app/app.js";

export const mudaVez = (tabuleiro) =>{
   //Alterando o valor do painel á cada "click"
   inputVezJogador.value = tabuleiro.getAttribute("id");

   const textoFormatado = `${inputVezJogador.value[0].toUpperCase() + inputVezJogador.value.substr(1).replace("_", " ")}`;

   const jogador1 = document.querySelector('[data-jogador1Placar]');
   const jogador2 = document.querySelector('[data-jogador2Placar]');

   if(inputVezJogador.value === "jogador_1"){
      jogador1.classList.add("border_vez");
      jogador2.classList.remove("border_vez");
   }
   else{
      jogador2.classList.add("border_vez");
      jogador1.classList.remove("border_vez")
   }
 
   painelJogador.innerHTML = textoFormatado;
}

//Faz aparecer uma borda branca no placar do jogador q estiver na sua vez de jogar
//Faz aparecer o texto de qual jogador esta jogando acima