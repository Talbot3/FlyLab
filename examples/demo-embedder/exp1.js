const { AsyncResource } = require("async_hooks");
const sqlite3 = require('sqlite3').verbose();

class DBQuery  extends AsyncResource {
    constructor() {
        super('DBQuery');
        this.db = new sqlite3.Database(':memory:');
    }

    init() {
        const {db} = this;
        return new Promise((resolve, reject)=>{
            db.serialize(function() {
                db.run("CREATE TABLE lorem (info TEXT)");
              
                var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
                for (var i = 0; i < 10; i++) {
                    stmt.run("Ipsum " + i);
                }
                stmt.finalize(resolve);
            });
        })
    }

    getInfo(callback) {
        const {db} = this;
        db.each("SELECT rowid AS id, info FROM lorem", (err, data)=>this.runInAsyncScope(callback, null, err, data));
    }

    close() {
        this.db.close();
        this.db = null;
        this.emitDestroy();
    }
}

(async()=>{
    let dbQuery = new DBQuery();
    await dbQuery.init();
    dbQuery.getInfo((err, data)=> {
      console.log(err, data);
    })
    dbQuery.close()
})();
