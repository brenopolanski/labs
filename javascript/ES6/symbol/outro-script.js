(() => {
  const identificadorUnico = Symbol();
  const painel = document.querySelector('.painel');

  painel[identificadorUnico] = 'Sr. Contador';
})();
