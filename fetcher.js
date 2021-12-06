const request = require('request');
const fs = require('fs');

request(process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(process.argv[3], body, (e) => {
      (e) ? console.log(e) : console.log("Downloaded and saved to " + process.argv[3]);
    });
  }
});