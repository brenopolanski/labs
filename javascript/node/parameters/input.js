// Newer versions of node.js use the lower-case argv
var argv = process.ARGV || process.argv;

// {"apiVersion":"1.0","dataSourceName":"signoff","tables":[{"id":"id_tbl_0","name":"signoff1","sourceTable":"signoff1","keyColumn":"%Entity A"}],"measures":[{"id":"id_measure_0","name":"Direction","properties":{"sourceColumn":"Direction","defaultAggregation":"sum"}},{"id":"id_measure_1","name":"Call duration","properties":{"sourceColumn":"Call Duration","defaultAggregation":"sum"}}]}

console.log(typeof argv);
console.log(argv[2]);

var data = JSON.parse(argv[2]);

console.log(data.apiVersion);
