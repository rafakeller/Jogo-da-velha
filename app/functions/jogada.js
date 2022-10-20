"use strict";
import { mudaVez } from "../../service/mudaVez.js";
import { mapSwitch } from "./definirPeca.js";

export const jogada = (id, vezJogador, casa_tabuleiro) => {
  casa_tabuleiro[id].classList.add(`${vezJogador}`);
  casa_tabuleiro[id].classList.add(`${mapSwitch.get(vezJogador)}`);
  //faz ser adicionado a classe xis ou bolinha no quadradinho clicado assim correspondendo a peça ao jogador

  const tabuleiro = document.querySelector(`#${vezJogador}`);
  

  if (vezJogador === "jogador_1") {
    tabuleiro.setAttribute("id", "jogador_2");
  } else {
    tabuleiro.setAttribute("id", "jogador_1");
  }

  mudaVez(tabuleiro);
};
//Faz aparecer uma figura a cada clique, atrávez da adição de uma classe. Faz a figura mudar á cada jogada, atrávez da mudança do id de tabuleiro