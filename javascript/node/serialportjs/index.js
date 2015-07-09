var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

console.log(serialport);

// list serial ports:
serialport.list(function (err, ports) {
  console.log(err);
  console.log(ports);
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});
