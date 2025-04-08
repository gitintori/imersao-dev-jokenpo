function jogar() {
    let idade = prompt("Quantos anos você tem?");
    idade = Number(idade);
  
    // Verifica se é um número válido e maior que 0
    if (isNaN(idade) || idade <= 0) {
      alert("Por favor, digite um número válido.");
    } else if (idade >= 18) {
      alert("Você pode jogar jokenpô!");
    } else {
      alert("Você não pode jogar jokenpô.");
    }
  
    if (idade >= 18) {
      let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
      escolhaJogador = Number(escolhaJogador);
      let escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
      if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
        alert("Opção inválida. Escolha digitando 1, 2 ou 3.");
        return;
      }
  
      // Se empate
      if (escolhaJogador == escolhaComputador) {
        alert("O computador escolheu " + escolhaComputador + ". Empate!");
      }
  
      // Se jogador escolhe 1 (Pedra)
      if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
          alert("O computador escolheu " + escolhaComputador + ". Você perdeu!");
        } else if (escolhaComputador == 3) {
          alert("O computador escolheu " + escolhaComputador + ". Você ganhou!");
        }
      }
  
      // Se jogador escolhe 2 (Papel)
      if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
          alert("O computador escolheu " + escolhaComputador + ". Você ganhou!");
        } else if (escolhaComputador == 3) {
          alert("O computador escolheu " + escolhaComputador + ". Você perdeu!");
        }
      }
  
      // Se jogador escolhe 3 (Tesoura)
      if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
          alert("O computador escolheu " + escolhaComputador + ". Você perdeu!");
        } else if (escolhaComputador == 2) {
          alert("O computador escolheu " + escolhaComputador + ". Você ganhou!");
        }
      }
    }
  }
  