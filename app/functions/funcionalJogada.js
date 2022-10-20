"use strict";

import { ativarTimer } from "../../service/ativarTimer.js";
import { limparTimer } from "../../service/limparTimer.js";
import { arrayParam, casa_tabuleiro } from "../app.js";
import { jogada } from "./jogada.js";
import { verificaIndices } from "./verificaIndices.js";

export const funcionalJogada = (casa, id) => {

  const jogador = casa.parentNode.getAttribute("id");

  const segundaClasse = casa_tabuleiro[id].classList[1];

  if (segundaClasse === undefined) {
    jogada(id, jogador, casa_tabuleiro);
    limparTimer(arrayParam);
    ativarTimer(arrayParam);
  } else {
    alert("Espaço já jogado!Escolha outro campo!");
  }

  verificaIndices(jogador);
};

//Verifica se o campo clicado já tem uma peça, se não tiver, ele vai executar a jogada, se tiver ele vai emitir um alert
