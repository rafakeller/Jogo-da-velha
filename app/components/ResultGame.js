"use strict"

import { mapSwitch } from "../functions/definirPeca.js"

export const resultGame = (ganhador)=> {
  return `
    <article class="modal_content">

      <!--Aplicar o componente da tela de resultados-->
      <h1 class="modal_message">${ganhador[0].toUpperCase() + ganhador.substr(1).replace("_", " ")}</h1>
      <!---->
      <div class="modal_ganhador">
        <h2 class="vencedor">VENCEDOR!</h2>
        <div class="modal_ganhador_image ${ganhador} ${mapSwitch.get(ganhador)}"> </div>

      </div>

      <button class="start_game" data-start-game>Reiniciar jogo</button>
    </article>
    
  `;
}

//faz aparecer a tela de RESULTADO (Ganhador ou empate!)
//retorna para js esse trecho de código que contem tags que o html reconhece, dessa forma a página de escolha de peça fica visivel
