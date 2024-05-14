// Adicione a classe ativo a todos os itens do menu
const itensDoMenu = Array.from(document.querySelectorAll(".menu li"));
itensDoMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensDoMenu.forEach((item, index) => {
  if (index === 0) return;
  item.classList.remove("ativo");
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item.attributes.alt ? "Possui o atributo alt." : "Não possui.");
});
// ou
imgs.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu [href^="https"');
const novoHref = linkExterno.setAttribute("href", "www.google.com");
