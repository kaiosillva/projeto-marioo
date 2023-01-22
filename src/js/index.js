/* 
objetivo 1 - quando o usuario clicar no botão de ver trailer , devemos abrir a modal com o video do trailer
  
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usar o js
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4 - abrir a modal na tela.

objetivo 2 - quando o usuario clicar no X devemos fechar o modal

- passo 1 - dar um jeito de pegar io elemento de fechar a modal usando js
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão 
- passo 3 - fechar a modal
*/

console.log('mostrar o document', document);

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usar o js
const botaoTrailer = document.querySelector (".botao-trailer");

//bjetivo 2 - quando o usuario clicar no X devemos fechar o modal
//passo 1 - dar um jeito de pegar io elemento de fechar a modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector (".modal")

const video = document.getElementById("video");;

const  linkDoVideo = video.src

//passo 2 - dar um jeito de identificar quando o usuário clicar no botao
botaoTrailer.addEventListener ("click", () => {
    console.log("clicou no botão veja o trailer");
   //passo 4 - abrir a modal na tela.
   modal.classList.add("aberto"); 
   video.setAttribute("src", linkDoVideo)
});



 //passo 2 - dar um jeito de identificar quando o usuário clicar no botão 
botaoFecharModal.addEventListener ("click", () => {
    //passo 3 - fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "")

});



