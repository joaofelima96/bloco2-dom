// Verifique a distância da primeira imagem em relação ao topo da página
const distPrimeiraImagem = document.querySelector("img").offsetTop;
console.log(distPrimeiraImagem);

// Retorne a soma da largura de todas as imagens
let somaDasLarguras = 0;
const todasImagens = document.querySelectorAll("img");
todasImagens.forEach((item) => {
  somaDasLarguras += item.getBoundingClientRect().width;
});
console.log(somaDasLarguras);

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const todosOsLinks = document.querySelectorAll("a");
todosOsLinks.forEach((item) => {
  if (item.offsetHeight < 48 && item.offsetWidth >= 48) {
    console.log(
      `Este item ${item} está com uma altura menor que 48px, não recomendado para telas que utilizando o dedo para navegar.`
    );
  }
  if (item.offsetWidth < 48 && item.offsetHeight >= 48) {
    console.log(
      `Este item ${item} está com uma largura menor que 48px, não recomendado para telas que utilizando o dedo para navegar.`
    );
  }
  if (item.offsetHeight >= 48 && item.offsetWidth >= 48) {
    console.log(
      `Este item ${item} está dentro do padrão de altura e largura (48px)`
    );
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menorQue720 = window.matchMedia("(max-width: 720px)").matches;

if (menorQue720) {
  document.querySelector(".menu").classList.add("menu-mobile");
}
