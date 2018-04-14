(() => {
  const uniqueIdentifier = Symbol();
  const panel = document.querySelector('.panel');

  panel[uniqueIdentifier] = 'Sr. Counter';
})();
