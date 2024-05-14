// Mostre no console cada parágrado do site
document.querySelectorAll("p").forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
Array.from(document.querySelectorAll("p")).forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

// envolver item e index no mesmo parenteses
imgs.forEach((item, index) => {
  console.log("primeiro", item, index);
});

//adicionar () antes da arrow function
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// está correta
imgs.forEach(() => i++);
