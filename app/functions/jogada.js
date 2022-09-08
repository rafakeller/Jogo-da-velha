"use strict";
import { mudaVez } from "../../service/mudaVez.js";


//Função para aparecer uma figura a cada click
export const jogada = (id, vezJogador, casa_tabuleiro) => {
  casa_tabuleiro[id].classList.add(`${vezJogador}`);

  //Alternando entre a figura "x" e a figura "o";
  const tabuleiro = document.querySelector(`#${vezJogador}`);

  if (vezJogador === "jogador_1") {
    tabuleiro.setAttribute("id", "jogador_2");
  } else {
    tabuleiro.setAttribute("id", "jogador_1");
  }

  mudaVez(tabuleiro);
};
