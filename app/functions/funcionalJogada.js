"use strict";

import { ativarTimer } from "../../service/ativarTimer.js";
import { limparTimer } from "../../service/limparTimer.js";
import { arrayParam, casa_tabuleiro } from "../app.js";
import { jogada } from "./jogada.js";
import { verificaEmpate } from "./verificaEmpate.js";
import { verificaIndices } from "./verificaVitoria.js";

export const funcionalJogada = (casa, id) => {
  const jogador = casa.parentNode.getAttribute("id");
  const segundaClasse = casa_tabuleiro[id].classList[1];

  //a cada click vai ativar a função jogada, limpar o timer de 15s e ativa-lo no mesmo instante
  if (segundaClasse === undefined) {
    jogada(id, jogador, casa_tabuleiro);
    limparTimer(arrayParam);
    ativarTimer(arrayParam);
  } else {
    alert("Espaço já jogado!Escolha outro campo!");
  }

  verificaIndices(jogador);
  verificaEmpate();
};
