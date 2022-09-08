"use strict"
import { inputVezJogador, painelJogador } from "../app/app.js";

//Loop para mudar a id do tabuleiro, mundando quem joga...sendo utilizado no setInterval para mudar o jogador a cada 15s
export const tempoJogada = () => {
  const tabuleiro = document.querySelector(".tabuleiro");
  const idTabuleiro = tabuleiro.getAttribute("id");

  if (idTabuleiro === "jogador_1") {
    tabuleiro.setAttribute("id", "jogador_2");

  } else {
    tabuleiro.setAttribute("id", "jogador_1");
  }

  //Mudando o valor no painel á cada 15 segundos de acordo com "ativar timer"
  inputVezJogador.value = tabuleiro.getAttribute("id");

  const textoFormatado = `${inputVezJogador.value[0].toUpperCase() + inputVezJogador.value.substr(1).replace("_", " ")}`

  painelJogador.innerHTML = textoFormatado;

  
};