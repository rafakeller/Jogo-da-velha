"use strict"

import { mapSwitch } from "../functions/definirPeca.js"

export const resultGame = (ganhador)=> {
  let tituloResultado = "VENCEDOR!"; 
  if(ganhador === "empate"){
    tituloResultado = "EMPATE!";
  }

  return `
    <article class="modal_content">

      <!--Aplicar o componente da tela de resultados-->
      
      <!---->
      <div class="modal_ganhador">
        <h2 class="vencedor">${tituloResultado}</h2>
        <div class="modal_ganhador_image ${ganhador} ${mapSwitch.get(ganhador)}"> </div>

      </div>

      
    </article>
    
  `;
}

//faz aparecer a tela de RESULTADO (Ganhador ou empate!)
//retorna para js esse trecho de código que contem tags que o html reconhece, dessa forma a página de escolha de peça fica visivel
