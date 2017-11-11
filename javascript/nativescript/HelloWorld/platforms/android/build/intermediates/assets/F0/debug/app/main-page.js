var page;
var foto;

exports.pageLoaded = function(args) {
  page = args.object;
  foto = page.getViewById('foto');
};

exports.tirarFoto = function() {
  alert('Tirar foto !');
  // Coloque qq foto
  foto.src = '~/images/bigmac.jpg';
};
