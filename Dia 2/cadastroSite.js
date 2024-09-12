// Mensagem de boas-vindas
console.log("Bem-vindo à nossa plataforma de cadastro!");

// Pedir o nome do usuário e armazenar em uma variável
let nome = prompt("Qual o seu nome?");

// Pedir a idade do usuário e armazenar em uma variável
let idade = prompt("Quantos anos você tem?");

// Pedir a linguagem de programação e armazenar em uma variável
let linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibir a mensagem personalizada
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Perguntar se gosta da linguagem e armazenar a resposta
let gostaDaLinguagem = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

// Verificar a resposta e exibir a mensagem correspondente
if (gostaDaLinguagem === "1") {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDaLinguagem === "2") {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  console.log("Resposta inválida. Por favor, digite 1 para SIM ou 2 para NÃO.");
}

