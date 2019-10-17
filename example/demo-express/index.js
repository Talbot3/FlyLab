const express = require('express');
const path = require('path');
const app =express();
app.use('/static', express.static('public'))
// http://localhost:3001/static/1.png
app.listen(3001, ()=> console.log('listen 3001'));