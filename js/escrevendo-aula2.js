var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para salvar um commit?");
  if ((nome == "git commit -m")) {
    alert("O" + nome + ", serve para salvar o git.Parabéns você acertou!");
  } else {
    alert("Voce errou o comando, \n"+
    "porque foi retornado o comando errado: "+nome);
  }
 
  window.location="aula1.html";
};