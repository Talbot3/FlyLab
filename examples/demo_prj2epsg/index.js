const prj2epsg = require('prj2epsg');
const { readFile } =require('fs').promises;
const path = require('path');
(async()=> {
  let content = await readFile(path.join('./postgis-workshop-2018/data/ny_streets.prj'));
  console.log(prj2epsg.fromPRJ(content.toString()));
})()
