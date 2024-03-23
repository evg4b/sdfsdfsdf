const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
