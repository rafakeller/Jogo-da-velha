"use strict"

export const modal = document.querySelector(".modal");

export const SwitchView =  ()=>{
  

  return `<article class="modal_content">

            <!--Aplicar o componente da tela de resultados-->
            
            <!---->
            <h1 class="escolha">Escolha sua peça!</h1>
            <div class="modal_escolha">
              <span class="detalhe"></span>
              <h2 class="escolha_jogador">Jogador 1</h2>

              <div class="modal_button">
                <button class="bolinhaSwitch" data-switch></button>
                <button class="xisSwitch" data-switch></button>
              </div>
            </div>

          </article>`;
}
//retorna para js esse trecho de código que contem tags que o html reconhece, dessa forma a página de escolha de peça fica visivel





    /**
      const modalContent = document.createElement("article");
      modalContent.classList.add("modal_content");

      const textoEscolha = document.createElement("h1");
      textoEscolha.classList.add("escolha");
      textoEscolha.innerHTML = "Escolha sua peça!";

      const modalEscolha = document.createElement("div");
      modalEscolha.classList.add("modal_escolha");

      const detalhe = document.createElement("span");
      detalhe.classList.add("detalhe");

      const escolhaJogador = document.createElement("h2");
      escolhaJogador.classList.add("escolha_jogador");
      escolhaJogador.innerHTML = "Jogador 1"

      const modalButton = document.createElement("div");
      modalButton.classList.add("modal_button");

      const buttonBolinha = document.createElement("button");
      buttonBolinha.classList.add("bolinha");
      buttonBolinha.setAttribute("data", "data-switch");

      const buttonXis = document.createElement("button");
      buttonXis.classList.add("xis");
      buttonXis.setAttribute("data", "data-switch");

      const buttonRestartGame = document.createElement("button");
      buttonRestartGame.classList.add("start_game");
      buttonRestartGame.setAttribute("data", "data-start-game");
      buttonRestartGame.innerHTML = "Reiniciar Jogo";

      modalButton.appendChild(buttonBolinha);
      modalButton.appendChild(buttonXis);

      modalEscolha.appendChild(detalhe);
      modalEscolha.appendChild(escolhaJogador);
      modalEscolha.appendChild(modalButton);

      modalContent.appendChild(textoEscolha);
      modalContent.appendChild(modalEscolha);
      modalContent.appendChild(buttonRestartGame);

      return modalContent;
     */