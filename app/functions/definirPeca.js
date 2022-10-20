"use strict";

import { limparTimer } from "../../service/limparTimer.js";
import { closeModal } from "./modal.js";
import { restartGame } from "./restartGame.js";

export const mapSwitch = new Map();

export const definirPeca = () => {
  const buttonSwitch = document.querySelectorAll("[data-switch]");

  const circle = "Circle";
  const X = "X";
  const jogador1 = "jogador_1";
  const jogador2 = "jogador_2";

  buttonSwitch.forEach((Switch, id) => {
    Switch.addEventListener("click", () => {
      const classSwitch = buttonSwitch[id].classList[0];
      if (classSwitch === "xis") {
        mapSwitch.set(jogador1, X);
        mapSwitch.set(jogador2, circle);
      } else {
        mapSwitch.set(jogador1, circle);
        mapSwitch.set(jogador2, X);
      }

      restartGame(limparTimer);
      closeModal();
    });
  });
};
//Se o botão clicado for x então x vai ser setado dentro de jogador 1, e se for bola então bola vai ser setado dentro de jogador 1
//map = vincula um texto a uma variavel (set) e podemos buscar a variavel com esse mesmo texto (get), chave - valor
//Apartir do momento de clique na peça escolhida o jogo inicia, dando "restart game" e "fechando o modal"
//