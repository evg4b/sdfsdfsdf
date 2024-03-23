const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'data.txt'), JSON.stringify(process.argv), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
