var camera = require('nativescript-camera');
var social = require('nativescript-social-share');

var page;
var foto;

exports.pageLoaded = function(args) {
  page = args.object;
  foto = page.getViewById('foto');
};

exports.tirarFoto = function() {
  camera.requestPermissions();
  var options = {
    width: 300,
    height: 300,
    keepAspectRatio: false,
    saveToGallery: true
  };

  camera.takePicture(options).then(function(imageAsset) {
    foto.src = imageAsset;
  });
};
