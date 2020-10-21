function* idMaker() {
    let index = 0;
    while(true) {
        yield index++;
    }
}
(async()=>{
    for await (const id of idMaker()) {
        console.log(id);
    }
})()
