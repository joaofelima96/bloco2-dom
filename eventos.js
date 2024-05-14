// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const links = document.querySelectorAll("a[href^='#'");

function addClasseAtivo(event) {
  event.preventDefault();
  const linkSelecionado = event.target;
  linkSelecionado.classList.add("ativo");

  links.forEach((item) => {
    if (
      item.innerText !== linkSelecionado.innerText &&
      item.hasAttribute("class", "ativo")
    ) {
      item.classList.remove("ativo");
    }
  });
}

links.forEach((item) => {
  item.addEventListener("click", addClasseAtivo);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

function exibirElementos(event) {
  console.log(event.currentTarget);
  event.target.remove(); // exercício proposto abaixo
}

todosElementos.forEach((item) => {
  item.addEventListener("click", exibirElementos);
});

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentarTexto(event) {
  if (event.key === "t") {
    document.body.classList.toggle("resize");
  }
}

window.addEventListener("keydown", aumentarTexto);
