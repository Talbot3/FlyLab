const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname, './wahahah').toString();
// fs.writeFileSync(filePath, 'wahaha');
fs.unlinkSync(filePath);