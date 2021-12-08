const fs = require('fs')

const request = require('request');

let url = process.argv[2];
let localPath = process.argv[3];
console.log(process.argv);


request(url, (error, response, body) => {

  if (error) {
    console.log('Failed request', error);
  }

  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error('Failed to write to local path', err)
      return
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to  ${localPath}`)
    }
    //file written successfully
  });
});


