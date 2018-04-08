'use strict';

import premiumColors from './premium';

const colorBtn = document.getElementById('color');
const premiumColorBtn = document.getElementById('premium-color');

const availableColors = [
  'aliceblue',
  'blanchedalmond',
  'darkorchid',
  'darkseagreen',
  'khaki',
  'lightblue'
];

colorBtn.addEventListener('click', () => {
  const randIdx = Math.floor(Math.random() * availableColors.length);
  document.documentElement.style.setProperty('--bg', availableColors[randIdx]);
});

premiumColorBtn.addEventListener('click', () => {
  const randIdx = Math.floor(Math.random() * premiumColors.length);
  document.documentElement.style.setProperty('--bg', premiumColors[randIdx]);
});
