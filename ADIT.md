Proposta => Jogo da velha

Requisitos:
  - Escolher entre Circulo e X
  - Escolha onde a peça será jogada - check

Regra de negócio:
  - Apenas uma jogada por vez - check

  - Campos já preenchidos não podem ser preenchidos novamente - o js precisa perceber q a peça já foi jogada - check

  - Tempo mínimo para cada jogada 15 segundos - check

  - O nome (jogador_1 ou jogador_2) apareça em um painel na sua vez de jogar! - check

  - O vencendor será quem enfileirar a figura na horizontal, ou vertical ou diagonal.

  - 1° Verificar se a ordem é: [0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[0,3,6],[1,4,7],[2,5,8] - índice

  - 2° Verficar se é a mesma peça = mesma segunda classe - pegar 2° classe

  - ganhar = tempo zerar
  - ganhar = não conseguir jogar mais, limpar a tela
  - ganhar = aparecer uma figura ou mensagem

  
  - FAZER Q O JS VERIFIQUE NAS LI SE A CLASSE É !== DE "UNDERFINED" (JÁ FOI JOGADO) NOS INDICES ACIMA, USANDO O PARAMETRO "segundaClasse" - check

  -Um  "case" para cada possibilidade de ganho - Check

  -Identificar um empate (ninguem ganhou)
     .se todas os quadrados tiverem jogador_1 ou jogador_2 como 2°classe e não tiver um ganho então é empate

Etapas:
  - Clicar e mudar a imagem de fundo - check
  - Mudar a imagem de acordo com a vez do jogador - check



