var camera = require('nativescript-camera');
var social = require('nativescript-social-share');
var frameModule = require('ui/frame');

var page;
var foto;

exports.pagina2 = function() {
  var paginaAtual = frameModule.topmost();
  paginaAtual.navigate('views/pagina2/pagina2');
};

exports.pageLoaded = function (args) {
  page = args.object;
  foto = page.getViewById('foto');
};

exports.tirarFoto = function () {
  camera.requestPermissions();
  var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
  camera.takePicture(options)
    .then(function (imageAsset) {
      foto.src = imageAsset;
    }).catch(function (err) {
      console.log('Error -> ' + err.message);
    });
};

exports.compartilhar = function () {
  // SocialShare.shareImage(foto.src, "How would you like to share this image?");
  social.shareText('123 testando... 123');
};
