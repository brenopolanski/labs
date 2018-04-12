// busca elementos
const $ = document.querySelector.bind(document);
const botao = $('.botao');
const painel = $('.painel');

const identificadorUnico = Symbol();
painel[identificadorUnico] = 0;

botao.addEventListener('click', () => {
  // a cada clique incrementa painel.contador exibindo seu estado mais atual
  painel[identificadorUnico] += 1;
  painel.textContent = painel[identificadorUnico];
});
