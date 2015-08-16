var serialjs = require('serialport-js');

serialjs.find(
    function(ports) {
        console.log('available usb serial : ', ports);
    }
);
