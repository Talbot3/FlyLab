const fs = require('fs');

function* idMaker() {
    let index = 0;
    while(true) {
        yield index++;
    }
}
(async()=>{
    let readable =  fs.createReadStream("./README.md");
    // for await (const id of idMaker()) {
    //     console.log(id);
    // }
    let content =[];
    for await (const chunk of readable) {
        content.push(chunk);
    } 
    console.log(content.length, content[0]);
})()
