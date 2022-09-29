"use strict"
import { tabuleiro } from "../app/app.js";

export const loadCasas = ()=> {
  let itens = 1;
  while(itens <=9){
    const itemTabuleiro = document.createElement("li");
    itemTabuleiro.classList.add("casa_tabuleiro");
    tabuleiro.appendChild(itemTabuleiro);

    itens++;
  } 
}