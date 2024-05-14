// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const elementoCopy = document.querySelector(".copy");

elementoCopy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector(".faq-lista dt:first-child");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faqElement = document.querySelector(".faq");
const animaisElement = document.querySelector(".animais");

const listaAnimais = animaisElement.querySelector("ul");
const listaFaq = faqElement.querySelector("dl");

// é necessário que o segundo argumento seja filho do elemento que está recebendo o método "replaceChild"
faqElement.replaceChild(listaAnimais, listaFaq);
