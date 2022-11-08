"use strict";
import { limparTimer } from "../../service/limparTimer.js";
import { casa_tabuleiro } from "../app.js";
import { resultGame } from "../components/ResultGame.js";
import { modal, SwitchView } from "../components/SwitchScreen.js";
import { definirPeca, mapSwitch } from "./definirPeca.js";
import { restartGame } from "./restartGame.js";
import { verificaEmpate } from "./verificaEmpate.js";

const modalResultado = document.querySelector('.modal');


const verificaSeGanhou = (jogador, trioIndicesTabuleiro) => {
  
  const verifInd0 = casa_tabuleiro[trioIndicesTabuleiro[0]].classList[1];
  const verifInd1 = casa_tabuleiro[trioIndicesTabuleiro[1]].classList[1];
  const verifInd2 = casa_tabuleiro[trioIndicesTabuleiro[2]].classList[1];

  
  const mensagemResultado = document.querySelector('.modal_message');

  if (verifInd0 === jogador && verifInd1 === jogador && verifInd2 === jogador) {

    loadResult(jogador);
  }

  let empate = verificaEmpate();

  if(empate === true){
    
    loadResult("empate");
    //gera mensagem de empate caso a função verificaEmpate retornar true
  }
  
};
//Pega os o trio de índices e verifica se nesses indices de casas a classe das casas é o mesmo jogador para as 3, se for, vai ativar o result game e tornar visível o modal
//Tornando visivel o modal, aparece a tela de resultado

export const verificaIndices = (jogador)=> {
  
  const indVic = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8]];
  const [ind1,ind2,ind3,ind4,ind5,ind6,ind7,ind8] = indVic;
  // atribuição desestruturada const [variosNomes] = [variosValores]
  //////////////////////////

  const mapInd = new Map();
  
  const Inds = [ind1,ind2,ind3,ind4,ind5,ind6,ind7,ind8];

  for (let i = 0; i < Inds.length; i++) {
    const el = Inds[i];
    mapInd.set(`ind${i+1}`,el);
  }

  for(let i = 1; i <=8; i++){
    verificaSeGanhou(jogador,mapInd.get(`ind${i}`));
  }

}

//Atribui cada const ind á um trio ([0,1,2])atrávez da atribuição desestruturada
//Usa um loop for e map para conseguir "enviar" o trio como paramentro para a função verificaSeGanhou

const loadResult = (resultado)=> {
  modalResultado.innerHTML =  resultGame(resultado);
  const modalContent = document.querySelector(".modal_content");
  const buttonRestart = document.createElement("button");
  buttonRestart.classList.add("start_game");
  buttonRestart.innerHTML = "Reiniciar Jogo";
  buttonRestart.addEventListener("click" , ()=> {
    mapSwitch.clear();
    restartGame(limparTimer)
    modal.innerHTML = SwitchView();

    definirPeca();
  }  );
  modalContent.appendChild(buttonRestart)

  modalResultado.classList.remove('invisivel');
}