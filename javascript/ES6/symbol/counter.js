const $ = document.querySelector.bind(document);
const btn = $('.btn-increase');
const panel = $('.panel');

const uniqueIdentifier = Symbol();
panel[uniqueIdentifier] = 0;

btn.addEventListener('click', () => {
  panel[uniqueIdentifier] += 1;
  panel.textContent = panel[uniqueIdentifier];
});
