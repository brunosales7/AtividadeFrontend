var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O" + nome + ", serve para iniciar o git.Parabéns você acertou!");
  }else {
    alert("Voce errou o comando, \n"+
    "porque foi retornado o comando errado: "+nome);
  }
  window.location="aula2.html";
};