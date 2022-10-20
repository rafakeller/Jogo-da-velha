"use strict";

import { limparTimer } from "../service/limparTimer.js";
import { ativarTimer } from "../service/ativarTimer.js";
import { fechaModal } from "./functions/modal.js";
import { restartGame } from "./functions/restartGame.js";
import { funcionalJogada } from "./functions/funcionalJogada.js";
import { loadCasas } from "../service/loadCasas.js";
import { definirPeca } from "./functions/definirPeca.js";
import { modal, SwitchView } from "./components/SwitchScreen.js";

const $ = document.querySelector.bind(document);
export const tabuleiro = $(".tabuleiro");

loadCasas();
modal.innerHTML = SwitchView();
//modal.appendChild(SwitchView());
definirPeca();

export const casa_tabuleiro = document.querySelectorAll(".casa_tabuleiro");

//Fazer aparecer o jogador (1 ou 2) na tela

const IdTabuleiro = tabuleiro.getAttribute("id");

export const painelJogador = $("[data-vez-jogador]");

export const inputVezJogador = $(".valorVezJogador");

inputVezJogador.value = IdTabuleiro;

const textoFormatado = `${
  inputVezJogador.value[0].toUpperCase() +  inputVezJogador.value.substr(1).replace("_", " ")
}`;

painelJogador.innerHTML = textoFormatado;

//Conteúdo para o timer
let temporizador;
let tempo = 0;
let intervalo;

//Mostrando o cronômetro externo na tela
const timer = document.querySelector("[data-timer]");

timer.innerHTML = tempo;

//Criei uma lista com os parâmetros do ativarTempo, pois coloca-los da forma tradicional tava dando conflito com o setInterval
export const arrayParam = { tempo, timer, intervalo, temporizador }; //objeto

//Ativa o cronômetro interno de 5s antes de qualquer jogada no ínicio
export const botaoInicia = document.querySelector("[data-start-game]");

botaoInicia.addEventListener("click", (event) => {
  fechaModal(event);
  restartGame(limparTimer);
  ativarTimer(arrayParam);
});


casa_tabuleiro.forEach((casa, id) => {
  casa.addEventListener("click", () => {
    funcionalJogada(casa, id);
  });
});
//Estrutura  para executar uma função a cada click para cada quadradinho(casa-tabuleiro)
