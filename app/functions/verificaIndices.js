"use strict";
import { casa_tabuleiro } from "../app.js";
import { verificaEmpate } from "./verificaEmpate.js";

const verificaSeGanhou = (jogador, listaIndicesTabuleiro) => {
  
  const verifInd0 = casa_tabuleiro[listaIndicesTabuleiro[0]].classList[1];
  const verifInd1 = casa_tabuleiro[listaIndicesTabuleiro[1]].classList[1];
  const verifInd2 = casa_tabuleiro[listaIndicesTabuleiro[2]].classList[1];

  const modalResultado = document.querySelector('.modal');

  const mensagemResultado = document.querySelector('.modal_message');

  if (verifInd0 === jogador && verifInd1 === jogador && verifInd2 === jogador) {

    mensagemResultado.innerHTML = `${jogador[0].toUpperCase() + jogador.substr(1).replace("_", " ")} ganhou`;

    modalResultado.classList.remove('invisivel');
  }

  let empate = verificaEmpate();

  if(empate === true){
    mensagemResultado.innerHTML = "Empate!";

    modalResultado.classList.remove('invisivel');
  }
  
  
};

export const verificaIndices = (jogador)=> {
  //atribuição estruturada -- nomeVariavel = valor
  // atribuição desestruturada const [variosNomes] = [variosValores]
  //lista de objetos
  const indVic = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8]];
  
  //listando varias variaveis, atribuição desestruturada
  const [ind1,ind2,ind3,ind4,ind5,ind6,ind7,ind8] = indVic;
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