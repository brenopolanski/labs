const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

// Read in the file, convert it to base64, store to S3
fs.readFile('del.txt', (err, data) => {
  if (err) {
    throw err;
  }

  const base64data = new Buffer(data, 'binary');
  const s3 = new AWS.S3();

  s3.upload({
    Bucket: 'brenopolanski.com',
    Key: 'del2.txt',
    Body: base64data,
    ACL: 'public-read'
  },
  resp => {
    console.log(arguments);
    console.log('Successfully uploaded package!');
  });
});
