"use strict"

import { inputVezJogador, painelJogador } from "../app/app.js";
import { mapSwitch } from "../app/functions/definirPeca.js";

export const mudaVez = (tabuleiro) =>{
   //Alterando o valor do painel á cada "click"
   inputVezJogador.value = tabuleiro.getAttribute("id");

   const textoFormatado = "Vez de ";

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
   const imagePeca = document.querySelector(".image_peca");
   painelJogador.innerHTML = textoFormatado;
   

   imagePeca.classList.remove(imagePeca.classList[2]);
   imagePeca.classList.remove(imagePeca.classList[3]);

   imagePeca.classList.add(`${inputVezJogador.value}`);
   imagePeca.classList.add(`${mapSwitch.get(inputVezJogador.value)}`);
   

   
}

//Faz aparecer uma borda branca no placar do jogador q estiver na sua vez de jogar
//Faz aparecer o texto de qual jogador esta jogando acima