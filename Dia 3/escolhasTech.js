// Função para apresentar uma pergunta e obter a resposta do usuário
function perguntar(pergunta) {
    return prompt(pergunta).toLowerCase();
  }
  
  // Função principal do jogo
  function iniciarJogo() {
    // Primeira escolha: Front-end ou Back-end?
    let escolha = perguntar("Você quer seguir para a área de Front-End ou Back-End?");
  
    if (escolha === "front-end") {
      // Escolha de framework Front-end
      escolha = perguntar("Você quer aprender React ou Vue?");
      if (escolha === "react") {
        console.log("Ótimo! O React é uma ótima escolha para criar interfaces de usuário.");
      } else if (escolha === "vue") {
        console.log("O Vue é uma excelente opção para quem busca um framework mais leve e intuitivo.");
      } else {
        console.log("Opção inválida. Vamos continuar com React.");
        escolha = "react";
      }
    } else if (escolha === "back-end") {
      // Escolha de linguagem Back-end
      escolha = perguntar("Você quer aprender C# ou Java?");
      if (escolha === "c#") {
        console.log("O C# é uma linguagem poderosa, ideal para desenvolvimento .NET.");
      } else if (escolha === "java") {
        console.log("O Java é uma linguagem muito versátil e com uma grande comunidade.");
      } else {
        console.log("Opção inválida. Vamos continuar com Java.");
        escolha = "java";
      }
    } else {
      console.log("Opção inválida. Vamos para o Front-End.");
      escolha = "front-end";
    }
  
    // Escolha de especialização
    escolha = perguntar("Você quer se especializar na área escolhida ou se tornar Fullstack?");
    if (escolha === "especializar") {
      console.log("Ótimo! A especialização é fundamental para se destacar no mercado.");
    } else if (escolha === "fullstack") {
      console.log("Ser Fullstack é uma ótima opção para quem gosta de ter uma visão completa do desenvolvimento.");
    } else {
      console.log("Opção inválida. Vamos considerar que você quer se especializar.");
    }
  
    // Lista de tecnologias para aprender
    console.log("Agora, vamos definir algumas tecnologias que você gostaria de aprender:");
    let maisTecnologias = "sim";
    while (maisTecnologias === "sim") {
      let novaTecnologia = perguntar("Qual tecnologia você gostaria de aprender?");
      console.log(`Ótimo! ${novaTecnologia} é uma tecnologia interessante.`);
      maisTecnologias = perguntar("Tem mais alguma tecnologia que você gostaria de aprender? (sim/não)");
    }
  
    console.log("Parabéns! Você criou seu próprio plano de estudos. Boa sorte em sua jornada!");
  }
  
  // Iniciando o jogo
  iniciarJogo();